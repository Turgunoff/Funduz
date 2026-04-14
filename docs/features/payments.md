# To'lov Integratsiyasi

> Funduz "All-or-Nothing" modelda ishlaydi: backerlardan olingan fundlar **escrow** holatida saqlanadi va loyiha maqsadiga yetganida loyiha egasiga o'tadi. Yetmasa — to'liq qaytariladi.

---

## Qo'llab-quvvatlanadigan provayderlar

| Provider | Status | Hujjat |
|---|---|---|
| Payme (Paycom) | Must-have | https://developer.help.paycom.uz |
| Click | Must-have | https://docs.click.uz |
| Uzum Pay | Nice-to-have | https://docs.uzum.uz |
| Apelsin | v1.1+ | — |

---

## Asosiy konsepsiya: Escrow flow

```
1. Backer pledge yaratadi
   ↓
2. To'lov tizimida HOLD (pre-auth) qilinadi — pul ushlanadi, lekin yechilmaydi
   ↓
3. Loyiha deadline'gacha kutiladi
   ↓
   ├── Maqsadga yetdi → CONFIRM (pul yechiladi → escrow → loyiha egasi)
   └── Yetmadi       → CANCEL (hold bekor qilinadi → backer'ga qaytadi)
```

> **Muhim:** Payme va Click "subscribe" API'lari hold/charge'ni qo'llab-quvvatlaydi. Agar qo'llab-quvvatlamasa — to'liq charge qilib, keyin manual refund kerak bo'ladi.

---

## Payme integratsiyasi

### Endpoint
- Sandbox: `https://checkout.test.paycom.uz`
- Production: `https://checkout.paycom.uz`

### Asosiy methodlar (Merchant API)
- `CheckPerformTransaction` — backer to'lay olishini tekshirish
- `CreateTransaction` — pre-auth (hold)
- `PerformTransaction` — confirm (loyiha funded bo'lganda)
- `CancelTransaction` — bekor qilish (refund)
- `CheckTransaction` — status
- `GetStatement` — periodik report

### Webhook
Payme bizning serverga JSON-RPC POST yuboradi. Authentication: Basic auth (Merchant ID + key).

```typescript
// Pseudo
POST /api/webhooks/payme
{
  "method": "CreateTransaction",
  "params": {
    "id": "...",
    "time": ...,
    "amount": ...,
    "account": { "pledge_id": "..." }
  }
}
```

### Idempotency
- Har bir webhook'ni `transaction_id` bo'yicha unique qilib saqlash
- Duplicate request'larda oldingi response'ni qaytarish

---

## Click integratsiyasi

### Hujjatlar
- Click Merchant API: https://docs.click.uz/click-api/
- SHOP-API va Web SDK ikkalasi mavjud

### Asosiy flow
1. Frontend: Click button → invoice yaratiladi
2. Foydalanuvchi Click ilovasiga o'tadi va to'laydi
3. Click bizga **Prepare** → keyin **Complete** webhook yuboradi
4. Biz Click signature'ni tekshiramiz va `pledge.status = 'authorized'` qilamiz

### Signature validation
```
sign_string = click_trans_id + service_id + secret_key + merchant_trans_id + amount + action + sign_time
md5(sign_string) === request.sign_string
```

---

## Uzum Pay (kelajakda)

- API hujjatlari: https://docs.uzum.uz
- Yuqori auditoriya (Uzum Market integratsiyasi)
- v1.1+ qo'shilishi mumkin

---

## All-or-Nothing logikasi (backend)

```
Loyiha deadline kelganda (cron job, BullMQ scheduled):

1. Loyihaning jami pledge summasini hisoblang
2. Agar total >= goal:
   a. project.status = 'funded'
   b. Har bir pledge uchun: payment.confirm()
   c. Loyiha egasini xabardor qiling
   d. Backerlarga rahmat email + Telegram
3. Agar total < goal:
   a. project.status = 'failed'
   b. Har bir pledge uchun: payment.cancel() (refund)
   c. Backerlarga refund haqida xabar
   d. Loyiha egasiga afsus xabari
```

---

## Refund flow

### Avtomatik (preferred)
- Loyiha failed → barcha pledge'lar uchun `cancelTransaction`
- BullMQ retry: 3 marta, exponential backoff
- Agar muvaffaqiyatsiz → admin'ga alert

### Manual (fallback)
- Admin panel'da "Refund" tugmasi
- Sabab kiritish majburiy
- Audit log

---

## Webhook xavfsizligi

1. **HTTPS only** — hech qachon HTTP webhook
2. **Signature validation** — Payme/Click signature majburiy
3. **IP allowlist** — Payme va Click IP'larini cheklash
4. **Idempotency key** — duplicate webhook'larni tutish
5. **Rate limit** — DDoS himoyasi
6. **Logging** — har bir webhook payload'ni saqlash (audit uchun)

---

## Test plan

- [ ] Sandbox akkauntlar (Payme test, Click sandbox)
- [ ] Successful payment flow
- [ ] Failed payment flow
- [ ] Refund (cancel hold)
- [ ] Webhook signature validation
- [ ] Duplicate webhook handling
- [ ] Concurrent payments (race condition)
- [ ] Network timeout handling
- [ ] Database transaction rollback
- [ ] Currency edge cases (UZS only, lekin int64 — tiyin'larda saqlash)

---

## Pul birligi

- DB'da summalar **tiyin** (`int64`) sifatida saqlanadi
- Frontend: foydalanuvchiga UZS'da ko'rsatiladi (formatlash bilan)
- Hech qachon `float` ishlatilmaydi (precision yo'qoladi)

```typescript
// To'g'ri:
amount: 50000000 // 500,000 UZS = 50,000,000 tiyin

// Noto'g'ri:
amount: 500000.50
```

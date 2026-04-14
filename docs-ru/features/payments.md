# Платёжная интеграция

> Funduz работает по модели "All-or-Nothing": средства, полученные от бэкеров, хранятся в **escrow** и передаются автору проекта только при достижении цели. Если цель не достигнута — средства полностью возвращаются.

---

## Поддерживаемые провайдеры

| Provider | Status | Документация |
|---|---|---|
| Payme (Paycom) | Must-have | https://developer.help.paycom.uz |
| Click | Must-have | https://docs.click.uz |
| Uzum Pay | Nice-to-have | https://docs.uzum.uz |
| Apelsin | v1.1+ | — |

---

## Основная концепция: Escrow flow

```
1. Бэкер создаёт pledge
   ↓
2. В платёжной системе делается HOLD (pre-auth) — деньги удерживаются, но не списываются
   ↓
3. Ожидание до deadline проекта
   ↓
   ├── Цель достигнута → CONFIRM (списание → escrow → автор проекта)
   └── Не достигнута   → CANCEL (отмена hold → возврат бэкеру)
```

> **Важно:** API "subscribe" Payme и Click поддерживают hold/charge. Если не поддерживают — нужно полностью списать, а потом сделать manual refund.

---

## Интеграция Payme

### Endpoint
- Sandbox: `https://checkout.test.paycom.uz`
- Production: `https://checkout.paycom.uz`

### Основные методы (Merchant API)
- `CheckPerformTransaction` — проверка возможности оплаты
- `CreateTransaction` — pre-auth (hold)
- `PerformTransaction` — confirm (когда проект funded)
- `CancelTransaction` — отмена (refund)
- `CheckTransaction` — статус
- `GetStatement` — периодический отчёт

### Webhook
Payme отправляет JSON-RPC POST на наш сервер. Authentication: Basic auth (Merchant ID + key).

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
- Каждый webhook сохранять как unique по `transaction_id`
- На дубликаты возвращать предыдущий response

---

## Интеграция Click

### Документация
- Click Merchant API: https://docs.click.uz/click-api/
- SHOP-API и Web SDK оба доступны

### Основной flow
1. Frontend: кнопка Click → создаётся invoice
2. Пользователь переходит в Click app и оплачивает
3. Click шлёт нам **Prepare** → потом **Complete** webhook
4. Мы проверяем Click signature и `pledge.status = 'authorized'`

### Signature validation
```
sign_string = click_trans_id + service_id + secret_key + merchant_trans_id + amount + action + sign_time
md5(sign_string) === request.sign_string
```

---

## Uzum Pay (в будущем)

- Документация API: https://docs.uzum.uz
- Большая аудитория (интеграция с Uzum Market)
- Может быть добавлен в v1.1+

---

## Логика All-or-Nothing (backend)

```
Когда наступает deadline проекта (cron job, BullMQ scheduled):

1. Считаем общую сумму pledge
2. Если total >= goal:
   a. project.status = 'funded'
   b. Для каждого pledge: payment.confirm()
   c. Уведомляем автора проекта
   d. Бэкерам — благодарность по email + Telegram
3. Если total < goal:
   a. project.status = 'failed'
   b. Для каждого pledge: payment.cancel() (refund)
   c. Бэкерам — уведомление о возврате
   d. Автору проекта — сообщение о неудаче
```

---

## Refund flow

### Автоматический (preferred)
- Проект failed → для всех pledge: `cancelTransaction`
- BullMQ retry: 3 раза, exponential backoff
- При неудаче → alert админу

### Manual (fallback)
- Кнопка "Refund" в admin panel
- Указание причины обязательно
- Audit log

---

## Безопасность webhook

1. **HTTPS only** — никогда HTTP webhook
2. **Signature validation** — Payme/Click signature обязательны
3. **IP allowlist** — ограничить IP Payme и Click
4. **Idempotency key** — отлавливать дубликаты webhook
5. **Rate limit** — защита от DDoS
6. **Logging** — сохранять каждый webhook payload (для аудита)

---

## Test plan

- [ ] Sandbox аккаунты (Payme test, Click sandbox)
- [ ] Successful payment flow
- [ ] Failed payment flow
- [ ] Refund (cancel hold)
- [ ] Webhook signature validation
- [ ] Duplicate webhook handling
- [ ] Concurrent payments (race condition)
- [ ] Network timeout handling
- [ ] Database transaction rollback
- [ ] Currency edge cases (только UZS, но int64 — хранить в тийинах)

---

## Денежная единица

- В БД суммы хранятся как **тийины** (`int64`)
- Frontend: пользователю показывается в UZS (с форматированием)
- Никогда не используется `float` (теряется precision)

```typescript
// Правильно:
amount: 50000000 // 500,000 UZS = 50,000,000 тийин

// Неправильно:
amount: 500000.50
```

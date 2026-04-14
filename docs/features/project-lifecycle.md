# Loyiha Hayot Sikli

## Statuslar

```
   draft
     │
     ▼
  pending_review ──── rejected (yakuniy)
     │
     ▼
   active ──────► failed ───► refunded (yakuniy)
     │
     ▼
   funded ───► in_delivery ───► completed (yakuniy)
```

| Status | Tavsif |
|---|---|
| `draft` | Loyiha egasi yaratmoqda, hali yuborilmagan |
| `pending_review` | Moderatsiyaga yuborilgan, admin tekshirmoqda |
| `rejected` | Admin rad etgan (sabab bilan) |
| `active` | Tasdiqlangan va ochiq, backerlar pledge qila oladi |
| `funded` | Deadline tugadi, maqsadga yetildi |
| `failed` | Deadline tugadi, maqsadga yetilmadi |
| `refunded` | Hamma backerlarga refund qaytarilgan |
| `in_delivery` | Loyiha egasi reward'larni etkazmoqda |
| `completed` | Hamma reward'lar etkazilgan, loyiha yopilgan |

---

## Bosqichlar bo'yicha tafsilot

### 1. Draft
- **Kim:** Loyiha egasi
- **Harakatlar:** wizard'da to'ldirish, qoralama saqlash, taglar, rasmlar
- **Tekshirishlar:** majburiy maydonlar, rasm o'lchamlari, video URL formati
- **Notification:** yo'q

### 2. Pending review
- **Kim:** Loyiha egasi → admin
- **Harakatlar:**
  - Loyiha egasi "Moderatsiyaga yuborish" bosadi
  - Admin panel'da yangi loyiha paydo bo'ladi
  - Admin tekshiradi: kontent, yuridik, hisobot, real ekanligi
- **Vaqt:** maksimum 48 soat
- **Notification:**
  - Loyiha egasiga: "Moderatsiyada"
  - Admin'ga: yangi review queue (in-app + Telegram)

### 3. Active (live)
- **Kim:** Backerlar
- **Harakatlar:**
  - Loyihani ko'rish, share qilish
  - Pledge yaratish (reward tanlash + to'lov)
  - Loyiha yangilanishlarini o'qish
  - Komentariya (v1.1+)
- **Tekshirishlar:**
  - Loyiha egasi loyihani **tahrirlay olmaydi** (faqat updates qo'shadi)
  - Reward zaxirasi (limit) tugasa, tanlanmaydi
- **Notification:**
  - Loyiha egasiga: yangi pledge, kun davomida summary
  - Backerlarga: loyiha yangilanishlari

### 4a. Funded
- **Trigger:** deadline + total_pledged >= goal
- **Avtomatik harakatlar:**
  - Cron job loyihalarni tekshiradi
  - `project.status = 'funded'`
  - Har bir pledge: `payment.confirm()`
  - Komissiya hisoblanadi (7%)
  - Loyiha egasi balansiga o'tadi (UZS)
- **Notification:**
  - Loyiha egasiga: "Tabriklaymiz! Loyihangiz funded"
  - Backerlarga: "Loyiha muvaffaqiyatli yakunlandi"

### 4b. Failed
- **Trigger:** deadline + total_pledged < goal
- **Avtomatik harakatlar:**
  - `project.status = 'failed'`
  - Har bir pledge: `payment.cancel()` (refund)
  - Komissiya olinmaydi
- **Notification:**
  - Loyiha egasiga: "Afsus, loyiha maqsadga yetmadi"
  - Backerlarga: "Refund qaytarildi"

### 5. In delivery
- **Kim:** Loyiha egasi
- **Harakatlar:**
  - Reward'larni yetkazish
  - Yetkazilgani haqida update qo'yish
  - Backerlarga shaxsiy xabar (manzil, tracking)
- **Vaqt:** loyiha egasi belgilagan deadline (odatda 1–6 oy)
- **Tekshirish:** admin shikoyatlarni kuzatib boradi

### 6. Completed
- **Trigger:** loyiha egasi "Yetkazib bo'lindi" deb belgilaydi
- **Yoki:** 6 oy o'tdi va shikoyat yo'q
- **Notification:**
  - Backerlarga: feedback so'rash

---

## Maxsus holatlar

### Loyiha bekor qilish (loyiha egasi tomonidan, active vaqtida)
- Admin ruxsati kerak
- Hamma pledgelar refund qilinadi
- Loyiha `cancelled` statusi (qo'shimcha status)

### Shikoyat (dispute)
- Backer "Shikoyat" tugmasini bosadi (in_delivery yoki completed da)
- Admin tekshiradi
- Yechim: refund yoki rad etish
- v1.1+ feature

### Cheating detection
- Loyiha egasi o'zining loyihasini o'zi backing qilishi (self-pledging)
- IP, qurilma, telefon raqami orqali tutiladi
- Admin alert + audit log

---

## Cron job'lar (BullMQ)

| Job | Davomiyligi | Maqsad |
|---|---|---|
| `check-project-deadlines` | har 5 daqiqada | Funded/failed deciding |
| `auto-refund-failed` | har 10 daqiqada | Failed loyihalar refund |
| `notification-digest` | kuniga 1 marta | Loyiha egalariga summary email |
| `cleanup-drafts` | haftada 1 marta | 90 kun teginmagan draftlarni o'chirish |
| `analytics-rollup` | har soatda | Statistika hisoblash (homepage uchun) |

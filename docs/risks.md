# Risklar Reyestri

> **Likelihood (L)** — ehtimol: H (high) / M (medium) / L (low)
> **Impact (I)** — ta'sir: H / M / L
> **Score** = L × I (qisqa indikatsiya)

---

## 1. Biznes risklar

### R-01: "Tovuq va tuxum" muammosi
- **Tavsif:** Bo'sh platformaga loyiha kelmaydi; loyiha bo'lmasa, backer kelmaydi.
- **L:** H · **I:** H · **Score:** Critical
- **Yumshatish:**
  - Launch'dan oldin 5–10 ta seed loyihani topib, "launch partner" sifatida bog'lash
  - Birinchi loyihalarga komissiya 0% (3 oy)
  - IT Park va indie maker hamjamiyati bilan hamkorlik
  - Founder o'zi 1–2 ta loyiha o'tkazsin (case-study uchun)

### R-02: Firibgarlik loyiha
- **Tavsif:** Yolg'on loyiha pul yig'adi va g'oyib bo'ladi → platforma obro'si yo'qoladi.
- **L:** M · **I:** H · **Score:** High
- **Yumshatish:**
  - Qattiq KYC loyiha egasi uchun (passport, INN, telefon)
  - Manual moderatsiya birinchi 100 ta loyiha
  - Loyiha egasining ijtimoiy tarmoq mavjudligi
  - Public dispute mexanizmi
  - Refund kafolati (founder fond ajratadi)

### R-03: Past muvaffaqiyat darajasi
- **Tavsif:** Loyihalarning 70%+ funded bo'lmaydi → ham creator'lar, ham backer'lar ishonchi yo'qoladi.
- **L:** M · **I:** H · **Score:** High
- **Yumshatish:**
  - Loyiha egalariga "campaign coaching" (qanday qilib muvaffaqiyatli kampaniya yuritish)
  - Realistik maqsadlar belgilash bo'yicha tavsiyalar
  - Pre-launch list yig'ish (loyiha live bo'lgunga qadar)

---

## 2. Texnik risklar

### R-04: To'lov tizimi nosozligi
- **Tavsif:** Payme yoki Click downtime / API o'zgarishi → to'lovlar ishlamaydi.
- **L:** M · **I:** H · **Score:** High
- **Yumshatish:**
  - 2 ta to'lov provayderi (Payme + Click) — diversifikatsiya
  - Webhook retry mexanizmi (BullMQ, exponential backoff)
  - Status page va monitoring
  - Manual fallback admin panel'da

### R-05: Refund xatoligi
- **Tavsif:** Failed loyihada avtomatik refund ishlamasa → backerlar pul yo'qotgan deb o'ylaydi.
- **L:** M · **I:** Critical · **Score:** Critical
- **Yumshatish:**
  - Refund avtomatlashtirish v1.0'dayoq
  - Failed retry → admin alert
  - Backerlarga real-time status
  - Manual refund tugmasi admin panel'da
  - Refund'lar uchun alohida monitoring dashboard

### R-06: Ma'lumotlar buzilishi (data breach)
- **Tavsif:** SQL injection, XSS yoki credentials leak.
- **L:** L · **I:** Critical · **Score:** High
- **Yumshatish:**
  - Security audit MVP launch'idan oldin
  - Penetration testing (yiliga 1 marta)
  - Sensitive data hashlangan/encrypted
  - Logs'da PII yo'q
  - 2FA admin akkauntlar uchun majburiy

---

## 3. Yuridik risklar

### R-07: Regulyativ o'zgarishlar
- **Tavsif:** Hukumat kraudfanding bo'yicha qonun chiqaradi va yangi talablar qo'yadi (litsenziya, kapital, ...).
- **L:** M · **I:** M · **Score:** Medium
- **Yumshatish:**
  - IT Park va Markaziy Bank yangiliklarini kuzatib borish
  - Yurist bilan kvartal kengash
  - Fleksible arxitektura (qonun o'zgarganda moslashish)

### R-08: Iste'molchi shikoyati va sud
- **Tavsif:** Backer mahsulot kelmaganligi uchun Funduz'ni sudga beradi.
- **L:** M · **I:** M · **Score:** Medium
- **Yumshatish:**
  - User Agreement'da Funduz'ning vositachi ekanligi aniq yozilgan
  - Dispute mexanizmi platforma ichida
  - Yuridik sug'urta (kelajakda)

---

## 4. Iqtisodiy risklar

### R-09: UZS inflyatsiyasi
- **Tavsif:** UZS qadrsizlanadi → loyiha egasi o'z mahsulotini etkazib bera olmaydi (komponentlar qimmatlashdi).
- **L:** H · **I:** M · **Score:** High
- **Yumshatish:**
  - Loyiha egalariga "buffer" qoldirishni tavsiya qilish
  - Qisqa muddatli kampaniyalar (30 kun tavsiya etiladi)
  - Hisobotlarni USD'da ham ko'rsatish

### R-10: Iqtisodiy beqarorlik
- **Tavsif:** Mintaqada inqiroz, valyuta kontrolli → backer'lar pul harajlamaydi.
- **L:** M · **I:** M · **Score:** Medium
- **Yumshatish:**
  - Operatsion xarajatlarni minimal saqlash
  - 6 oylik runway zaxira pulda

---

## 5. Raqobat risklari

### R-11: Kickstarter / Indiegogo O'zbekistonga kirishi
- **Tavsif:** Global platforma mahalliy tilni va to'lovlarni qo'shadi.
- **L:** L (3-5 yil ichida) · **I:** H · **Score:** Medium
- **Yumshatish:**
  - First-mover advantage'ni mustahkamlash
  - Brand loyalty va community
  - Mahalliy hamkorliklar (IT Park, davlat dasturlari)
  - Telegram-native taxminda qolish

### R-12: Mahalliy raqib paydo bo'lishi
- **Tavsif:** Boshqa O'zbek startup o'xshash platforma yaratadi.
- **L:** M · **I:** M · **Score:** Medium
- **Yumshatish:**
  - Tezroq harakat — birinchi bo'lish
  - Sifatli foydalanuvchi tajribasi
  - Sotuv funnel'larini optimizatsiya
  - Differensiatsiya: Telegram integratsiya, kategoriya fokusi

---

## 6. Operatsion risklar

### R-13: Asosiy ishlab chiquvchi yo'qolishi
- **Tavsif:** Founder/asosiy dev kasal bo'lib qoladi yoki ketadi.
- **L:** L · **I:** H · **Score:** Medium
- **Yumshatish:**
  - Hujjatlash (siz hozir o'qiyotgan docs!)
  - Code review jarayoni
  - 2+ kishilik jamoa ASAP
  - GitHub'da hamma narsa, hech narsa lokalda emas

### R-14: Moderatsiya bo'yicha haddan tashqari yuk
- **Tavsif:** Loyihalar oqimi katta bo'lib, admin yetishmaydi.
- **L:** M · **I:** M · **Score:** Medium
- **Yumshatish:**
  - Auto-flagging (anomaly detection)
  - Trusted creator tier (avval muvaffaqiyatli loyiha qilganlarga tezroq approval)
  - Moderator hire (yarim stavka)

---

## Risk monitoring

- **Har oy:** founder bu hujjatni qayta ko'rib chiqadi
- **Yangi risklar:** loglarda alohida bo'lim
- **Critical risklar:** alohida runbook (kelajakda)

---

## Top 5 critical risklar (yodda saqlang)

1. **R-05 Refund xatoligi** — 1-bandda hal qilish
2. **R-01 Tovuq va tuxum** — seed loyihalarsiz launch qilmang
3. **R-02 Firibgarlik** — KYC qattiq bo'lsin
4. **R-04 To'lov nosozligi** — 2 provider va monitoring
5. **R-09 UZS inflyatsiyasi** — qisqa kampaniya, buffer

8pX-jNg-mxR-kns
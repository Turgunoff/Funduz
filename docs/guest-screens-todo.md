# Guest rejimi — yaratilishi kerak bo'lgan screenlar

Hujjat Funduz loyihasining **guest (autentifikatsiyasiz)** rejimida hali yetishmayotgan sahifalar ro'yxatini yuritadi. Har bir sahifa uchun: marshrut, maqsad, tarkib va prioritet ko'rsatilgan.

---

## Mavjud screenlar (ma'lumot uchun)

| # | Sahifa | Marshrut | Fayl |
|---|--------|----------|------|
| 1 | Home | `/` | [src/views/HomeView.vue](../src/views/HomeView.vue) |
| 2 | Explore | `/explore` | [src/views/ExploreView.vue](../src/views/ExploreView.vue) |
| 3 | Project detail | `/project/:id` | [src/views/ProjectView.vue](../src/views/ProjectView.vue) |
| 4 | How It Works | `/how-it-works` | [src/views/HowItWorksView.vue](../src/views/HowItWorksView.vue) |
| 5 | Community | `/community` | [src/views/CommunityView.vue](../src/views/CommunityView.vue) |
| 6 | Login | `/login` | [src/views/LoginView.vue](../src/views/LoginView.vue) |
| 7 | Create Project | `/create-project` | [src/views/CreateProjectView.vue](../src/views/CreateProjectView.vue) |

---

## 1-to'lqin — kritik (footer/header'da o'lik linklar)

### 1.1. FAQ — Ko'p beriladigan savollar
- **Marshrut:** `/faq`
- **Fayl:** `src/views/FaqView.vue`
- **Sabab:** [AppFooter.vue:32](../src/components/AppFooter.vue#L32) da `<a href="#">` — sahifa yo'q.
- **Tarkib:**
  - Accordion ko'rinishidagi savol-javoblar
  - Kategoriyalar: "Umumiy", "Loyiha yaratuvchilar uchun", "Homiy bo'lish", "To'lovlar", "Xavfsizlik"
  - Qidiruv inputi
  - Pastda "Savolingizga javob topa olmadingizmi? Bog'laning" CTA → `/contact`
- **i18n kalit:** `faq.*`

### 1.2. Terms of Service — Foydalanish shartlari
- **Marshrut:** `/terms`
- **Fayl:** `src/views/TermsView.vue`
- **Sabab:** [AppFooter.vue:40](../src/components/AppFooter.vue#L40) bo'sh link.
- **Tarkib:**
  - Oddiy statik hujjat, bo'limlarga bo'lingan
  - Yon panelda "Mundarija" (sticky, anchor havolalar)
  - Oxirgi yangilanish sanasi
  - Mazmun [docs/legal/](./legal/) dan olinadi
- **i18n kalit:** `terms.*`

### 1.3. Privacy Policy — Maxfiylik siyosati
- **Marshrut:** `/privacy`
- **Fayl:** `src/views/PrivacyView.vue`
- **Sabab:** [AppFooter.vue:41](../src/components/AppFooter.vue#L41) bo'sh link.
- **Tarkib:** Terms bilan bir xil struktura.
- **i18n kalit:** `privacy.*`

### 1.4. 404 — Sahifa topilmadi
- **Marshrut:** `/:pathMatch(.*)*`
- **Fayl:** `src/views/NotFoundView.vue`
- **Sabab:** [router/index.ts](../src/router/index.ts) da catch-all marshrut yo'q.
- **Tarkib:**
  - Katta "404" illustratsiya
  - "Sahifa topilmadi" xabari
  - "Bosh sahifaga qaytish" va "Loyihalarni ko'rish" tugmalari
- **i18n kalit:** `not_found.*`

### 1.5. Contact — Bog'lanish
- **Marshrut:** `/contact`
- **Fayl:** `src/views/ContactView.vue`
- **Sabab:** FAQ va footer'dan havola kerak; hozir hech qayerga bormaydi.
- **Tarkib:**
  - Aloqa formasi: Ism, Email, Mavzu, Xabar
  - Yon panelda: Telegram, Email, Instagram, ofis manzili (agar bor bo'lsa)
  - Xarita (ixtiyoriy, embed)
- **i18n kalit:** `contact.*`

---

## 2-to'lqin — Auth oqimi

### 2.1. Register — Ro'yxatdan o'tish
- **Marshrut:** `/register`
- **Fayl:** `src/views/RegisterView.vue` (yoki [LoginView.vue](../src/views/LoginView.vue) `authMode` toggle'ni to'liq qilish)
- **Sabab:** Hozir `LoginView` ichida toggle bor, lekin alohida marshrut yo'q; SEO va to'g'ridan-to'g'ri linklar uchun kerak.
- **Tarkib:**
  - Maydonlar: To'liq ism, Email, Parol, Parolni tasdiqlash
  - Parol kuchi indikatori
  - "Foydalanish shartlariga roziman" checkbox → `/terms`
  - Telegram/Google bilan ro'yxatdan o'tish tugmalari (kelajakda)
  - Pastda: "Hisobingiz bormi? Kiring" → `/login`
- **i18n kalit:** `auth.register.*`

### 2.2. Forgot Password — Parolni tiklash
- **Marshrut:** `/forgot-password`
- **Fayl:** `src/views/ForgotPasswordView.vue`
- **Sabab:** Login sahifasidan havola kerak.
- **Tarkib:**
  - Email maydoni + "Tiklash havolasini yuborish" tugmasi
  - Muvaffaqiyatli yuborilgach: "Emailingizni tekshiring" xabari
  - "Loginga qaytish" havolasi
- **i18n kalit:** `auth.forgot.*`

### 2.3. Reset Password — Yangi parol o'rnatish
- **Marshrut:** `/reset-password?token=...`
- **Fayl:** `src/views/ResetPasswordView.vue`
- **Sabab:** Forgot Password dan kelgan emaildagi havola uchun.
- **Tarkib:**
  - Yangi parol + tasdiqlash maydonlari
  - Muvaffaqiyatli saqlangach → `/login`
- **i18n kalit:** `auth.reset.*`

---

## 3-to'lqin — Kategoriya va qidiruv

### 3.1. Category page — Kategoriya bo'yicha loyihalar
- **Marshrut:** `/category/:slug` (yoki `/explore?category=...`)
- **Fayl:** `src/views/CategoryView.vue` yoki [ExploreView.vue](../src/views/ExploreView.vue) ga filter query qo'shish
- **Sabab:** [AppFooter.vue:19-22](../src/components/AppFooter.vue#L19-L22) da "Texnologiya / San'at / Ijtimoiy" linklari `#` ga ketadi.
- **Kategoriyalar:** Texnologiya, San'at, Ta'lim, Ekologiya, Ijtimoiy, Biznes, Sog'liq
- **Tarkib:**
  - Explore'ning bir variantlari, faqat kategoriya bo'yicha filtrlangan
  - Yuqorida kategoriya nomi va qisqa tavsif
- **Tavsiya:** `ExploreView` ni kengaytirish osonroq — alohida view yaratmaslik.
- **i18n kalit:** `categories.*`

### 3.2. Search Results — Qidiruv natijalari
- **Marshrut:** `/search?q=...`
- **Fayl:** `src/views/SearchView.vue`
- **Sabab:** [AppHeader.vue](../src/components/AppHeader.vue) ga qidiruv inputi qo'shilsa, natija sahifasi kerak bo'ladi.
- **Tarkib:**
  - Qidiruv so'zi va topilgan natijalar soni
  - Loyihalar grid
  - Hech narsa topilmaganda — bo'sh holat + tavsiyalar
- **i18n kalit:** `search.*`

---

## 4-to'lqin — Project detail'ni kengaytirish

### 4.1. ProjectView ichida tab'lar
- **Fayl:** [src/views/ProjectView.vue](../src/views/ProjectView.vue)
- **Sabab:** Hozir bitta statik ko'rinish. Crowdfunding standarti — quyidagi tab'lar:
  - **Story / Hikoya** (default) — loyiha haqida, rasm va video
  - **Updates / Yangiliklar** — loyiha egasining yangiliklar ro'yxati (guest o'qiy oladi)
  - **Comments / Izohlar** — guest o'qiy oladi, yozish uchun login kerak
  - **Backers / Homiylar** — kim qancha qo'llab-quvvatlagan (anonim bo'lishi mumkin)
  - **FAQ** — loyiha-ichidagi savollar
- **Amalga oshirish:** Route param yoki hash: `/project/:id#updates`
- **i18n kalit:** `project.tabs.*`

---

## 5-to'lqin — Ixtiyoriy (nice-to-have)

### 5.1. About Us — Biz haqimizda
- **Marshrut:** `/about`
- **Sabab:** Hozir footer'da "about" HowItWorks'ga boradi — bu noto'g'ri. Alohida "kompaniya haqida" sahifasi kerak.
- **Tarkib:** Missiya, jamoa, tarix, statistika, matbuot.

### 5.2. Blog / Yangiliklar
- **Marshrut:** `/blog`, `/blog/:slug`
- **Tarkib:** Maqolalar ro'yxati va alohida maqola sahifasi.

### 5.3. Success Stories — Muvaffaqiyat hikoyalari
- **Marshrut:** `/stories` yoki `/success`
- **Tarkib:** Yopilgan, muvaffaqiyatli loyihalar namunasi (CommunityView da qisman bor).

### 5.4. For Creators — Loyiha yaratuvchilar uchun
- **Marshrut:** `/creators`
- **Sabab:** HowItWorks umumiy, lekin yaratuvchi uchun alohida yo'riqnoma foydali.
- **Tarkib:** Loyiha yaratish yo'riqnomasi, qoidalar, komissiya haqida.

### 5.5. Trust & Safety — Ishonch va xavfsizlik
- **Marshrut:** `/trust`
- **Tarkib:** Escrow qanday ishlaydi, pul qaytarish, firibgarlikdan himoya.

---

## Umumiy vazifalar (har bir sahifaga tegishli)

Har bir yangi view yaratilganda quyidagilar ham bajarilishi kerak:

1. [src/router/index.ts](../src/router/index.ts) ga marshrut qo'shish
2. [src/i18n.ts](../src/i18n.ts) ga **uz** va **ru** kalitlarini qo'shish
3. Mos havolalarni [AppHeader.vue](../src/components/AppHeader.vue) va [AppFooter.vue](../src/components/AppFooter.vue) da `#` o'rniga `router-link` ga almashtirish
4. Meta tag'lar (title, description) — `@vueuse/head` integratsiyasidan so'ng
5. Mobil moslashuv (Tailwind `sm:` / `md:` / `lg:`)
6. 404 marshruti eng oxirida bo'lishi kerak

---

## Tavsiya qilingan tartib

| To'lqin | Sahifalar soni | Taxminiy vaqt | Blokker |
|---------|----------------|---------------|---------|
| 1 | 5 (FAQ, Terms, Privacy, 404, Contact) | 1 kun | Yo'q — sof statik |
| 2 | 3 (Register, Forgot, Reset) | 0.5 kun | Auth store yo'q, UI-only bo'ladi |
| 3 | 2 (Category, Search) | 0.5 kun | ExploreView'ni kengaytirish |
| 4 | 1 (ProjectView tabs) | 0.5 kun | Yo'q |
| 5 | 5 (About, Blog, Stories, Creators, Trust) | 1–2 kun | Kontent kerak |

**Jami:** ~16 ta yangi/o'zgartirilgan sahifa, 3–4 kunlik ish (backend ulanishsiz, faqat UI).

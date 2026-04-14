# Tech Stack

> Stack tanlash printsipi: **mahalliy bozor uchun, tezkor MVP, kam jamoa bilan boshqariladigan.**

---

## Frontend (mavjud)

| Texnologiya | Versiya | Sabab |
|---|---|---|
| **Vue 3** | 3.5.31 | Composition API zamonaviy, react'dan engilroq, mahalliy ishlab chiqaruvchilar orasida tanilgan |
| **TypeScript** | 6 | Type safety — bug'larni runtime'gacha tutadi |
| **Vite** | 8 | Eng tezkor dev server, HMR, sodda config |
| **Pinia** | 3 | Vue 3 official state management. Vuex'dan oddiy va type-safe |
| **Vue Router** | 5 | SPA navigation standarti |
| **Vue I18n** | 9 | Uz/ru/en qo'llab-quvvatlash |
| **Tailwind CSS** | 4 | Utility-first, dizayn tezligi, mobile-first sodda |
| **Vitest** | 4 | Vite bilan to'liq mos, Jest API |
| **Playwright** | 1.58 | E2E test, ko'p brauzer |
| **ESLint + oxlint** | — | Linting (ikkalasi: ox tez, eslint puxta) |
| **oxfmt** | — | Code formatter (Prettier alternativasi, tezroq) |

### Alternativalar (nima uchun rad etildi)
- **React/Next.js** — Vue allaqachon ishlatilmoqda, jamoa tajribasi shu yo'nalishda
- **Nuxt** — SSR kelajakda kerak bo'lsa qo'shiladi; hozircha SPA yetarli
- **Vuex** — eskirgan, Pinia o'rnida

---

## Backend (rejada)

### Asosiy tanlov: NestJS (TypeScript)
- Frontend bilan bir til
- Modular arxitektura (modullar, controllers, services)
- Built-in DI, validation, OpenAPI generation
- Prisma ORM bilan ajoyib mos
- O'zbekistonda Node.js mutaxassislari ko'p

### Alternativ: Go (Fiber)
- Yuqori performans
- Kichik bineri, kam RAM
- Concurrency yaxshi
- Lekin: jamoa o'rganishi vaqt oladi

### Tavsiya
**MVP'da NestJS** dan boshlash. 2-yilda performance critical xizmatlarni Go'ga ko'chirish (masalan, payment webhook handler).

---

## Database

| Texnologiya | Maqsad |
|---|---|
| **PostgreSQL 16** | Primary transactional DB |
| **Redis 7** | Cache, sessions, BullMQ jobs, rate limit |
| **S3-compatible** | Media storage (MinIO self-hosted yoki AWS S3) |

### Nima uchun PostgreSQL?
- ACID — to'lovlarda kritik
- JSON/JSONB qo'llab-quvvatlash (flexible schemas)
- Extensions (uuid-ossp, pg_trgm, postgis kelajakda)
- Mature, ishonchli, bepul

### Nima uchun MongoDB emas?
- To'lov tranzaksiyalari — strong consistency talab qiladi
- Joins kerak (project + pledges + users)
- O'zbek dasturchilarining aksariyati SQL'ga moslashgan

---

## DevOps

| Texnologiya | Maqsad |
|---|---|
| **Docker + Compose** | Lokal va MVP server |
| **GitHub Actions** | CI/CD |
| **Cloudflare** | CDN, DDoS, DNS |
| **Sentry** | Error tracking |
| **Plausible / Umami** | Analytics (privacy-friendly) |
| **Let's Encrypt** | SSL |

### Hosting tanlovlari
1. **Hetzner Cloud** (Germaniya) — arzon, ishonchli, ~$10/oy VPS
2. **DigitalOcean** — qulay UI, $12+/oy
3. **Mahalliy provider** (UzCloud, Beeline Cloud) — qonuniy ma'lumotlar saqlash uchun. Tavsiya: foydalanuvchi ma'lumotlari **mahalliy** bo'lsin.

> **Eslatma:** O'zbekiston PDP qonuni shaxsiy ma'lumotlarni mahalliy hududda saqlashni talab qiladi. Mahalliy provider yoki gibrid yondashuv kerak bo'ladi.

---

## To'lov tizimlari

| Provider | Status | Hujjatlar |
|---|---|---|
| **Payme** | Asosiy | https://developer.help.paycom.uz |
| **Click** | Asosiy | https://docs.click.uz |
| **Uzum Pay** | Qo'shimcha | https://docs.uzum.uz |
| **Apelsin** | Kelajakda | https://api-docs.apelsin.uz |
| **Stripe** | Xalqaro (kelajakda) | — |

> Batafsil: [features/payments.md](features/payments.md)

---

## Telegram

- **Bot API** — notifications, OTP, project updates
- **Telegram Login Widget** — auth alternative
- **Telegram Channel** — marketing va community

---

## Versiya talabi

- **Node.js:** ^20.19.0 || >=22.12.0
- **pnpm yoki npm:** sozlangan
- **PostgreSQL:** 16+
- **Redis:** 7+
- **Docker:** 24+

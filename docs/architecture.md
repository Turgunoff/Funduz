# Texnik Arxitektura

## Umumiy ko'rinish

```
┌─────────────────────────────────────────────────────────────┐
│                       Foydalanuvchilar                       │
│              (web — mobile-first, Telegram bot)              │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    CDN / Reverse Proxy                       │
│                  (Cloudflare yoki Nginx)                     │
└──────────────────────────┬──────────────────────────────────┘
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
┌──────────────────────┐    ┌────────────────────────┐
│   Frontend (SPA)     │    │   Backend API          │
│   Vue 3 + Vite       │    │   NestJS / Go (REST)   │
│   Pinia + Router     │    │   JWT auth             │
│   Tailwind + i18n    │    │   OpenAPI / Swagger    │
└──────────────────────┘    └────────┬───────────────┘
                                     │
            ┌────────────────────────┼─────────────────────────┐
            ▼                        ▼                         ▼
   ┌────────────────┐       ┌──────────────┐         ┌─────────────────┐
   │  PostgreSQL    │       │    Redis     │         │  S3-compatible  │
   │  (transactional)│      │ (cache, jobs,│         │  (rasmlar,       │
   │                │       │   sessions)  │         │   media)         │
   └────────────────┘       └──────────────┘         └─────────────────┘

            ┌────────────────────────┼─────────────────────────┐
            ▼                        ▼                         ▼
   ┌────────────────┐       ┌──────────────┐         ┌─────────────────┐
   │   Payme API    │       │  Click API   │         │  Telegram Bot   │
   │   (escrow)     │       │  (escrow)    │         │     API         │
   └────────────────┘       └──────────────┘         └─────────────────┘
```

---

## Frontend

**Stack (hozirgi):**
- Vue 3.5 (Composition API)
- TypeScript 6
- Vite 8
- Pinia 3 (state management)
- Vue Router (SPA navigation)
- Vue I18n 9 (uz/ru/en)
- Tailwind CSS 4
- Vitest + Playwright (testing)

**Struktura:**
```
src/
├── App.vue
├── main.ts
├── i18n.ts
├── router/          # vue-router routes
├── stores/          # Pinia stores
├── views/           # Sahifalar (HomeView, ExploreView, ProjectView, ...)
├── components/      # Qayta ishlatiluvchi komponentlar (AppHeader, ...)
└── assets/          # Statik fayllar
```

**Tavsiyalar:**
- API layer'ni alohida `src/api/` papkasiga ajratish
- Auth uchun `src/stores/auth.ts` Pinia store
- API client: `axios` yoki native `fetch` wrapper

---

## Backend

**Tavsiya:** NestJS (TypeScript) — frontend bilan bir tilda, tezroq ishlab chiqish.
**Alternativa:** Go (Fiber/Echo) — yuqori performans, kelajakda scaling uchun yaxshi.

### Modullar
- `auth` — JWT, OTP, sessions
- `users` — profile, role
- `projects` — CRUD, lifecycle
- `pledges` — backing logic
- `payments` — Payme, Click, escrow
- `notifications` — email, telegram, in-app
- `admin` — moderation, analytics
- `webhooks` — to'lov tizimlari uchun

### Asosiy texnologiyalar
- Framework: NestJS yoki Fiber (Go)
- ORM: Prisma (NestJS) yoki sqlx (Go)
- Auth: JWT (access + refresh) + httpOnly cookies
- Validation: class-validator (NestJS) yoki validator (Go)
- Logging: pino + Sentry
- Background jobs: BullMQ (Redis-based)

---

## Database

**PostgreSQL** — transactional, primary store.

### Asosiy jadvallar (concept)
- `users` — id, phone, email, name, role, created_at
- `projects` — id, owner_id, title, description, goal, deadline, status
- `rewards` — id, project_id, title, amount, limit, claimed
- `pledges` — id, project_id, user_id, reward_id, amount, status
- `transactions` — id, pledge_id, gateway, gateway_id, status, amount
- `refunds` — id, pledge_id, amount, status, reason
- `notifications` — id, user_id, type, payload, read

**Redis** — cache, session storage, job queue, rate limiting

**S3-compatible storage** — rasmlar va media (mahalliy tanlovlar: IT Park cloud, AWS S3, MinIO self-hosted)

---

## Infratuzilma

**MVP bosqichi:**
- Single VPS (Hetzner / DigitalOcean / mahalliy provider)
- Docker Compose (frontend + backend + postgres + redis)
- Cloudflare CDN + DDoS protection
- Let's Encrypt SSL

**O'sish bosqichi:**
- Kubernetes (k3s yoki managed)
- Database alohida managed instance
- Multi-region (Markaziy Osiyo)

---

## CI/CD

- GitHub Actions
  - PR'larda: lint + type-check + unit test
  - main'ga merge: build + deploy staging
  - Tag (`v*`): production deploy
- Sentry uchun source maps upload
- E2E test'lar nightly Playwright run

---

## Monitoring va observability

- **Sentry** — error tracking
- **Plausible / Umami** — privacy-friendly analytics
- **Grafana + Prometheus** — server metrics (kelajakda)
- **Better Stack / Uptime Kuma** — uptime monitoring

---

## Xavfsizlik

- HTTPS hamma joyda majburiy
- JWT short-lived (15 daq) + refresh token (7 kun)
- Rate limiting (Redis-based)
- CSRF protection
- SQL injection: ORM + parameterized queries
- XSS: Vue avtomatik escape qiladi, lekin `v-html` ehtiyot bilan
- Webhook signature validation (Payme, Click)
- Sensitive data .env'da, hech qachon git'ga commit qilinmaydi
- Production secrets: Doppler / 1Password Secrets Automation

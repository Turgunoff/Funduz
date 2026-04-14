# Техническая архитектура

## Общий вид

```
┌─────────────────────────────────────────────────────────────┐
│                       Пользователи                           │
│              (web — mobile-first, Telegram bot)              │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    CDN / Reverse Proxy                       │
│                  (Cloudflare или Nginx)                      │
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
   │  (transactional)│      │ (cache, jobs,│         │  (изображения,  │
   │                │       │   sessions)  │         │   медиа)        │
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

**Stack (текущий):**
- Vue 3.5 (Composition API)
- TypeScript 6
- Vite 8
- Pinia 3 (state management)
- Vue Router (SPA navigation)
- Vue I18n 9 (uz/ru/en)
- Tailwind CSS 4
- Vitest + Playwright (testing)

**Структура:**
```
src/
├── App.vue
├── main.ts
├── i18n.ts
├── router/          # vue-router routes
├── stores/          # Pinia stores
├── views/           # Страницы (HomeView, ExploreView, ProjectView, ...)
├── components/      # Переиспользуемые компоненты (AppHeader, ...)
└── assets/          # Статические файлы
```

**Рекомендации:**
- Вынести API layer в отдельную папку `src/api/`
- Pinia store для auth: `src/stores/auth.ts`
- API client: `axios` или native `fetch` wrapper

---

## Backend

**Рекомендация:** NestJS (TypeScript) — на одном языке с frontend, быстрее разработка.
**Альтернатива:** Go (Fiber/Echo) — высокая производительность, лучше для будущего масштабирования.

### Модули
- `auth` — JWT, OTP, sessions
- `users` — profile, role
- `projects` — CRUD, lifecycle
- `pledges` — backing logic
- `payments` — Payme, Click, escrow
- `notifications` — email, telegram, in-app
- `admin` — moderation, analytics
- `webhooks` — для платёжных систем

### Основные технологии
- Framework: NestJS или Fiber (Go)
- ORM: Prisma (NestJS) или sqlx (Go)
- Auth: JWT (access + refresh) + httpOnly cookies
- Validation: class-validator (NestJS) или validator (Go)
- Logging: pino + Sentry
- Background jobs: BullMQ (Redis-based)

---

## Database

**PostgreSQL** — transactional, primary store.

### Основные таблицы (концепт)
- `users` — id, phone, email, name, role, created_at
- `projects` — id, owner_id, title, description, goal, deadline, status
- `rewards` — id, project_id, title, amount, limit, claimed
- `pledges` — id, project_id, user_id, reward_id, amount, status
- `transactions` — id, pledge_id, gateway, gateway_id, status, amount
- `refunds` — id, pledge_id, amount, status, reason
- `notifications` — id, user_id, type, payload, read

**Redis** — cache, session storage, job queue, rate limiting

**S3-compatible storage** — изображения и медиа (локальные варианты: IT Park cloud, AWS S3, MinIO self-hosted)

---

## Инфраструктура

**Этап MVP:**
- Single VPS (Hetzner / DigitalOcean / локальный провайдер)
- Docker Compose (frontend + backend + postgres + redis)
- Cloudflare CDN + DDoS protection
- Let's Encrypt SSL

**Этап роста:**
- Kubernetes (k3s или managed)
- Database на отдельном managed instance
- Multi-region (Центральная Азия)

---

## CI/CD

- GitHub Actions
  - На PR: lint + type-check + unit test
  - При merge в main: build + deploy staging
  - Tag (`v*`): production deploy
- Sentry source maps upload
- E2E тесты nightly Playwright run

---

## Monitoring и observability

- **Sentry** — error tracking
- **Plausible / Umami** — privacy-friendly analytics
- **Grafana + Prometheus** — server metrics (в будущем)
- **Better Stack / Uptime Kuma** — uptime monitoring

---

## Безопасность

- HTTPS обязателен везде
- JWT short-lived (15 мин) + refresh token (7 дней)
- Rate limiting (Redis-based)
- CSRF protection
- SQL injection: ORM + parameterized queries
- XSS: Vue автоматически экранирует, но `v-html` с осторожностью
- Webhook signature validation (Payme, Click)
- Sensitive data в .env, никогда не коммитится в git
- Production secrets: Doppler / 1Password Secrets Automation

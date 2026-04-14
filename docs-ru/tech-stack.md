# Tech Stack

> Принцип выбора стека: **для локального рынка, быстрый MVP, управляемый небольшой командой.**

---

## Frontend (текущий)

| Технология | Версия | Причина |
|---|---|---|
| **Vue 3** | 3.5.31 | Современный Composition API, легче react, известен среди местных разработчиков |
| **TypeScript** | 6 | Type safety — отлавливает баги до runtime |
| **Vite** | 8 | Самый быстрый dev server, HMR, простой config |
| **Pinia** | 3 | Официальный state management Vue 3. Проще и type-safe чем Vuex |
| **Vue Router** | 5 | Стандарт SPA navigation |
| **Vue I18n** | 9 | Поддержка uz/ru/en |
| **Tailwind CSS** | 4 | Utility-first, скорость дизайна, простой mobile-first |
| **Vitest** | 4 | Полная совместимость с Vite, Jest API |
| **Playwright** | 1.58 | E2E тесты, мульти-браузер |
| **ESLint + oxlint** | — | Linting (оба: oxlint быстрый, eslint тщательный) |
| **oxfmt** | — | Code formatter (альтернатива Prettier, быстрее) |

### Альтернативы (почему отклонены)
- **React/Next.js** — Vue уже используется, опыт команды в этом направлении
- **Nuxt** — SSR добавится в будущем, если потребуется; сейчас SPA достаточно
- **Vuex** — устарел, на его место Pinia

---

## Backend (запланирован)

### Основной выбор: NestJS (TypeScript)
- Один язык с frontend
- Модульная архитектура (модули, controllers, services)
- Built-in DI, validation, OpenAPI generation
- Отличная совместимость с Prisma ORM
- Много Node.js специалистов в Узбекистане

### Альтернатива: Go (Fiber)
- Высокая производительность
- Маленький бинарь, мало RAM
- Хорошая concurrency
- Но: команде требуется время на изучение

### Рекомендация
**В MVP начать с NestJS**. На 2 году переписать performance-critical сервисы на Go (например, payment webhook handler).

---

## Database

| Технология | Назначение |
|---|---|
| **PostgreSQL 16** | Primary transactional DB |
| **Redis 7** | Cache, sessions, BullMQ jobs, rate limit |
| **S3-compatible** | Media storage (MinIO self-hosted или AWS S3) |

### Почему PostgreSQL?
- ACID — критически важно в платежах
- Поддержка JSON/JSONB (flexible schemas)
- Extensions (uuid-ossp, pg_trgm, postgis в будущем)
- Mature, надёжный, бесплатный

### Почему не MongoDB?
- Платёжные транзакции — требуют strong consistency
- Нужны joins (project + pledges + users)
- Большинство узбекских разработчиков знакомы с SQL

---

## DevOps

| Технология | Назначение |
|---|---|
| **Docker + Compose** | Локальный и MVP сервер |
| **GitHub Actions** | CI/CD |
| **Cloudflare** | CDN, DDoS, DNS |
| **Sentry** | Error tracking |
| **Plausible / Umami** | Analytics (privacy-friendly) |
| **Let's Encrypt** | SSL |

### Варианты хостинга
1. **Hetzner Cloud** (Германия) — дёшево, надёжно, ~$10/мес VPS
2. **DigitalOcean** — удобный UI, $12+/мес
3. **Локальный провайдер** (UzCloud, Beeline Cloud) — для законного хранения данных. Рекомендация: пользовательские данные должны быть **локально**.

> **Примечание:** Закон PDP Узбекистана требует хранения персональных данных на местной территории. Нужен локальный провайдер или гибридный подход.

---

## Платёжные системы

| Provider | Status | Документация |
|---|---|---|
| **Payme** | Основной | https://developer.help.paycom.uz |
| **Click** | Основной | https://docs.click.uz |
| **Uzum Pay** | Дополнительный | https://docs.uzum.uz |
| **Apelsin** | В будущем | https://api-docs.apelsin.uz |
| **Stripe** | Международный (в будущем) | — |

> Подробнее: [features/payments.md](features/payments.md)

---

## Telegram

- **Bot API** — notifications, OTP, project updates
- **Telegram Login Widget** — auth alternative
- **Telegram Channel** — маркетинг и community

---

## Требования к версиям

- **Node.js:** ^20.19.0 || >=22.12.0
- **pnpm или npm:** настроены
- **PostgreSQL:** 16+
- **Redis:** 7+
- **Docker:** 24+

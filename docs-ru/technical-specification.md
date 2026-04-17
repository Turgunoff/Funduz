# Техническое задание (ТЗ) — Краудфандинговая платформа Funduz

> **Версия документа:** 1.0
> **Дата:** 2026-04-14
> **Статус:** На утверждение
> **Целевая версия:** MVP v1.0 (Запуск: июль–август 2026)
> **Backend:** Supabase (PostgreSQL + Auth + Storage + Edge Functions)

---

## Оглавление

1. [Общие сведения](#1-общие-сведения)
2. [Цели и задачи проекта](#2-цели-и-задачи-проекта)
3. [Роли пользователей и права доступа](#3-роли-пользователей-и-права-доступа)
4. [Функциональные требования](#4-функциональные-требования)
5. [Бизнес-логика и жизненный цикл проекта](#5-бизнес-логика-и-жизненный-цикл-проекта)
6. [Схема базы данных (Supabase)](#6-схема-базы-данных-supabase)
7. [API и Edge Functions](#7-api-и-edge-functions)
8. [Интеграции](#8-интеграции)
9. [Нефункциональные требования](#9-нефункциональные-требования)
10. [Требования к безопасности](#10-требования-к-безопасности)
11. [Требования к UI/UX](#11-требования-к-uiux)
12. [Технологический стек](#12-технологический-стек)
13. [Тестирование и контроль качества](#13-тестирование-и-контроль-качества)
14. [Deployment и DevOps](#14-deployment-и-devops)
15. [Критерии приёмки](#15-критерии-приёмки)
16. [Этапы и сроки](#16-этапы-и-сроки)
17. [Выявленные недостатки и рекомендации](#17-выявленные-недостатки-и-рекомендации)

---

## 1. Общие сведения

### 1.1. Название проекта
**Funduz** — первая в Узбекистане reward-based (с вознаграждением) краудфандинговая платформа.

### 1.2. Краткое описание
Funduz — платформа коллективного финансирования стартапов, творческих и социальных проектов. Работает по модели **All-or-Nothing**: если проект достигает цели — деньги переводятся автору; если нет — автоматически возвращаются бэкерам.

### 1.3. Целевая аудитория
- **Авторы проектов:** стартаперы, креаторы, социальные предприниматели (18–45 лет)
- **Бэкеры:** интернет-пользователи 18–35 лет, интересующиеся инновациями
- **География:** Узбекистан (MVP), Казахстан и Кыргызстан (в перспективе)

### 1.4. Бизнес-модель
- **Комиссия 7%** с успешных проектов (take rate)
- Дополнительно (v1.1+): featured listing, премиум-аналитика, реферальная программа
- Цель 1-го года: 30–50 проектов, ~$3,800 выручки
- Точка безубыточности: 18–24 месяца

### 1.5. Цель документа
Данное ТЗ объединяет все функциональные, нефункциональные, технические и бизнес-требования к версии **MVP v1.0**. Является единым источником истины для разработчиков, дизайнеров, тестировщиков и владельца продукта.

---

## 2. Цели и задачи проекта

### 2.1. Бизнес-цели
1. Запустить первую полнофункциональную reward-краудфандинговую платформу в Узбекистане
2. За 12 месяцев после запуска: 5,000+ зарегистрированных пользователей, 30+ активных проектов
3. Доля успешных проектов (success rate): 35%+
4. GMV за 1-й год: ~700 млн сум
5. Точка безубыточности: 18–24 месяца

### 2.2. Технические цели
1. Высоконадёжный backend на Supabase (uptime 99.5%)
2. Mobile-first SPA на 3 языках (uz/ru/en)
3. Escrow-интеграция с Payme и Click
4. Автоматизированный механизм возвратов (с ручным fallback)
5. Lighthouse Performance 85+, A11y 95+
6. Соответствие GDPR и закону РУз о ПДн

### 2.3. Ключевые показатели (KPI)
| Показатель | Цель (1-й год) |
|---|---|
| Зарегистрированные пользователи | 5,000+ |
| MAU | 2,000+ |
| Созданные проекты | 50+ |
| Успешные проекты (%) | 35%+ |
| Средний pledge | 150,000 сум |
| Успешность платежей | 98%+ |
| Успешность возвратов | 99%+ |

---

## 3. Роли пользователей и права доступа

### 3.1. Guest (гость)
- Главная, Explore, просмотр проекта
- FAQ, Terms, Privacy, How It Works
- Регистрация / вход

### 3.2. User (зарегистрированный)
- Права гостя +
- Редактирование профиля, загрузка аватара
- Поддержка проекта (pledge)
- Просмотр My Pledges
- Создание проекта (получение роли creator)
- Настройка уведомлений

### 3.3. Creator (автор проекта)
- Права User +
- Создание черновика и отправка на модерацию
- Публикация обновлений проекта
- Просмотр статистики своего проекта
- Прохождение KYC (паспорт, ИНН)

### 3.4. Moderator
- Просмотр отправленных проектов
- Approve / Reject (с обязательным указанием причины)
- Выдача предупреждений пользователям
- Рассмотрение жалоб

### 3.5. Admin
- Все права
- Назначение модераторов
- Ручной возврат средств
- Аудит транзакций
- Настройки платформы (комиссия, категории)
- Финансовый дашборд

### 3.6. Правила Supabase RLS (Row Level Security)
Для каждой роли должны быть написаны полные RLS-политики. Минимальные требования:
- Пользователь может обновлять только свой профиль
- Creator может редактировать только свой проект (только в статусе `draft`)
- Бэкер может видеть только свои pledges
- Admin имеет доступ ко всему через `service_role`
- Публичные проекты (`active`, `funded`) доступны без авторизации

---

## 4. Функциональные требования

### 4.1. Аутентификация (Supabase Auth)

#### FR-AUTH-01: Телефон + SMS OTP
- **Провайдер:** Supabase Auth (phone) или Eskiz.uz SMS gateway
- OTP: 6 цифр, действителен 5 минут
- Лимит: 1 OTP/мин, 5 OTP/час на один номер
- Формат номера: `+998 XX XXX XX XX`

#### FR-AUTH-02: Email + пароль
- Минимум 8 символов, 1 заглавная, 1 цифра
- Верификация email (Supabase magic link)
- Восстановление пароля

#### FR-AUTH-03: Управление сессиями
- JWT access token: 1 час
- Refresh token: 30 дней
- Мульти-девайс сессии
- Функция «Выйти со всех устройств»

#### FR-AUTH-04: Профиль
Поля: `display_name`, `avatar_url`, `bio`, `phone`, `email`, `website`, `telegram`, `instagram`, `locale` (uz/ru/en).

### 4.2. Создание проекта (Wizard)

#### FR-PROJ-01: Многошаговый мастер
7 шагов, каждый автосохраняется (статус `draft`):

1. **Основная информация:** заголовок (3–80), краткое описание (40–300), категория, локация
2. **История:** rich text (TipTap или Quill) с изображениями
3. **Цель и срок:** сумма (мин 5 млн сум, макс 5 млрд), срок (30/45/60 дней)
4. **Уровни наград:** 3–10 tiers (title, description, minimum_pledge, limit, estimated_delivery)
5. **Медиа:** минимум 1 cover + 3 изображения, YouTube/Vimeo (опционально)
6. **Об авторе:** ИНН, паспорт (KYC), банковские реквизиты
7. **Проверка и отправка:** обзор всех данных, отправка на модерацию

#### FR-PROJ-02: Загрузка медиа
- Supabase Storage bucket: `project-media`
- Максимальный размер: 5 МБ (изображение), 50 МБ (PDF)
- Форматы: JPG, PNG, WebP, PDF
- Автоматический resize (thumbnail, medium, full)
- CDN кэширование

#### FR-PROJ-03: Модерация
- Статус `pending_review` → появляется в админ-панели
- Модератор должен рассмотреть в течение 48 часов
- При отклонении — обязательное указание причины, creator получает email + in-app уведомление

### 4.3. Просмотр и поиск проектов

#### FR-PROJ-04: Страница проекта
- Hero изображение/видео, заголовок, краткое описание
- Прогресс-бар (собрано / цель / процент)
- Количество бэкеров, оставшиеся дни
- Вкладки: История, Награды, Обновления, Бэкеры, FAQ
- Кнопка «Back this project»
- Соцшаринг (Telegram, Facebook, копирование ссылки)

#### FR-PROJ-05: Explore и фильтры
- Sort: Newest, Ending Soon, Most Funded, Most Backed, Trending
- Filter: категория, статус, диапазон финансирования, локация
- Search: full-text (PostgreSQL `tsvector`)
- Пагинация: 20 проектов/стр (cursor-based)

#### FR-PROJ-06: Обновления
- Creator публикует пост (rich text + изображения)
- Бэкеры получают email-уведомление
- Версионирование и редактирование

### 4.4. Pledge и платёж

#### FR-PLEDGE-01: Создание pledge
- Пользователь выбирает reward tier или свою сумму
- Данные доставки (для физических наград)
- Опция анонимного pledge
- Выбор платёжного провайдера (Payme / Click)

#### FR-PLEDGE-02: Механизм escrow
- **Payme:** `receipts.create` → `receipts.pay` (hold) → по окончании проекта `receipts.confirm` или `receipts.cancel`
- **Click:** Prepare → Complete (hold) → final confirm
- Деньги удерживаются на стороне провайдера, переводятся автору только при успехе

#### FR-PLEDGE-03: Безопасность webhook
- Обязательный HTTPS
- Проверка подписи (HMAC)
- IP allowlist (IP провайдеров)
- Idempotency key (защита от повторной обработки)
- Полный audit log (`payment_events`)

#### FR-PLEDGE-04: Логика All-or-Nothing
- По наступлении дедлайна запускается Edge Function (cron):
  - Если `raised >= goal` → статус `funded`, все pledges `confirm`, 7% удерживается комиссия, остаток переводится автору
  - Если `raised < goal` → статус `failed`, все pledges `cancel` (возврат)
- При сбое возврата — alert в админ-дашборд

#### FR-PLEDGE-05: My Pledges
- Пользователь видит все свои pledges
- Статус: pending / held / confirmed / refunded / failed
- Скачивание PDF чека

### 4.5. Уведомления

#### FR-NOTIF-01: Email (транзакционные)
Провайдер: Resend / SendGrid / Postmark
События:
- Регистрация (welcome + verify)
- Восстановление пароля
- Подтверждение pledge
- Проект успешен / неуспешен
- Возврат выполнен
- Обновление проекта

#### FR-NOTIF-02: Telegram-бот
- Подписка на проект через бота (deeplink)
- Push-уведомления по ключевым событиям
- Поиск и просмотр проектов (бонус)

#### FR-NOTIF-03: In-app
- Иконка-колокольчик + счётчик непрочитанных
- Таблица `notifications`
- Real-time через Supabase Realtime

### 4.6. Админ-панель

#### FR-ADMIN-01: Дашборд
- Общий GMV, активные проекты, бэкеры, комиссия
- График за последние 30 дней
- Топ проектов, топ бэкеров

#### FR-ADMIN-02: Модерация проектов
- Список ожидающих
- Детальный просмотр → Approve / Reject (с причиной)
- История: кто и когда рассмотрел

#### FR-ADMIN-03: Транзакции
- Список всех транзакций
- Фильтры: статус, дата, провайдер, сумма
- Ручной возврат (с audit log)
- CSV экспорт

#### FR-ADMIN-04: Пользователи
- Поиск, ban/unban, назначение ролей
- Просмотр KYC документов и подтверждение

### 4.7. Статические страницы
- Home (hero, featured, trending, stats, CTA)
- How It Works (пошаговое объяснение)
- FAQ (по категориям)
- Contact (форма + email + Telegram)
- Terms of Service
- Privacy Policy
- Refund Policy
- 404

---

## 5. Бизнес-логика и жизненный цикл проекта

### 5.1. Статусы проекта
```
draft → pending_review → active → funded → completed
                      ↘ rejected              ↘ failed → refunded
```

| Статус | Описание | Кто меняет |
|---|---|---|
| `draft` | Creator создаёт | Creator |
| `pending_review` | Ожидает модерации | System |
| `rejected` | Отклонён | Moderator |
| `active` | Публичный, принимает pledges | System |
| `funded` | Цель достигнута, идёт перевод | System (cron) |
| `failed` | Цель не достигнута | System (cron) |
| `refunded` | Все возвраты выполнены | System |
| `completed` | Creator доставил награды | Creator + Admin |

### 5.2. Статусы pledge
```
pending → held → confirmed
              ↘ refund_pending → refunded
              ↘ cancelled
```

### 5.3. Расчёт комиссии
```
platform_fee = raised * 0.07
payment_fee = raised * provider_rate (~1%)
creator_payout = raised - platform_fee - payment_fee
```

### 5.4. Политика возвратов
- **Автоматический:** при fail проекта — 3–7 рабочих дней
- **Ручной (запрос бэкера):** только если проект `active` и pledge был создан не позднее 24 часов назад
- **Отмена автором:** все pledges автоматически возвращаются
- **Фрод:** ручной возврат админом, блокировка аккаунта

---

## 6. Схема базы данных (Supabase)

### 6.1. Основные таблицы

#### `profiles` (1:1 с auth.users)
```sql
id uuid PRIMARY KEY REFERENCES auth.users(id)
display_name text NOT NULL
avatar_url text
bio text
phone text UNIQUE
website text
telegram text
instagram text
locale text DEFAULT 'uz' CHECK (locale IN ('uz','ru','en'))
role text DEFAULT 'user' CHECK (role IN ('user','creator','moderator','admin'))
kyc_status text DEFAULT 'none' CHECK (kyc_status IN ('none','pending','verified','rejected'))
kyc_data jsonb
created_at timestamptz DEFAULT now()
updated_at timestamptz DEFAULT now()
```

#### `categories`
```sql
id serial PRIMARY KEY
slug text UNIQUE NOT NULL
name_uz text NOT NULL
name_ru text NOT NULL
name_en text
icon text
sort_order int DEFAULT 0
is_active boolean DEFAULT true
```

#### `projects`
```sql
id uuid PRIMARY KEY DEFAULT gen_random_uuid()
creator_id uuid NOT NULL REFERENCES profiles(id)
slug text UNIQUE NOT NULL
title text NOT NULL
short_description text NOT NULL
story jsonb NOT NULL
category_id int REFERENCES categories(id)
location text
cover_image_url text
video_url text
goal_amount bigint NOT NULL
raised_amount bigint DEFAULT 0
backers_count int DEFAULT 0
duration_days int NOT NULL CHECK (duration_days IN (30,45,60))
status text NOT NULL DEFAULT 'draft'
  CHECK (status IN ('draft','pending_review','rejected','active','funded','failed','refunded','completed'))
rejection_reason text
starts_at timestamptz
ends_at timestamptz
submitted_at timestamptz
approved_at timestamptz
search_vector tsvector
created_at timestamptz DEFAULT now()
updated_at timestamptz DEFAULT now()
```
Индексы: `creator_id`, `status`, `category_id`, `ends_at`, GIN(`search_vector`)

#### `rewards`
```sql
id uuid PRIMARY KEY
project_id uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE
title text NOT NULL
description text
minimum_pledge bigint NOT NULL
limit_quantity int
claimed_quantity int DEFAULT 0
estimated_delivery date
shipping_required boolean DEFAULT false
sort_order int DEFAULT 0
```

#### `project_media`
```sql
id uuid PRIMARY KEY
project_id uuid REFERENCES projects(id) ON DELETE CASCADE
url text NOT NULL
type text CHECK (type IN ('image','document','video_thumbnail'))
sort_order int
```

#### `project_updates`
```sql
id uuid PRIMARY KEY
project_id uuid REFERENCES projects(id) ON DELETE CASCADE
title text NOT NULL
content jsonb NOT NULL
is_backer_only boolean DEFAULT false
created_at timestamptz DEFAULT now()
```

#### `pledges`
```sql
id uuid PRIMARY KEY
project_id uuid NOT NULL REFERENCES projects(id)
backer_id uuid NOT NULL REFERENCES profiles(id)
reward_id uuid REFERENCES rewards(id)
amount bigint NOT NULL
status text NOT NULL DEFAULT 'pending'
  CHECK (status IN ('pending','held','confirmed','refund_pending','refunded','cancelled','failed'))
is_anonymous boolean DEFAULT false
shipping_address jsonb
payment_provider text CHECK (payment_provider IN ('payme','click','uzum'))
provider_transaction_id text
created_at timestamptz DEFAULT now()
confirmed_at timestamptz
refunded_at timestamptz
```

#### `payment_events` (audit log)
```sql
id bigserial PRIMARY KEY
pledge_id uuid REFERENCES pledges(id)
provider text NOT NULL
event_type text NOT NULL
idempotency_key text UNIQUE
payload jsonb
signature text
ip_address inet
created_at timestamptz DEFAULT now()
```

#### `payouts` (выплаты автору)
```sql
id uuid PRIMARY KEY
project_id uuid UNIQUE REFERENCES projects(id)
creator_id uuid REFERENCES profiles(id)
gross_amount bigint
platform_fee bigint
payment_fee bigint
net_amount bigint
bank_account jsonb
status text CHECK (status IN ('pending','processing','completed','failed'))
processed_at timestamptz
transaction_reference text
```

#### `notifications`
```sql
id uuid PRIMARY KEY
user_id uuid REFERENCES profiles(id)
type text NOT NULL
title text
body text
data jsonb
is_read boolean DEFAULT false
created_at timestamptz DEFAULT now()
```

#### `audit_logs`
```sql
id bigserial PRIMARY KEY
actor_id uuid REFERENCES profiles(id)
action text NOT NULL
target_type text
target_id text
diff jsonb
ip_address inet
created_at timestamptz DEFAULT now()
```

### 6.2. Триггеры и функции
- `projects.raised_amount` — автоинкремент при `confirmed` pledge
- `projects.backers_count` — количество уникальных бэкеров
- `rewards.claimed_quantity` — привязано к pledges
- `projects.search_vector` — по title + short_description + story
- `profiles.updated_at` — на каждое обновление

### 6.3. Пример RLS-политики
```sql
CREATE POLICY "public projects readable" ON projects
  FOR SELECT USING (status IN ('active','funded','completed'));

CREATE POLICY "creator manages own drafts" ON projects
  FOR ALL USING (auth.uid() = creator_id AND status = 'draft');

CREATE POLICY "backer sees own pledges" ON pledges
  FOR SELECT USING (auth.uid() = backer_id);
```

---

## 7. API и Edge Functions

Supabase автоматически предоставляет CRUD через `PostgREST`. Сложная бизнес-логика реализуется через **Supabase Edge Functions** (Deno).

### 7.1. Список Edge Functions

| Функция | Назначение | Триггер |
|---|---|---|
| `submit-project` | Отправка проекта на модерацию (валидация) | HTTP (creator) |
| `create-pledge` | Создание pledge, инициация платежа | HTTP (user) |
| `payme-webhook` | Приём webhook от Payme | HTTP (Payme IP) |
| `click-webhook` | Приём webhook от Click | HTTP (Click IP) |
| `finalize-projects` | Завершение проектов по дедлайну | pg_cron каждый час |
| `process-refunds` | Запуск возвратов | pg_cron |
| `send-notifications` | Email + Telegram уведомления | DB trigger / queue |
| `generate-payout` | Подготовка выплаты автору | `projects.status → funded` |
| `search-projects` | Full-text поиск (ru/uz) | HTTP |

### 7.2. RPC (PostgreSQL функции)
- `get_project_stats(project_id)` → progress, backers, days_left
- `get_trending_projects(limit)` → алгоритм trending
- `get_user_pledges(user_id)` → дашборд пользователя

### 7.3. Формат API
- REST (PostgREST) + JSON
- Авторизация: `Authorization: Bearer <jwt>`
- Формат ошибки: `{ code, message, details }`
- Пагинация: `Range` header или `?limit=&offset=`

---

## 8. Интеграции

### 8.1. Payme (Paycom)
- Merchant ID, Secret Key (в `.env`)
- Webhook endpoint: `/functions/v1/payme-webhook`
- Методы: `CheckPerformTransaction`, `CreateTransaction`, `PerformTransaction`, `CancelTransaction`, `CheckTransaction`, `GetStatement`
- Подпись: Basic Auth (base64)
- Test и production окружения

### 8.2. Click
- Service ID, Secret Key
- Webhook: `/functions/v1/click-webhook`
- Prepare + Complete flow
- MD5 подпись: `click_trans_id + service_id + SECRET_KEY + merchant_trans_id + amount + action + sign_time`

### 8.3. Uzum Pay (v1.1)
- Будет добавлен позже

### 8.4. SMS (Eskiz.uz или Play Mobile)
- Отправка OTP (если Supabase phone auth не используется)

### 8.5. Email (Resend или Postmark)
- Транзакционные письма
- Template engine (React Email или MJML)
- Верификация домена (SPF, DKIM, DMARC)

### 8.6. Telegram Bot
- `telegraf` или `grammy` (Deno)
- Webhook режим
- Deep link: `t.me/FunduzBot?start=project_<id>`

### 8.7. Аналитика
- **Plausible** или **Umami** (privacy-friendly, self-hosted)
- Отслеживание событий: pledge_created, project_submitted и т.д.

### 8.8. Мониторинг ошибок
- **Sentry** (frontend + edge functions)

### 8.9. Хранилище файлов
- **Supabase Storage** (S3-совместимое)
- Buckets: `avatars` (public), `project-media` (public), `kyc-documents` (private)

---

## 9. Нефункциональные требования

### 9.1. Производительность
- **Lighthouse Performance:** ≥ 85 (mobile), ≥ 95 (desktop)
- **First Contentful Paint:** < 1.5 с
- **Time to Interactive:** < 3 с (3G)
- **Загрузка главной:** < 2 с
- **API P95:** < 500 мс
- Выдерживать **1,000 параллельных** пользователей

### 9.2. Доступность
- **Uptime:** 99.5% (SLA Supabase + CDN)
- Плановое обслуживание: раз в месяц, ночью
- Страница статуса: `status.funduz.uz`

### 9.3. Масштабирование
- Supabase Pro (для запуска)
- Database connection pooling (Supavisor)
- Image CDN (Cloudflare или Supabase CDN)
- Edge Functions — автомасштабирование

### 9.4. Восстановление
- **RTO:** 4 часа
- **RPO:** 1 час
- Point-in-Time Recovery включён
- Ежедневный backup, хранение 30 дней
- Еженедельный тест восстановления

### 9.5. Поддержка
- Браузеры: последние 2 версии (Chrome, Safari, Firefox, Edge), Samsung Internet
- Мобильные: iOS 14+, Android 8+
- Разрешение: 320px–2560px

### 9.6. Мультиязычность
- uz, ru (обязательно), en (в перспективе)
- URL: `/uz/...`, `/ru/...` или query `?lang=`
- Мультиязычные поля в БД (`_uz`, `_ru`, `_en`)

### 9.7. Доступность (A11y)
- **WCAG 2.1 Level AA**
- Tab навигация
- Screen reader support (aria-label)
- Контраст: ≥ 4.5:1
- Lighthouse A11y ≥ 95

### 9.8. SEO
- Server-rendered meta теги (Vite SSR или prerender)
- `robots.txt`, `sitemap.xml`
- Open Graph и Twitter Card
- Структурированные данные (schema.org)
- Canonical URL

---

## 10. Требования к безопасности

### 10.1. Аутентификация
- Пароли: bcrypt (Supabase default)
- JWT (HS256/RS256)
- 2FA (v1.1 — TOTP)
- Защита OTP от brute-force (rate limit)

### 10.2. Авторизация
- RLS на каждой таблице
- Server-side проверки (в Edge Functions)
- Frontend — только для UX

### 10.3. Безопасность платежей
- **PCI DSS:** данные карт не хранятся (tokenization на стороне Payme/Click)
- Проверка подписи webhook (HMAC/Basic Auth)
- Idempotency key
- IP allowlist
- Защита от replay (timestamp + nonce)

### 10.4. Защита данных
- **TLS 1.3** обязателен
- PII зашифрованы (Supabase at-rest encryption)
- Backups зашифрованы
- `kyc_documents` — private bucket, signed URL
- Соответствие GDPR и Закону РУз о ПДн

### 10.5. Доступ и аудит
- Все действия админа в `audit_logs`
- Логирование попыток входа
- Алерт на подозрительную активность (fail login > 5)

### 10.6. Web-безопасность
- **CSP** (Content Security Policy)
- **CORS** — только разрешённые домены
- **HSTS** (1 год)
- **SRI** (script integrity)
- **Rate limiting:** login, OTP, pledge
- **CAPTCHA** (hCaptcha или Cloudflare Turnstile) на чувствительных действиях

### 10.7. Безопасность кода
- npm audit / Dependabot
- Secrets в `.env` и Supabase Vault
- Никогда не push secrets в git (pre-commit hook)
- OWASP Top 10 checklist

### 10.8. Защита от мошенничества
- KYC обязателен для создания проекта
- Первые 100 проектов — ручная проверка
- Детекция подозрительных паттернов (много заявок, повтор IP)
- Кнопка жалобы на каждом проекте

---

## 11. Требования к UI/UX

### 11.1. Принципы дизайна
- **Mobile-first**, минималистично, легко
- **Цвета бренда:** (в Tailwind config)
- **Типографика:** Inter или SF Pro / Manrope (поддержка uz/ru)
- **Иконки:** Lucide или Heroicons

### 11.2. Responsive breakpoints
- Mobile: 320–767px
- Tablet: 768–1023px
- Desktop: 1024–1439px
- Wide: 1440+

### 11.3. Библиотека компонентов
- Tailwind CSS v4
- **Shadcn-vue** / **Naive UI** или собственная библиотека
- Dark mode (опционально, v1.1)

### 11.4. Основные экраны
1. Home (hero + featured + categories + trending + CTA + stats)
2. Explore (sidebar + grid)
3. Project detail (hero + progress + tabs + rewards sidebar)
4. Create project wizard
5. Pledge checkout
6. Profile (public)
7. Dashboard (мои проекты, мои pledges, настройки)
8. Admin panel

### 11.5. Empty states
- Нет проектов
- Нет pledges
- Ничего не найдено
- Ошибка сети

### 11.6. Loading states
- Skeleton loaders
- Оптимистичный UI в pledge
- Toast уведомления

### 11.7. Microcopy
- Все тексты в i18n файлах
- Проверка копирайтером
- CTA с действием: «Поддержать проект» (не «Отправить»)

---

## 12. Технологический стек

### 12.1. Frontend
| Технология | Версия | Назначение |
|---|---|---|
| Vue | 3.5+ | UI фреймворк |
| TypeScript | 5.6+ | Статические типы |
| Vite | 8.0+ | Сборщик |
| Pinia | 3.0+ | State management |
| Vue Router | 5.0+ | Роутинг |
| Vue I18n | 9.14+ | Мультиязык |
| Tailwind CSS | 4.2+ | Стили |
| VueUse | 11+ | Utility composables |
| TipTap | 2+ | Rich text editor |
| Zod | 3+ | Валидация схем |
| date-fns | 3+ | Работа с датами |

### 12.2. Backend (Supabase)
| Сервис | Назначение |
|---|---|
| Supabase Auth | Аутентификация, JWT |
| Supabase Database | PostgreSQL 15+ |
| Supabase Storage | Файлы (S3-compatible) |
| Supabase Realtime | Live updates |
| Supabase Edge Functions | Deno serverless |
| Supabase Vault | Управление секретами |
| pg_cron | Scheduled tasks |
| pg_net | HTTP из БД |

### 12.3. Инфраструктура
- **Hosting (frontend):** Vercel / Netlify / Cloudflare Pages
- **DNS + CDN:** Cloudflare
- **Monitoring:** Sentry + Plausible
- **Status page:** Better Stack или собственная
- **CI/CD:** GitHub Actions

### 12.4. Dev-инструменты
- ESLint + oxlint
- Prettier / oxfmt
- Vitest (unit)
- Playwright (E2E)
- Husky + lint-staged
- Conventional commits + semantic-release (опционально)

---

## 13. Тестирование и контроль качества

### 13.1. Покрытие тестами
- **Unit:** ≥ 70% (бизнес-логика)
- **Integration:** Edge Functions
- **E2E:** основные сценарии (signup → pledge → refund)
- **Manual QA:** перед каждым релизом

### 13.2. Критические тест-сценарии
1. Регистрация (phone + email)
2. Создание проекта (7 шагов, draft save)
3. Модерация (approve + reject)
4. Pledge + Payme (success + fail)
5. Pledge + Click
6. Funding проекта (тест cron)
7. Failing проекта и возврат
8. Ручной возврат (admin)
9. Webhook replay/idempotency
10. Попытки обхода RLS

### 13.3. Нагрузочное тестирование
- k6 или Artillery
- 1,000 concurrent users
- Нагрузка на pledge endpoint

### 13.4. Security testing
- OWASP ZAP scan
- Dependency audit
- Penetration test (перед запуском)
- Матрица тестов RLS

### 13.5. UAT
- Реальные 5–10 seed проектов
- Бета-тест с бэкерами 2 недели

---

## 14. Deployment и DevOps

### 14.1. Окружения
| Окружение | URL | Назначение |
|---|---|---|
| Local | `localhost:5173` | Dev |
| Preview | `*.vercel.app` | PR preview |
| Staging | `staging.funduz.uz` | QA |
| Production | `funduz.uz` | Live |

### 14.2. Стратегия веток
- `main` → production (protected, только PR)
- `develop` → staging (опционально)
- `feature/*`, `fix/*`, `chore/*`

### 14.3. CI/CD (GitHub Actions)
- PR: lint + type-check + test + build
- Merge в main: deploy в production
- Supabase миграции: `supabase db push`

### 14.4. Управление миграциями
- Папка `supabase/migrations/`
- Версионирование, план отката
- Продакшн-миграции: в off-peak часы

### 14.5. Backup и мониторинг
- Supabase daily backup
- Sentry alerts (Slack/Telegram)
- Uptime monitoring (Better Stack)
- Агрегация логов (Supabase logs + Sentry frontend)

### 14.6. Управление секретами
- `.env.local` — локально
- GitHub Actions secrets — CI
- Vercel env vars — production
- Supabase Vault — DB-level
- Никогда не в git

---

## 15. Критерии приёмки

MVP v1.0 выпускается **только при выполнении всех пунктов**:

### 15.1. Функциональные
- [ ] Все FR-требования §4 реализованы
- [ ] 5 тестовых проектов прошли полный lifecycle (draft → funded/failed → refunded)
- [ ] Реальные платежи через Payme и Click (sandbox + prod)
- [ ] Ручной возврат через админ-панель работает
- [ ] Email и Telegram уведомления работают

### 15.2. Качество
- [ ] Lighthouse Performance ≥ 85, A11y ≥ 90
- [ ] 0 критических багов, ≤ 10 minor
- [ ] Unit coverage ≥ 70%
- [ ] Все критические E2E тесты зелёные
- [ ] Security audit пройден

### 15.3. Юридические
- [ ] Пользовательское соглашение утверждено юристом
- [ ] Политика конфиденциальности (PDP compliant)
- [ ] Оферта
- [ ] Заявка на резидента IT Park (опционально)

### 15.4. Бизнес
- [ ] Минимум 5 seed-проектов готовы
- [ ] Брендбук и маркетинговые материалы
- [ ] План запуска (PR)
- [ ] Служба поддержки (Telegram + email) настроена

---

## 16. Этапы и сроки

### Этап 1 — Foundation (1 мес: 2026-04 → 2026-05)
- [ ] Настройка Supabase (staging + prod)
- [ ] Схема БД и RLS-политики
- [ ] Интеграция Auth
- [ ] Базовый layout и роутинг (улучшение текущего UI)
- [ ] Заполнение i18n

### Этап 2 — Core features (1 мес: 2026-05 → 2026-06)
- [ ] Wizard создания проекта (backend + frontend)
- [ ] Страница проекта (backend integration)
- [ ] Explore + filter + search
- [ ] Профиль и dashboard

### Этап 3 — Payment (1 мес: 2026-06 → 2026-07)
- [ ] Pledge flow
- [ ] Payme integration + sandbox test
- [ ] Click integration + sandbox test
- [ ] All-or-Nothing cron
- [ ] Автоматизация возвратов

### Этап 4 — Admin + Moderation (2 нед: 2026-07)
- [ ] Админ-панель
- [ ] Модерация
- [ ] Система уведомлений
- [ ] Telegram-бот

### Этап 5 — QA и подготовка к запуску (2 нед: 2026-07 → 2026-08)
- [ ] Полный regression test
- [ ] Performance tuning
- [ ] Security audit
- [ ] Подготовка seed-проектов
- [ ] Launch PR

### **Запуск: 2026-08-01**

### Этап 6 — Post-launch (2026-08 → 2026-12)
- Bug fixing (SLA: critical 4h, high 24h)
- Comments и Q&A (v1.1)
- Premium analytics
- Featured listing
- PWA

---

## 17. Выявленные недостатки и рекомендации

В этом разделе собраны **пробелы** в существующей документации и кодовой базе, а также рекомендации по их устранению.

### 17.1. Пробелы в документации

| # | Недостаток | Рекомендация |
|---|---|---|
| 1 | В документации в качестве backend указан **NestJS/Go**, но вы используете **Supabase** | Обновить `docs/tech-stack.md` и `docs/architecture.md` |
| 2 | Схема БД не описана | Использовать §6 этого ТЗ как основу |
| 3 | RLS-политики не задокументированы | Написать отдельный `docs/features/rls-policies.md` для каждой таблицы |
| 4 | Есть `guest-screens-todo.md`, но нет **authenticated screens** | Создать `authenticated-screens-todo.md` |
| 5 | Процесс KYC не описан | Создать `docs/features/kyc.md` (паспорт, ИНН, верификация) |
| 6 | Политика возвратов отсутствует как отдельный документ | `docs/legal/refund-policy.md` |
| 7 | Неясен процесс поддержки/жалоб | `docs/features/support.md` (SLA, канал, эскалация) |
| 8 | Нет правил контент-модерации (что запрещено) | `docs/legal/content-policy.md` |
| 9 | Нет disaster recovery плана | `docs/architecture-disaster-recovery.md` |
| 10 | Нет процесса удаления аккаунта | Обязательно по PDP-закону |

### 17.2. Бизнес-пробелы

1. **Налогообложение не уточнено:** облагается ли краудфандинг как доход? Кто несёт налоговую нагрузку — платформа или автор? Нужна юридическая консультация.
2. **Escrow-лицензия:** требует ли ЦБ РУз специальной лицензии для краудфандинговой платформы? — проверить.
3. **AML:** проверки по крупным суммам. Для pledges > 50 млн сум — дополнительная верификация.
4. **Разрешение споров:** что делать, если бэкер не получил награду? В текущих документах чёткого процесса нет.
5. **Сбор ИНН:** от creator нужен ИНН для налоговой.
6. **Верификация банка:** банковские реквизиты creator — проверять через тестовый перевод.
7. **Множество валют:** указан только UZS. В перспективе возможно понадобится RUB/USD для хеджирования инфляции.

### 17.3. Технические пробелы

1. **Лимиты Supabase:**
   - Free-план не подходит для production — старт с **Pro ($25/мес)**
   - Edge Functions timeout 150с — долгие операции должны быть фоновыми (pg_cron + queue table)
   - Стоимость Storage bandwidth — оптимизация через Cloudflare CDN

2. **Надёжность webhook:**
   - Supabase Edge Function может иметь cold start — учитывайте retry-логику Payme/Click
   - **Idempotency обязательна** — защита от повторной обработки
   - Рекомендуется добавить queue (outbox pattern)

3. **Точность PostgreSQL cron:**
   - `pg_cron` — минимум 1 минута
   - При расчёте дедлайна — `ends_at < now()` с окном в 1 минуту
   - Защита от параллельного запуска: `SELECT ... FOR UPDATE SKIP LOCKED`

4. **Frontend:**
   - Текущий `src/stores/counter.ts` — заглушка. Нужны: `auth`, `projects`, `pledges`, `notifications`, `ui`
   - `@supabase/supabase-js` достаточно — не нужен axios
   - **Нужна валидация форм:** `vee-validate` + `zod`
   - **Оптимизация изображений:** `vite-plugin-image` или Supabase Image Transformation

5. **SEO и metadata:**
   - Vue SPA — нужен **prerendering** или **SSR (Nuxt)**
   - Минимум: `vite-plugin-prerender` для статических страниц
   - Без SSR страницы проектов — Telegram preview не будет работать (Open Graph)

6. **Мониторинг:**
   - Sentry на frontend + Edge Functions
   - Supabase Postgres logs — отслеживание slow query
   - Кастомные метрики: pledge rate, success rate, refund rate

7. **Rate limiting:**
   - Встроенный Edge Functions rate limit слабоват
   - Использовать **Cloudflare Rate Limiting Rules**
   - Для OTP — отдельный агрессивный лимит

8. **Загрузка файлов:**
   - Direct client → Supabase Storage (signed URL)
   - Virus scan (ClamAV или облачный сервис) — для защиты от фрода
   - Проверка MIME и magic bytes изображений

9. **Тест-окружение:**
   - Отдельный Supabase `staging` project
   - Sandbox-ключи Payme/Click
   - Seed script (`supabase/seed.sql`) с тестовыми данными

10. **Локализация:**
    - i18n — один файл `i18n.ts` (1485 строк) — слишком большой. Разделить на `locales/uz.json`, `locales/ru.json`
    - Правильная настройка плюрализации (1 / 2 / 5)
    - Форматирование дат (date-fns locale)

### 17.4. UX-пробелы

1. **Нет onboarding** — объяснение для новых пользователей
2. **Автосохранение черновика проекта** (каждые 30 сек) — не указано
3. **Детальный receipt** на email при pledge
4. **Функция «Напомнить о проекте»** — если пользователь не завершил оплату
5. **Social proof:** «X человек поддержали», «X часов назад»
6. **Прозрачность прогресса:** показ даты доставки reward
7. **Mobile navigation** — текущий header нужно проверить на мобильных

### 17.5. Критические замечания по безопасности

1. **Supabase anon key** публичный, но **service_role key** не должен попадать на frontend — только в Edge Functions
2. **RLS обязательно включён на всех таблицах** (по умолчанию выключен)
3. Webhook endpoints не проверяют `SUPABASE_JWT` — нужна отдельная проверка подписи
4. HTML, введённый пользователем (история проекта), должен быть **санитизирован** — DOMPurify
5. Защита от **account takeover** при смене email (подтверждение)
6. **PII не должен быть в логах** (телефон/email маскированы)

### 17.6. Приоритетные действия (сделать немедленно)

| Приоритет | Действие |
|---|---|
| P0 | Обновить `docs/tech-stack.md` и `docs/architecture.md` под Supabase |
| P0 | Реализовать схему БД в Supabase миграциях (`supabase/migrations/`) |
| P0 | Написать и протестировать RLS-политики |
| P0 | Получить sandbox-аккаунты Payme и Click |
| P1 | Создать Pinia stores (`auth`, `projects`, `pledges`) |
| P1 | Обёртка Supabase client (`src/lib/supabase.ts`) |
| P1 | Zod-схемы для всех форм |
| P1 | Консультация с юристом по KYC |
| P2 | Решение по SSR/Prerendering (миграция на Nuxt?) |
| P2 | Подключить Sentry и Plausible |

---

## Заключение

Данное ТЗ покрывает все технические и бизнес-требования к **MVP v1.0**. Документ является **живым (living document)** — изменения допускаются по ходу проекта, но каждое изменение должно быть версионировано и обосновано.

**Следующие шаги:**
1. Обсудить и утвердить ТЗ с командой
2. Начать с P0-задач из §17.6
3. Подготовить staging-окружение Supabase
4. Спланировать первый спринт (2 недели)

**Авторы:** core team Funduz
**Утверждают:** CTO, Product Owner, Business Owner
**Следующий review:** ежемесячно

---

> По вопросам и предложениям: `contact@funduz.uz`

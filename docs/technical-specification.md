# Texnik Topshiriq (TZ) — Funduz Kraudfanding Platformasi

> **Hujjat versiyasi:** 1.0
> **Sana:** 2026-04-14
> **Status:** Tasdiqlash uchun
> **Maqsadli versiya:** MVP v1.0 (Launch: 2026 iyul–avgust)
> **Backend:** Supabase (PostgreSQL + Auth + Storage + Edge Functions)

---

## Mundarija

1. [Umumiy ma'lumot](#1-umumiy-malumot)
2. [Loyiha maqsadi va vazifalari](#2-loyiha-maqsadi-va-vazifalari)
3. [Foydalanuvchi rollari va huquqlar](#3-foydalanuvchi-rollari-va-huquqlar)
4. [Funksional talablar](#4-funksional-talablar)
5. [Biznes mantiqi va loyiha hayot sikli](#5-biznes-mantiqi-va-loyiha-hayot-sikli)
6. [Ma'lumotlar bazasi sxemasi (Supabase)](#6-malumotlar-bazasi-sxemasi-supabase)
7. [API va Edge Functions](#7-api-va-edge-functions)
8. [Integratsiyalar](#8-integratsiyalar)
9. [Nofunksional talablar](#9-nofunksional-talablar)
10. [Xavfsizlik talablari](#10-xavfsizlik-talablari)
11. [UI/UX talablari](#11-uiux-talablari)
12. [Texnik stek](#12-texnik-stek)
13. [Test va sifat nazorati](#13-test-va-sifat-nazorati)
14. [Deployment va DevOps](#14-deployment-va-devops)
15. [Qabul mezonlari (Acceptance Criteria)](#15-qabul-mezonlari)
16. [Bosqichlar va muddatlar](#16-bosqichlar-va-muddatlar)
17. [Topilgan kamchiliklar va tavsiyalar](#17-topilgan-kamchiliklar-va-tavsiyalar)

---

## 1. Umumiy ma'lumot

### 1.1. Loyiha nomi
**Funduz** — O'zbekistonda birinchi reward-based (mukofot asosidagi) kraudfanding platformasi.

### 1.2. Qisqacha tavsif
Funduz — startup, ijodiy va ijtimoiy loyihalar uchun jamoaviy moliyalashtirish platformasi. Platforma **All-or-Nothing** modeli asosida ishlaydi: loyiha maqsadga yetsa, pul loyiha egasiga o'tkaziladi; yetmasa — barcha backerlarga avtomatik qaytariladi.

### 1.3. Maqsadli auditoriya
- **Loyiha egalari:** startaperlar, ijodkorlar, ijtimoiy tadbirkorlar (18–45 yosh)
- **Backerlar:** 18–35 yoshdagi internet foydalanuvchilari, innovatsiyalarga qiziquvchilar
- **Hudud:** O'zbekiston (MVP), Qozog'iston va Qirg'iziston (kelajakda)

### 1.4. Biznes modeli
- Muvaffaqiyatli loyihalardan **7% komissiya** (take rate)
- Qo'shimcha (v1.1+): featured listing, premium analytics, referral programma
- Yil 1 maqsadi: 30–50 loyiha, ~$3,800 daromad
- Break-even: 18–24 oy

### 1.5. Hujjat maqsadi
Ushbu TZ loyihaning **MVP v1.0** versiyasi uchun barcha funksional, nofunksional, texnik va biznes talablarni bir joyga jamlaydi. Dasturchi, dizayner, test muhandisi va biznes egasi uchun yagona haqiqat manbai (single source of truth) hisoblanadi.

---

## 2. Loyiha maqsadi va vazifalari

### 2.1. Biznes maqsadlari
1. O'zbekistonda birinchi to'liq ishlaydigan reward crowdfunding platformasini ishga tushirish
2. Launch'dan keyingi 12 oy ichida 5,000+ ro'yxatdan o'tgan foydalanuvchi, 30+ faol loyiha
3. Loyiha muvaffaqiyat darajasi (success rate): 35%+
4. Yil 1 GMV: ~700 mln so'm
5. Break-even: 18–24 oy ichida

### 2.2. Texnik maqsadlar
1. Supabase asosida yuqori ishonchlilikdagi (99.5% uptime) backend
2. Mobile-first, 3 tilli (uz/ru/en) SPA
3. Payme va Click to'lov tizimlari bilan escrow integratsiyasi
4. Avtomatlashtirilgan refund mexanizmi (manual fallback bilan)
5. Lighthouse Performance 85+, A11y 95+
6. GDPR/PDP qonuniga mos keladigan ma'lumot saqlash

### 2.3. Loyiha muvaffaqiyat ko'rsatkichlari (KPI)
| Ko'rsatkich | Maqsad (Yil 1) |
|---|---|
| Ro'yxatdan o'tgan foydalanuvchilar | 5,000+ |
| MAU (monthly active users) | 2,000+ |
| Yaratilgan loyihalar | 50+ |
| Muvaffaqiyatli loyihalar (%) | 35%+ |
| O'rtacha pledge | 150,000 so'm |
| To'lov muvaffaqiyat darajasi | 98%+ |
| Refund muvaffaqiyat darajasi | 99%+ |

---

## 3. Foydalanuvchi rollari va huquqlar

### 3.1. Guest (mehmon)
- Bosh sahifa, Explore, loyiha ko'rish
- FAQ, Terms, Privacy, How It Works
- Ro'yxatdan o'tish / Login

### 3.2. User (ro'yxatdan o'tgan)
- Guest huquqlari +
- Profil tahrirlash, avatar yuklash
- Loyihaga pledge qilish
- My Pledges ko'rish
- Loyiha yaratish (creator rolini olish)
- Xabarnomalarni sozlash

### 3.3. Creator (loyiha egasi)
- User huquqlari +
- Loyiha draft yaratish va yuborish
- Loyiha updates (yangiliklar) yozish
- Loyiha statistikasini ko'rish
- KYC jarayonini o'tish (pasport, STIR)

### 3.4. Moderator
- Yuborilgan loyihalarni ko'rib chiqish
- Approve / Reject (sababini kiritish bilan)
- Foydalanuvchilarga ogohlantirish berish
- Shikoyatlarni ko'rib chiqish

### 3.5. Admin
- Barcha huquqlar
- Moderatorlar tayinlash
- Manual refund
- Tranzaksiya audit logi
- Platforma sozlamalari (komissiya, kategoriyalar)
- Financial dashboard

### 3.6. Supabase RLS (Row Level Security) qoidalari
Har bir rol uchun to'liq RLS policy'lari yozilishi shart. Minimal talablar:
- Foydalanuvchi faqat o'z profil ma'lumotlarini yangilay oladi
- Creator faqat o'z loyihasini tahrirlay oladi (faqat `draft` statusida)
- Backer faqat o'z pledge'larini ko'ra oladi
- Admin `service_role` orqali barcha jadvallarga kirishi
- Public loyihalarni (status=`active`,`funded`) autentifikatsiyasiz o'qish mumkin

---

## 4. Funksional talablar

### 4.1. Autentifikatsiya (Supabase Auth)

#### FR-AUTH-01: Telefon raqami + SMS OTP
- **Provayder:** Supabase Auth (phone provider) yoki Eskiz.uz SMS gateway
- OTP: 6 raqamli, 5 daqiqa amal qiladi
- Limit: bir raqamga 1 daqiqada 1 ta, 1 soatda 5 ta
- OTP format: `+998 XX XXX XX XX`

#### FR-AUTH-02: Email + parol
- Parol minimal: 8 belgi, 1 katta, 1 raqam
- Email verifikatsiya (Supabase magic link)
- Parolni tiklash (reset password)

#### FR-AUTH-03: Sessiya boshqaruvi
- JWT access token: 1 soat
- Refresh token: 30 kun
- Ko'p qurilma (multi-device) sessiyalari
- "Barcha qurilmalardan chiqish" funksiyasi

#### FR-AUTH-04: Profil
Maydonlar: `display_name`, `avatar_url`, `bio`, `phone`, `email`, `website`, `telegram`, `instagram`, `locale` (uz/ru/en).

### 4.2. Loyiha yaratish (Wizard)

#### FR-PROJ-01: Ko'p bosqichli wizard
7 bosqich, har bir bosqich avtomatik saqlanadi (`draft` status):

1. **Asosiy ma'lumot:** sarlavha (3–80), qisqa tavsif (40–300), kategoriya, joylashuv
2. **Hikoya:** rich text (TipTap yoki Quill), rasmlar bilan
3. **Maqsad va muddat:** summa (min 5 mln so'm, max 5 mlrd), davomiyligi (30/45/60 kun)
4. **Reward tierlari:** 3–10 tier (title, description, minimum_pledge, limit, estimated_delivery)
5. **Media:** kamida 1 cover + 3 rasm, YouTube/Vimeo video URL (ixtiyoriy)
6. **Creator haqida:** STIR, pasport seriyasi (KYC), bank rekvizitlari
7. **Ko'rib chiqish va yuborish:** barcha ma'lumotlarni ko'rish, moderatsiya uchun yuborish

#### FR-PROJ-02: Media yuklash
- Supabase Storage bucket: `project-media`
- Maksimal fayl hajmi: 5 MB (rasm), 50 MB (PDF)
- Formatlar: JPG, PNG, WebP, PDF
- Avtomatik resize (thumbnail, medium, full)
- CDN caching

#### FR-PROJ-03: Moderatsiya
- Status `pending_review` → admin panelida paydo bo'ladi
- Moderator 48 soat ichida ko'rib chiqishi shart
- Reject qilinsa — sabab yozish majburiy, creator'ga email + in-app notification

### 4.3. Loyiha ko'rish va izlash

#### FR-PROJ-04: Loyiha detail sahifasi
- Hero rasm/video, sarlavha, qisqa tavsif
- Progress bar (to'plangan / maqsad / foiz)
- Backerlar soni, qolgan kun
- Tab'lar: Hikoya, Rewards, Updates, Backers, FAQ
- "Back this project" tugmasi
- Ijtimoiy ulashish (Telegram, Facebook, Link copy)

#### FR-PROJ-05: Explore va filter
- Sort: Newest, Ending Soon, Most Funded, Most Backed, Trending
- Filter: Category, Status, Funding range, Location
- Search: full-text (PostgreSQL `tsvector`)
- Pagination: 20 loyiha/sahifa (cursor-based)

#### FR-PROJ-06: Updates
- Creator post yoza oladi (rich text + rasm)
- Backerlar email bilan xabardor qilinadi
- Versiyalash va tahrirlash imkoni

### 4.4. Pledge va to'lov

#### FR-PLEDGE-01: Pledge yaratish
- Foydalanuvchi reward tier tanlaydi yoki custom amount kiritadi
- Shipping ma'lumotlari (fizik reward bo'lsa)
- Anonim pledge tanlovi
- To'lov provayderini tanlash (Payme / Click)

#### FR-PLEDGE-02: Escrow mexanizmi
- **Payme:** `receipts.create` → `receipts.pay` (hold) → loyiha tugaganida `receipts.confirm` yoki `receipts.cancel`
- **Click:** Prepare → Complete (hold) → final confirm
- Pul provayder tomonida ushlanadi, loyiha hisobiga faqat success bo'lganda o'tkaziladi

#### FR-PLEDGE-03: Webhook xavfsizligi
- HTTPS majburiy
- Imzo (HMAC) tekshiruvi
- IP allowlist (provayder IP'lari)
- Idempotency key (qayta ishlanishdan himoya)
- To'liq audit log (`payment_events` jadvali)

#### FR-PLEDGE-04: All-or-Nothing logikasi
- Deadline kelganida Edge Function (cron) ishga tushadi:
  - Agar `raised >= goal` → status `funded`, barcha pledge'lar `confirm` qilinadi, 7% komissiya ushlab qolinib qolgani creator'ga o'tkaziladi
  - Agar `raised < goal` → status `failed`, barcha pledge'lar `cancel` qilinadi (refund)
- Refund fail bo'lsa — admin dashboard'ga alert

#### FR-PLEDGE-05: My Pledges
- Foydalanuvchi o'zining barcha pledge'larini ko'radi
- Status: pending / held / confirmed / refunded / failed
- Receipt PDF yuklab olish

### 4.5. Notification

#### FR-NOTIF-01: Email (transactional)
Provayder: Resend / SendGrid / Postmark
Events:
- Ro'yxatdan o'tish (welcome + verify)
- Parolni tiklash
- Pledge tasdiqlanishi
- Loyiha muvaffaqiyatli / muvaffaqiyatsiz
- Refund amalga oshirildi
- Loyiha update

#### FR-NOTIF-02: Telegram bot
- Bot orqali loyihaga obuna bo'lish (deeplink)
- Asosiy events haqida push
- Loyiha qidirish va ko'rish (bonus)

#### FR-NOTIF-03: In-app
- Bell icon + unread counter
- `notifications` jadvali
- Real-time (Supabase Realtime) orqali push

### 4.6. Admin panel

#### FR-ADMIN-01: Dashboard
- Jami GMV, faol loyihalar, backerlar, komissiya
- So'nggi 30 kun grafikasi
- Eng faol loyihalar, eng katta backer

#### FR-ADMIN-02: Loyihalar moderatsiyasi
- Kutilayotgan loyihalar ro'yxati
- Batafsil ko'rish → Approve / Reject (sabab bilan)
- Tarix: kim va qachon ko'rib chiqgan

#### FR-ADMIN-03: Tranzaksiyalar
- Barcha tranzaksiyalar ro'yxati
- Filter: status, sana, provayder, summa
- Manual refund (audit log bilan)
- CSV export

#### FR-ADMIN-04: Foydalanuvchilar
- Izlash, ban/unban, rol berish
- KYC hujjatlarini ko'rish va tasdiqlash

### 4.7. Static sahifalar
- Home (hero, featured, trending, stats, CTA)
- How It Works (qadam-qadam tushuntirish)
- FAQ (kategoriyalar bo'yicha)
- Contact (form + email + Telegram)
- Terms of Service
- Privacy Policy
- Refund Policy
- 404

---

## 5. Biznes mantiqi va loyiha hayot sikli

### 5.1. Loyiha statuslari
```
draft → pending_review → active → funded → completed
                      ↘ rejected              ↘ failed → refunded
```

| Status | Tavsif | Kim o'zgartira oladi |
|---|---|---|
| `draft` | Creator yaratmoqda | Creator |
| `pending_review` | Moderatsiya kutilmoqda | System |
| `rejected` | Rad etildi | Moderator |
| `active` | Ommaviy, pledge qabul qiladi | System |
| `funded` | Maqsadga yetdi, pullar o'tkazilmoqda | System (cron) |
| `failed` | Maqsadga yetmadi | System (cron) |
| `refunded` | Barcha refundlar amalga oshirildi | System |
| `completed` | Creator reward'larni yetkazdi | Creator + Admin |

### 5.2. Pledge statuslari
```
pending → held → confirmed
              ↘ refund_pending → refunded
              ↘ cancelled
```

### 5.3. Komissiya hisob-kitobi
```
platform_fee = raised * 0.07
payment_fee = raised * provider_rate (taxminan 1%)
creator_payout = raised - platform_fee - payment_fee
```

### 5.4. Refund policy
- **Avtomatik:** Loyiha fail bo'lsa — 3–7 ish kuni ichida
- **Manual (backer so'rovi):** Faqat loyiha `active` bo'lsa, pledge'dan 24 soat ichida
- **Loyiha egasi bekor qilsa:** Barcha pledge'lar avtomatik refund
- **Fraud aniqlansa:** Admin manual refund, account block

---

## 6. Ma'lumotlar bazasi sxemasi (Supabase)

### 6.1. Asosiy jadvallar

#### `profiles` (Supabase auth.users bilan 1:1)
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
story jsonb NOT NULL  -- rich text content
category_id int REFERENCES categories(id)
location text
cover_image_url text
video_url text
goal_amount bigint NOT NULL  -- so'mda
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
Index: `creator_id`, `status`, `category_id`, `ends_at`, GIN(`search_vector`)

#### `rewards`
```sql
id uuid PRIMARY KEY
project_id uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE
title text NOT NULL
description text
minimum_pledge bigint NOT NULL
limit_quantity int  -- NULL = cheksiz
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
Index: `project_id`, `backer_id`, `status`, `provider_transaction_id`

#### `payment_events` (audit log)
```sql
id bigserial PRIMARY KEY
pledge_id uuid REFERENCES pledges(id)
provider text NOT NULL
event_type text NOT NULL  -- created, held, confirmed, cancelled, refunded, webhook_received
idempotency_key text UNIQUE
payload jsonb
signature text
ip_address inet
created_at timestamptz DEFAULT now()
```

#### `payouts` (creator'ga pul o'tkazish)
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

#### `audit_logs` (admin amallar)
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

### 6.2. Triggerlar va funksiyalar
- `projects.raised_amount` — pledge `confirmed` bo'lganda avtomatik yangilanadi
- `projects.backers_count` — unique backer soni
- `rewards.claimed_quantity` — pledge bilan bog'liq
- `projects.search_vector` — sarlavha + tavsif + hikoya ustida
- `profiles.updated_at` — har yangilanishda

### 6.3. RLS policy misoli
```sql
-- Projects: public active loyihalarni hamma o'qiy oladi
CREATE POLICY "public projects readable" ON projects
  FOR SELECT USING (status IN ('active','funded','completed'));

-- Creator o'z loyihasini boshqaradi
CREATE POLICY "creator manages own drafts" ON projects
  FOR ALL USING (auth.uid() = creator_id AND status = 'draft');

-- Pledges: backer o'z pledge'larini ko'radi
CREATE POLICY "backer sees own pledges" ON pledges
  FOR SELECT USING (auth.uid() = backer_id);
```

---

## 7. API va Edge Functions

Supabase barcha CRUD operatsiyalarini avtomatik `PostgREST` orqali taqdim etadi. Murakkab biznes mantiqi **Supabase Edge Functions** (Deno) orqali amalga oshiriladi.

### 7.1. Edge Functions ro'yxati

| Function | Maqsad | Trigger |
|---|---|---|
| `submit-project` | Loyihani moderatsiyaga yuborish (validatsiya) | HTTP (creator) |
| `create-pledge` | Pledge yaratish, provayder bilan to'lov boshlash | HTTP (user) |
| `payme-webhook` | Payme webhook qabul qilish | HTTP (Payme IP) |
| `click-webhook` | Click webhook qabul qilish | HTTP (Click IP) |
| `finalize-projects` | Tugagan loyihalarni yakunlash (cron) | pg_cron har soatda |
| `process-refunds` | Refund'larni ishga tushirish | pg_cron |
| `send-notifications` | Email + Telegram notification | DB trigger / queue |
| `generate-payout` | Creator'ga to'lov tayyorlash | `projects.status → funded` |
| `search-projects` | Full-text search (rus/uzb) | HTTP |

### 7.2. RPC (PostgreSQL funksiyalar)
- `get_project_stats(project_id)` → progress, backers, days_left
- `get_trending_projects(limit)` → trending algoritmi
- `get_user_pledges(user_id)` → user dashboard

### 7.3. API format
- REST (PostgREST) + JSON
- Auth: `Authorization: Bearer <jwt>`
- Error format: `{ code, message, details }`
- Pagination: `Range` header yoki `?limit=&offset=`

---

## 8. Integratsiyalar

### 8.1. Payme (Paycom)
- Merchant ID, Secret Key (`.env`)
- Webhook endpoint: `/functions/v1/payme-webhook`
- Methods: `CheckPerformTransaction`, `CreateTransaction`, `PerformTransaction`, `CancelTransaction`, `CheckTransaction`, `GetStatement`
- Imzo: Basic Auth (base64)
- Test va production muhitlari

### 8.2. Click
- Service ID, Secret Key
- Webhook: `/functions/v1/click-webhook`
- Prepare + Complete flow
- MD5 signature: `click_trans_id + service_id + SECRET_KEY + merchant_trans_id + amount + action + sign_time`

### 8.3. Uzum Pay (v1.1)
- Kelgusida qo'shiladi

### 8.4. SMS (Eskiz.uz yoki Play Mobile)
- OTP yuborish (agar Supabase phone auth ishlatilmasa)

### 8.5. Email (Resend yoki Postmark)
- Transactional email
- Template engine (React Email yoki MJML)
- Domen verifikatsiya (SPF, DKIM, DMARC)

### 8.6. Telegram Bot
- `telegraf` yoki `grammy` (Deno)
- Webhook mode
- Deep link: `t.me/FunduzBot?start=project_<id>`

### 8.7. Analytics
- **Plausible** yoki **Umami** (privacy-friendly, self-hosted)
- Event tracking: pledge_created, project_submitted, etc.

### 8.8. Error monitoring
- **Sentry** (frontend + edge functions)

### 8.9. File storage
- **Supabase Storage** (S3-compatible)
- Bucket'lar: `avatars` (public), `project-media` (public), `kyc-documents` (private)

---

## 9. Nofunksional talablar

### 9.1. Ishlash (Performance)
- **Lighthouse Performance:** ≥ 85 (mobile), ≥ 95 (desktop)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s (3G)
- **Asosiy sahifa yuklanishi:** < 2s
- **API javob vaqti:** P95 < 500ms
- **Bir vaqtda 1,000 foydalanuvchi** bardoshligi

### 9.2. Mavjudlik (Availability)
- **Uptime:** 99.5% (Supabase SLA + CDN)
- Planned maintenance: oyda 1 marta, tunda
- Status sahifasi: `status.funduz.uz`

### 9.3. Masshtablash (Scalability)
- Supabase Pro plan (launch uchun)
- Database connection pooling (Supavisor)
- Image CDN (Cloudflare yoki Supabase CDN)
- Edge Functions — avtomatik scale

### 9.4. Tiklash (Recovery)
- **RTO (Recovery Time Objective):** 4 soat
- **RPO (Recovery Point Objective):** 1 soat
- Supabase Point-in-Time Recovery yoqilgan
- Kunlik backup, 30 kun saqlash
- Haftalik backup restore test

### 9.5. Qo'llab-quvvatlash
- Brauzerlar: oxirgi 2 versiya (Chrome, Safari, Firefox, Edge), Samsung Internet
- Mobil: iOS 14+, Android 8+
- Ekran o'lchamlari: 320px–2560px

### 9.6. Ko'p tillilik
- uz, ru (majburiy), en (kelajakda)
- URL formati: `/uz/...`, `/ru/...` yoki query `?lang=`
- Ma'lumotlar bazasida ko'p tilli maydonlar (`_uz`, `_ru`, `_en`)

### 9.7. Kirish imkoniyati (A11y)
- **WCAG 2.1 Level AA**
- Tab navigation
- Screen reader support (aria-label)
- Kontrast: ≥ 4.5:1
- Lighthouse A11y ≥ 95

### 9.8. SEO
- Server-rendered meta teglar (Vite SSR yoki prerender)
- `robots.txt`, `sitemap.xml`
- Open Graph va Twitter Card
- Strukturli ma'lumot (schema.org `Project`, `Organization`)
- Canonical URL

---

## 10. Xavfsizlik talablari

### 10.1. Autentifikatsiya
- Parol: bcrypt (Supabase default)
- JWT (HS256/RS256)
- 2FA (v1.1 — TOTP)
- OTP brute-force himoyasi (rate limit)

### 10.2. Avtorizatsiya
- Supabase RLS har bir jadvalda
- Server-side tekshiruvlar (Edge Functions'da)
- Frontend faqat UX uchun ishonadi

### 10.3. To'lov xavfsizligi
- **PCI DSS:** Karta ma'lumotlari saqlanmaydi (tokenization Payme/Click tomonida)
- Webhook imzo tekshiruvi (HMAC yoki Basic Auth)
- Idempotency key
- IP allowlist
- Replay attack himoyasi (timestamp + nonce)

### 10.4. Data protection
- **TLS 1.3** majburiy
- PII (personal data) shifrlangan (Supabase at-rest encryption)
- Backup'lar shifrlangan
- `kyc_documents` bucket — private, signed URL bilan
- GDPR va PDP (O'zR Qonuni "Shaxsiy ma'lumotlar") talablari

### 10.5. Kirish va audit
- Barcha admin amallar `audit_logs`'ga yoziladi
- Login urinishlari loglanadi
- Shubhali faoliyat alert (fail login > 5)

### 10.6. Web xavfsizligi
- **CSP** (Content Security Policy)
- **CORS** — faqat ruxsat etilgan domenlar
- **HSTS** (1 yil)
- **SRI** (script integrity)
- **Rate limiting:** login, OTP, pledge
- **CAPTCHA** (hCaptcha yoki Cloudflare Turnstile) — sensitive action'larda

### 10.7. Code xavfsizligi
- npm audit / Dependabot
- Secrets `.env` va Supabase Vault'da
- Git'ga hech qachon secret push qilinmaydi (pre-commit hook)
- OWASP Top 10 checklist

### 10.8. Fraud prevention
- KYC majburiy (loyiha yaratish uchun)
- Birinchi 100 loyiha — manual review
- Shubhali pattern detection (ko'p arizalar, IP repeat)
- Shikoyat tugmasi har bir loyihada

---

## 11. UI/UX talablari

### 11.1. Dizayn tamoyillari
- **Mobile-first**, minimalist, yengil
- **Brand colors:** (Tailwind config'da aniqlanadi)
- **Typography:** Inter yoki SF Pro / Manrope (uz/ru'ni qo'llab-quvvatlaydi)
- **Iconlar:** Lucide yoki Heroicons

### 11.2. Responsive breakpointlar
- Mobile: 320–767px
- Tablet: 768–1023px
- Desktop: 1024–1439px
- Wide: 1440+

### 11.3. Komponentlar kutubxonasi
- Tailwind CSS v4
- **Shadcn-vue** yoki **Naive UI** yoki o'z component library
- Dark mode (ixtiyoriy, v1.1)

### 11.4. Asosiy ekranlar
1. Home (hero + featured + categories + trending + CTA + stats)
2. Explore (filter sidebar + grid)
3. Project detail (hero + progress + tabs + reward sidebar)
4. Create project wizard
5. Pledge checkout
6. Profile (public)
7. Dashboard (my projects, my pledges, settings)
8. Admin panel

### 11.5. Empty states
- Hech qanday loyiha yo'q
- Hech qanday pledge yo'q
- Qidiruv natija bermadi
- Tarmoq xatosi

### 11.6. Loading states
- Skeleton loaders
- Optimistik UI pledge'da
- Toast notificationlar

### 11.7. Microcopy
- Barcha matnlar i18n fayllarda
- Tilshunos (copywriter) tekshiradi
- CTA'lar harakat bilan: "Loyihani qo'llab-quvvatlash" (emas "Yuborish")

---

## 12. Texnik stek

### 12.1. Frontend
| Texnologiya | Versiya | Maqsad |
|---|---|---|
| Vue | 3.5+ | UI framework |
| TypeScript | 5.6+ | Statik tiplar |
| Vite | 8.0+ | Build tool |
| Pinia | 3.0+ | State management |
| Vue Router | 5.0+ | Routing |
| Vue I18n | 9.14+ | Multi-language |
| Tailwind CSS | 4.2+ | Styling |
| VueUse | 11+ | Utility composables |
| TipTap | 2+ | Rich text editor |
| Zod | 3+ | Schema validatsiya |
| date-fns | 3+ | Date helpers |

### 12.2. Backend (Supabase)
| Xizmat | Maqsad |
|---|---|
| Supabase Auth | Autentifikatsiya, JWT |
| Supabase Database | PostgreSQL 15+ |
| Supabase Storage | Fayl saqlash (S3-compatible) |
| Supabase Realtime | Live updates |
| Supabase Edge Functions | Deno serverless funksiyalar |
| Supabase Vault | Secret boshqaruv |
| pg_cron | Scheduled tasks |
| pg_net | HTTP from DB |

### 12.3. Infrastruktura
- **Hosting (frontend):** Vercel / Netlify / Cloudflare Pages
- **DNS + CDN:** Cloudflare
- **Monitoring:** Sentry + Plausible
- **Status page:** betterstack.com yoki o'z
- **CI/CD:** GitHub Actions

### 12.4. Dev asboblari
- ESLint + oxlint
- Prettier / oxfmt
- Vitest (unit)
- Playwright (E2E)
- Husky + lint-staged
- Conventional commits + semantic-release (ixtiyoriy)

---

## 13. Test va sifat nazorati

### 13.1. Test qamrovi
- **Unit testlar:** ≥ 70% (business logic)
- **Integration:** Edge Function'lar
- **E2E:** Asosiy flow'lar (signup → pledge → refund)
- **Manual QA:** har bir release oldidan

### 13.2. Test scenariylari (kritik)
1. Ro'yxatdan o'tish (phone + email)
2. Loyiha yaratish wizard (7 bosqich, draft save)
3. Loyiha moderatsiya (approve + reject)
4. Pledge + Payme to'lov (success + fail)
5. Pledge + Click to'lov
6. Loyiha fund bo'lishi (cron test)
7. Loyiha fail bo'lishi va refund
8. Manual refund (admin)
9. Webhook replay/idempotency
10. RLS bypass urinishlari

### 13.3. Performance testing
- k6 yoki Artillery
- 1,000 concurrent user
- Pledge endpoint yuklanishi

### 13.4. Security testing
- OWASP ZAP scan
- Dependency audit
- Penetration test (launch oldidan)
- RLS policy test matritsasi

### 13.5. UAT
- 5–10 seed loyiha bilan real test
- Beta backerlar bilan 2 hafta

---

## 14. Deployment va DevOps

### 14.1. Muhitlar
| Muhit | URL | Maqsad |
|---|---|---|
| Local | `localhost:5173` | Dev |
| Preview | `*.vercel.app` | PR preview |
| Staging | `staging.funduz.uz` | QA |
| Production | `funduz.uz` | Live |

### 14.2. Branch strategiyasi
- `main` → production (protected, PR only)
- `develop` → staging (ixtiyoriy)
- `feature/*`, `fix/*`, `chore/*`

### 14.3. CI/CD (GitHub Actions)
- PR: lint + type-check + test + build
- Merge to main: deploy production
- Supabase migration'lar: `supabase db push`

### 14.4. Migration boshqaruvi
- `supabase/migrations/` papkada
- Versiyalangan, rollback rejasi
- Production migration: off-peak vaqtda

### 14.5. Backup va monitoring
- Supabase daily backup
- Sentry alerts (Slack/Telegram)
- Uptime monitoring (Better Stack)
- Log aggregation (Supabase logs + frontend Sentry)

### 14.6. Secret boshqaruv
- `.env.local` — lokal
- GitHub Actions secrets — CI
- Vercel env vars — production
- Supabase Vault — DB-level secrets
- Hech qachon Git'ga commit emas

---

## 15. Qabul mezonlari (Acceptance Criteria)

MVP v1.0 **faqat quyidagilar bajarilgandagina** release qilinadi:

### 15.1. Funksional
- [ ] Barcha 4-bo'limdagi FR talablar bajarilgan
- [ ] 5 ta test loyiha to'liq lifecycle'dan o'tgan (draft → funded/failed → refunded)
- [ ] Payme va Click bilan haqiqiy to'lov (sandbox + prod test)
- [ ] Admin panelidan manual refund ishlaydi
- [ ] Email va Telegram notification ishlaydi

### 15.2. Sifat
- [ ] Lighthouse Performance ≥ 85, A11y ≥ 90
- [ ] 0 ta kritik bug, ≤ 10 ta minor bug
- [ ] 70%+ unit test coverage
- [ ] Barcha kritik E2E test'lar yashil
- [ ] Security audit o'tgan

### 15.3. Huquqiy
- [ ] Foydalanuvchi shartnomasi yurist tasdiqlagan
- [ ] Maxfiylik siyosati (PDP compliant)
- [ ] Oferta
- [ ] IT Park rezidentligi arizasi (ixtiyoriy)

### 15.4. Biznes
- [ ] Kamida 5 ta seed loyiha tayyor
- [ ] Brand guidelines va marketing materiallar
- [ ] Launch PR reja
- [ ] Support tizimi (Telegram + email) sozlangan

---

## 16. Bosqichlar va muddatlar

### Bosqich 1 — Foundation (1 oy: 2026-04 → 2026-05)
- [ ] Supabase project setup (staging + prod)
- [ ] DB sxema va RLS policy'lar
- [ ] Auth integratsiya
- [ ] Asosiy layout va routing (mavjud UI'ni yaxshilash)
- [ ] i18n to'ldirish

### Bosqich 2 — Core features (1 oy: 2026-05 → 2026-06)
- [ ] Loyiha yaratish wizard (backend + frontend)
- [ ] Project detail sahifasi (backend integratsiya)
- [ ] Explore + filter + search
- [ ] Profil va dashboard

### Bosqich 3 — Payment (1 oy: 2026-06 → 2026-07)
- [ ] Pledge flow
- [ ] Payme integratsiya + sandbox test
- [ ] Click integratsiya + sandbox test
- [ ] All-or-Nothing cron
- [ ] Refund avtomatizatsiyasi

### Bosqich 4 — Admin + Moderation (2 hafta: 2026-07)
- [ ] Admin panel
- [ ] Moderatsiya flow
- [ ] Notification tizimi
- [ ] Telegram bot

### Bosqich 5 — QA va launch prep (2 hafta: 2026-07 → 2026-08)
- [ ] Full regression test
- [ ] Performance tuning
- [ ] Security audit
- [ ] Seed loyihalar tayyorgarligi
- [ ] Launch PR

### **Launch: 2026-08-01**

### Bosqich 6 — Post-launch (2026-08 → 2026-12)
- Bug fixing (SLA: critical 4h, high 24h)
- Comments va Q&A (v1.1)
- Premium analytics
- Featured listing
- PWA

---

## 17. Topilgan kamchiliklar va tavsiyalar

Ushbu bo'lim mavjud hujjatlar va kodbazada **aniqlangan kamchiliklar** va ularni bartaraf etish bo'yicha tavsiyalarni o'z ichiga oladi.

### 17.1. Hujjatlar bo'yicha kamchiliklar

| # | Kamchilik | Tavsiya |
|---|---|---|
| 1 | Backend texnologiyasi hujjatlarda **NestJS/Go** deb ko'rsatilgan, lekin siz **Supabase** ishlatmoqdasiz | `docs/tech-stack.md` va `docs/architecture.md` yangilanishi shart |
| 2 | Ma'lumotlar bazasi sxemasi umuman yozilmagan | Ushbu TZ'dagi §6 asos qilib olinsin |
| 3 | RLS policy'lar hujjatlashtirilmagan | Har bir jadval uchun alohida `docs/features/rls-policies.md` yozilsin |
| 4 | `guest-screens-todo.md` bor, lekin **authenticated screens** yo'q | `authenticated-screens-todo.md` yaratilsin |
| 5 | KYC jarayoni hujjatlashtirilmagan | `docs/features/kyc.md` yaratilsin (pasport, STIR, verifikatsiya) |
| 6 | Refund policy (siyosati) alohida hujjat sifatida yo'q | `docs/legal/refund-policy.md` |
| 7 | Support / shikoyatlar jarayoni aniq emas | `docs/features/support.md` (SLA, kanal, eskalatsiya) |
| 8 | Content moderatsiya qoidalari (nimalar taqiqlanadi) yo'q | `docs/legal/content-policy.md` |
| 9 | Disaster recovery plani yo'q | `docs/architecture-disaster-recovery.md` |
| 10 | Ma'lumotlarni olib tashlash (account deletion) jarayoni yo'q | PDP qonuniga muvofiq majburiy |

### 17.2. Biznes bo'yicha kamchiliklar

1. **Soliq masalasi aniqlanmagan:** Kraudfandingdan olingan pul daromad sifatida soliqqa tortiladimi? Loyiha egasi soliq yukini kim oladi — platforma yoki egasi? Yuridik maslahatchi bilan aniqlashtirish zarur.
2. **Escrow litsenziyasi:** O'zR Markaziy Banki kraudfanding platformasi uchun alohida litsenziyani talab qiladimi? — tekshirish kerak.
3. **Anti money laundering (AML):** Katta summalarda KYC/AML tekshiruvi. 50 mln so'mdan yuqori pledge'lar uchun qo'shimcha verifikatsiya.
4. **Dispute resolution:** Backer reward olmasa nima qilish? Hozirgi hujjatlarda aniq jarayon yo'q.
5. **Tax ID (STIR) yig'ish:** Creator'dan soliq to'lash uchun STIR talab qilinishi kerak.
6. **Bank hisobi verifikatsiyasi:** Creator payout uchun bank rekvizitlari — kichik transfer orqali test qilinishi kerak.
7. **Multiple currency:** Faqat UZS ko'rsatilgan. Kelajakda RUB/USD inflation hedge uchun kerak bo'lishi mumkin.

### 17.3. Texnik bo'yicha kamchiliklar

1. **Supabase limitlar:**
   - Free plan production uchun yetarli emas — **Pro plan ($25/oy)** dan boshlash kerak
   - Edge Functions timeout 150s — uzoq operatsiyalar uchun background job (pg_cron + queue table) ishlatilsin
   - Storage bandwidth narxi — CDN (Cloudflare) orqali optimizatsiya

2. **Webhook ishonchliligi:**
   - Supabase Edge Function cold start bo'lishi mumkin — Payme/Click retry logikasini hisobga olish
   - **Idempotency majburiy** — har bir webhook'ni takroriy ishlashdan himoya qilish
   - Queue (outbox pattern) qo'shilishi tavsiya etiladi

3. **PostgreSQL cron aniqligi:**
   - `pg_cron` faqat daqiqada bir ishlaydi (eng tez 1 daqiqa)
   - Deadline hisob-kitobida `ends_at < now()` tekshiruvi, 1 daqiqalik oyna
   - Concurrent run'dan himoyalash uchun `SELECT ... FOR UPDATE SKIP LOCKED`

4. **Frontend:**
   - Hozirgi `src/stores/counter.ts` — placeholder. Kerakli store'lar: `auth`, `projects`, `pledges`, `notifications`, `ui`
   - `axios` yoki `@supabase/supabase-js` faqat — `ofetch` yoki native `fetch` yetarli
   - **Form validatsiya kutubxonasi kerak:** `vee-validate` + `zod`
   - **Image optimization:** `vite-plugin-image` yoki Supabase Image Transformation

5. **SEO va metadata:**
   - Vue SPA bo'lgani uchun — **prerendering** yoki **SSR (Nuxt)** ga o'tish haqida o'ylash kerak
   - Eng kamida: `vite-plugin-prerender` orqali static sahifalarni prerender qilish
   - Loyiha sahifalari SSR bo'lmasa — Telegram preview ishlamaydi (Open Graph)

6. **Monitoring:**
   - Sentry frontend + Edge Functions'da
   - Supabase Postgres logs — slow query tracking
   - Custom metrics: pledge rate, success rate, refund rate

7. **Rate limiting:**
   - Supabase Edge Functions built-in rate limit kuchli emas
   - **Cloudflare Rate Limiting Rules** ishlatilsin
   - OTP endpoint uchun alohida aggressive limit

8. **File uploads:**
   - Direct client → Supabase Storage (signed URL)
   - Virus scan (ClamAV yoki ko'chirma qilingan xizmat) — fraud himoyasi uchun
   - Image MIME va magic byte tekshiruvi

9. **Test muhiti:**
   - Supabase'da alohida `staging` project
   - Payme/Click sandbox credentials
   - Seed script (`supabase/seed.sql`) bilan test ma'lumotlar

10. **Localization:**
    - i18n fayllar bitta `i18n.ts` (1485 qator) — katta bo'lib ketadi. `locales/uz.json`, `locales/ru.json` ga bo'lish tavsiya etiladi
    - Pluralization (1 ta / 2 ta / 5 ta) to'g'ri sozlanishi kerak
    - Sana formatlash (date-fns locale)

### 17.4. UX bo'yicha kamchiliklar

1. **Onboarding yo'q** — yangi foydalanuvchi birinchi marta kelganda tushuntirish
2. **Loyiha draft'larini avtomatik saqlash** (har 30 soniya) — hujjatlarda yo'q
3. **Pledge confirmation email** uchun batafsil receipt
4. **"Loyihani eslat"** (reminder) funksiyasi — foydalanuvchi hali to'lamagan bo'lsa
5. **Social proof:** "X kishi qo'llab-quvvatladi", "X soat oldin"
6. **Progress transparency:** backer'ga loyiha egasi reward'ni qachon jo'natishini ko'rsatish
7. **Mobile nav** — hozirgi header mobile'da tekshirilishi kerak

### 17.5. Xavfsizlik bo'yicha kritik eslatmalar

1. **Supabase anon key** publicdir, lekin **service_role key** hech qachon frontend'da bo'lmasligi kerak — faqat Edge Functions
2. **RLS barcha jadvallarda yoqilgan bo'lishi shart** (default'da o'chirilgan)
3. Webhook endpoint'lar `SUPABASE_JWT` tekshirmaydi — alohida imzo tekshiruvi
4. Foydalanuvchi kiritgan HTML (loyiha hikoyasi) **sanitize** qilinishi shart — DOMPurify
5. Email confirmation bilan **account takeover** himoyasi
6. **Logs'da PII yo'q** (telefon, email to'liq emas — maskalangan)

### 17.6. Prioritetli harakatlar (darhol qilish kerak)

| Prioritet | Harakat |
|---|---|
| P0 | `docs/tech-stack.md` va `docs/architecture.md`'ni Supabase'ga moslab yangilash |
| P0 | DB sxema Supabase migratsiyalarida amalga oshirilsin (`supabase/migrations/`) |
| P0 | RLS policy'lar yozilsin va test qilinsin |
| P0 | Payme va Click sandbox hisoblari ochilsin |
| P1 | Pinia store'lar (`auth`, `projects`, `pledges`) yaratilsin |
| P1 | Supabase client wrapper (`src/lib/supabase.ts`) |
| P1 | Zod schema'lar barcha form uchun |
| P1 | KYC jarayonini yuridik maslahatchi bilan muhokama qilish |
| P2 | SSR/Prerendering qarori (Nuxt'ga migratsiya?) |
| P2 | Sentry va Plausible ulash |

---

## Xotima

Ushbu TZ **MVP v1.0** uchun to'liq texnik va biznes talablarni qamrab oladi. Hujjat **jonli hujjat** (living document) — loyiha davomida kerakli o'zgartirishlar kiritilishi mumkin, lekin har bir o'zgartirish versiyalangan va sabablangan bo'lishi shart.

**Keyingi qadamlar:**
1. Ushbu TZ'ni jamoa bilan muhokama qilish va tasdiqlash
2. §17.6 dagi P0 vazifalardan boshlash
3. Supabase staging muhitini tayyorlash
4. Birinchi sprint rejasi (2 hafta)

**Hujjat mualliflari:** Funduz core team
**Tasdiqlanishi kerak:** CTO, Product Owner, Business Owner
**Keyingi review:** Har oyda

---

> Savollar yoki takliflar bo'lsa: `contact@funduz.uz`

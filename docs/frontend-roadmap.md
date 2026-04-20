# Funduz Frontend Roadmap (Mock Data bilan)

> Backend hozircha yo'q. Barcha ma'lumotlar mock data sifatida saqlanadi va keyinchalik real API ga almashtirish oson bo'lishi uchun service qatlami orqali chaqiriladi.

## Bosqich 0 — Tozalash va poydevor (0.5 kun)

**Maqsad:** Loyiha strukturasini tartibga solish.

- [x] `src/stores/counter.ts` faylini o'chirish (default Vite qoldig'i).
- [x] Ishlatilmagan importlarni tozalash (`ExploreView.vue` da `useRouter`, `t` va h.k.).
- [x] `index.html` ni yangilash:
  - `<html lang="uz">`
  - `<title>Funduz — Crowdfunding platformasi</title>`
  - `<meta name="description">`, `og:title`, `og:image`, `twitter:card`
- [x] `public/robots.txt` va `public/sitemap.xml` qo'shish.
- [x] `README.md` ni loyiha haqida ma'lumot bilan yangilash.
- [x] `package.json`: `playwright` ni `devDependencies` ga ko'chirish, versiyani `0.1.0` qilish.

## Bosqich 1 — Ma'lumot modeli va mock qatlami (1-2 kun)

**Maqsad:** UI ni matn (i18n) dan ma'lumot (data) dan ajratish.

- [x] `src/types/` papkasi yaratish: `Project.ts`, `Article.ts`, `Story.ts`, `User.ts`, `Category.ts`, `Reward.ts`, `Donation.ts`.
- [x] `src/mocks/` papkasi:
  - `projects.mock.ts` — 15-20 ta loyiha (id, categoryKey, authorId, images, rewards, progress, donors, createdAt, endsAt).
  - `articles.mock.ts` — slug, category, author, content (UZ/RU).
  - `stories.mock.ts` — muvaffaqiyat hikoyalari.
  - `users.mock.ts` — demo foydalanuvchilar.
  - `categories.mock.ts` — `{ key: 'tech', labels: { uz, ru } }`.
- [x] `src/services/` papkasi — kelajakda API ga almashtirish oson:
  - `projectService.ts` (`getAll`, `getById`, `search`, `filterByCategory`, `sort`)
  - `articleService.ts`
  - `storyService.ts`
  - `authService.ts` (mock login/register, `localStorage` orqali)
  - `donationService.ts` (mock payment)
- [ ] i18n dan `projects_list`, `articles_list`, `stories_list` kalitlarini olib tashlash — faqat UI matnlari qolsin.

## Bosqich 2 — Pinia store'lari (1 kun)

- [ ] `stores/auth.ts` — `user`, `isLoggedIn`, `login()`, `register()`, `logout()`. `localStorage` ga saqlash.
- [ ] `stores/projects.ts` — ro'yxat, filter, sort, pagination.
- [ ] `stores/favorites.ts` — yurakcha bosilgan loyihalar (localStorage).
- [ ] `stores/locale.ts` — tanlangan tilni `localStorage` ga saqlash, ilova yuklanganda qayta tiklash.
- [ ] `stores/cart.ts` (yoki `donation.ts`) — tanlangan reward va donat miqdori.

## Bosqich 3 — Router va guard'lar (0.5 kun)

- [ ] Barcha dinamik linklarni to'g'rilash: `/project/1` o'rniga `\`/project/${project.id}\`` ishlatish.
- [ ] `FeaturedProjects.vue`, `ExploreView.vue`, `SearchView.vue`, `TrendsView.vue`, `CommunityView.vue`, `SuccessStoriesView.vue` — `<a href>` o'rniga `<router-link>`.
- [ ] `router.beforeEach` guard: `meta: { requiresAuth: true }` sahifalarini himoya qilish.
- [ ] Yangi marshrutlar:
  - `/profile` — foydalanuvchi profili
  - `/dashboard` — mualliflar uchun
  - `/my-projects` — foydalanuvchi loyihalari
  - `/favorites` — sevimlilar
  - `/settings` — sozlamalar
  - `/forgot-password`, `/reset-password`
  - `/register` (alohida sahifa sifatida)
  - `/donate/:projectId` — to'lov sahifasi
  - `/notifications`
  - `/help` — yordam markazi

## Bosqich 4 — Autentifikatsiya (1-2 kun)

- [ ] `LoginView.vue` da forma validatsiyasi (`vee-validate` yoki oddiy Vue).
- [ ] Mock login: `authService.login(email, password)` → `{ token, user }` qaytaradi, `localStorage` ga saqlaydi.
- [ ] Register formasi to'liq ishlashi.
- [ ] `ForgotPasswordView.vue` yaratish.
- [ ] `AppHeader.vue` — login bo'lgan foydalanuvchi uchun avatar + dropdown (profil, chiqish).
- [ ] Logout funksiyasi.

## Bosqich 5 — Loyiha sahifalari (2-3 kun)

- [ ] `ProjectView.vue` da `useRoute().params.id` orqali mock datadan loyiha olish.
- [ ] Agar topilmasa → 404 ga yo'naltirish.
- [ ] Qo'llab-quvvatlash tugmasi → `/donate/:projectId`.
- [ ] Yurakcha tugma → `favorites` store ga qo'shish.
- [ ] Tablar (Ma'lumot, Yangiliklar, Izohlar) real komponentlarga ajratish.
- [ ] Izohlar bo'limi (mock, localStorage).
- [ ] Mukofotlar (rewards) mockdan kelishi.

## Bosqich 6 — To'lov/Donat jarayoni (1-2 kun)

- [ ] `DonateView.vue` yaratish:
  - Reward tanlash (yoki summa kiritish)
  - Shaxsiy ma'lumotlar formasi
  - To'lov usulini tanlash (Payme/Click/Uzcard — UI mock)
  - Tasdiqlash qadami
  - Muvaffaqiyat sahifasi (`/donate/success`)
- [ ] Donat yakunlangandan keyin loyiha progress bar'i yangilanadi (mock).

## Bosqich 7 — Loyiha yaratish wizardi (2 kun)

- [ ] `CreateProjectView.vue` — Step 1, 2, 3 to'liq.
  - Step 1: Asosiy ma'lumot (nom, kategoriya, davomiylik, maqsad).
  - Step 2: Media (rasm yuklash — preview, video URL).
  - Step 3: Mukofotlar (dinamik qo'shish/o'chirish).
- [ ] "Oldingi" / "Keyingi" tugmalari ishlashi.
- [ ] Har bir qadam validatsiyasi.
- [ ] Saqlash — `projects` store ga qo'shish (mock).
- [ ] Preview sahifasi.

## Bosqich 8 — Qidiruv va filtr (1 kun)

- [ ] `SearchView.vue` — mock datani haqiqatan qidirish (title, description, author bo'yicha).
- [ ] Kategoriyalar filtri til o'zgarganda buzilmasligi uchun `categoryKey` bilan solishtirish.
- [ ] Bo'sh natija uchun alohida UI.
- [ ] URL query params bilan sinxron (`?q=...&cat=tech&sort=newest`).
- [ ] "Load more" pagination ishlashi (mock).

## Bosqich 9 — Foydalanuvchi sahifalari (1-2 kun)

- [ ] `ProfileView.vue` — avatar, ismi, bio, statistika.
- [ ] `DashboardView.vue` — foydalanuvchi loyihalari, donatlari.
- [ ] `MyProjectsView.vue` — yaratilgan loyihalar (tahrirlash, o'chirish).
- [ ] `FavoritesView.vue` — sevimli loyihalar.
- [ ] `SettingsView.vue` — til, bildirishnomalar, parol o'zgartirish.
- [ ] `NotificationsView.vue` — mock xabarnomalar.

## Bosqich 10 — Qo'shimcha sahifalar (0.5 kun)

- [ ] `HelpView.vue` — yordam markazi.
- [ ] `ForgotPasswordView.vue`, `ResetPasswordView.vue`.
- [ ] `ArticleDetailView.vue` — slug orqali mockdan maqola olish.
- [ ] `StoryView.vue` — ID orqali mockdan hikoya olish.

## Bosqich 11 — Forma va feedback (0.5 kun)

- [ ] `ContactView.vue` — submit bo'lganda `v-if="submitted"` success bannerini ko'rsatish.
- [ ] Barcha formalar uchun `Toast`/`Notification` komponenti (`src/components/ui/Toast.vue`).
- [ ] Global `Loader`, `Modal`, `ConfirmDialog` komponentlari.

## Bosqich 12 — Accessibility va UX (1 kun)

- [ ] Barcha `<input>` lar uchun `<label for>` yoki `aria-label`.
- [ ] Rasmlarda ma'noli `alt` matni.
- [ ] Tugmalar uchun fokus holatlari.
- [ ] Mobil drawer uchun focus trap va Escape bilan yopish.
- [ ] Keyboard navigation tekshirish.
- [ ] Kontrast darajasini tekshirish (WCAG AA).
- [ ] `prefers-reduced-motion` qo'llab-quvvatlash.

## Bosqich 13 — SEO va ishlash (0.5 kun)

- [ ] `@vueuse/head` yoki `unhead` orqali har sahifa uchun meta teglar.
- [ ] Rasmlarni optimallashtirish (WebP, `loading="lazy"`).
- [ ] Route-based code splitting (lazy import) — barcha view'lar uchun.
- [ ] Lighthouse auditi (target: 90+).

## Bosqich 14 — Uchinchi til va i18n qayta struktura (0.5 kun)

- [ ] `src/i18n.ts` ni bo'lish:
  - `src/locales/uz/common.ts`, `uz/nav.ts`, `uz/views.ts` ...
  - `src/locales/ru/...`
  - `src/locales/en/...` (ingliz tili)
- [ ] `AppHeader` ga uchinchi til tugmasi.

## Bosqich 15 — Testlar va CI (1 kun)

- [ ] Asosiy komponentlar uchun Vitest unit testlari (`AppHeader`, `AppFooter`, `projectService`).
- [ ] Playwright E2E stsenariylari:
  - Bosh sahifa ochilishi
  - Qidiruv ishlashi
  - Login → Dashboard
  - Loyihaga donat qilish
- [ ] GitHub Actions CI.

## Bosqich 16 — Tayyorlash (0.5 kun)

- [ ] `vite.config.ts` — build optimizatsiyasi, chunk splitting.
- [ ] Xato chegarasi (`ErrorBoundary` — Vue `onErrorCaptured`).
- [ ] `404` va `500` sahifalari.
- [ ] Production build tekshiruvi.
- [ ] Vercel/Netlify deploy.

---

## Taqdimot tartibi (qisqa)

1. Bosqich 0-1 — poydevor va mock ma'lumot
2. Bosqich 2-4 — store, router, auth
3. Bosqich 5-7 — asosiy biznes logikasi (loyiha, donat, yaratish)
4. Bosqich 8-10 — qolgan sahifalar
5. Bosqich 11-13 — sifat (UX, SEO, a11y)
6. Bosqich 14-16 — til, testlar, deploy

**Taxminiy umumiy vaqt:** 15-20 ish kuni (bitta dasturchi uchun).

## Backendga o'tish strategiyasi

Barcha `src/services/*.ts` fayllari bir xil interfeysga ega. Backend tayyor bo'lganda:

```ts
// oldin
export const getProjects = async () => mockProjects;
// keyin
export const getProjects = async () => (await fetch('/api/projects')).json();
```

Store'lar va view'lar o'zgarmaydi. Shuning uchun **service qatlami majburiy**.

# Дорожная карта фронтенда Funduz (на mock-данных)

> Бэкенда пока нет. Все данные хранятся как mock-данные и запрашиваются через сервисный слой, чтобы позже легко заменить их на реальный API.

## Этап 0 — Очистка и фундамент (0.5 дня)

**Цель:** привести структуру проекта в порядок.

- [x] Удалить `src/stores/counter.ts` (остаток шаблона Vite).
- [x] Убрать неиспользуемые импорты (`useRouter`, `t` в `ExploreView.vue` и др.).
- [x] Обновить `index.html`:
  - `<html lang="ru">` (или динамически)
  - `<title>Funduz — краудфандинговая платформа</title>`
  - `<meta name="description">`, `og:title`, `og:image`, `twitter:card`
- [x] Добавить `public/robots.txt` и `public/sitemap.xml`.
- [x] Обновить `README.md` реальной информацией о проекте.
- [x] В `package.json`: перенести `playwright` в `devDependencies`, поставить версию `0.1.0`.

## Этап 1 — Модель данных и mock-слой (1–2 дня)

**Цель:** отделить UI-текст (i18n) от данных.

- [x] Создать папку `src/types/`: `Project.ts`, `Article.ts`, `Story.ts`, `User.ts`, `Category.ts`, `Reward.ts`, `Donation.ts`.
- [x] Папка `src/mocks/`:
  - `projects.mock.ts` — 15–20 проектов (id, categoryKey, authorId, images, rewards, progress, donors, createdAt, endsAt).
  - `articles.mock.ts` — slug, category, author, content (UZ/RU).
  - `stories.mock.ts` — истории успеха.
  - `users.mock.ts` — демо-пользователи.
  - `categories.mock.ts` — `{ key: 'tech', labels: { uz, ru } }`.
- [x] Папка `src/services/` — чтобы позже легко заменить на API:
  - `projectService.ts` (`getAll`, `getById`, `search`, `filterByCategory`, `sort`)
  - `articleService.ts`
  - `storyService.ts`
  - `authService.ts` (mock login/register через `localStorage`)
  - `donationService.ts` (mock оплата)
- [x] Удалить из i18n ключи `projects_list`, `articles_list`, `stories_list` — оставить только UI-тексты.

## Этап 2 — Pinia store (1 день)

- [x] `stores/auth.ts` — `user`, `isLoggedIn`, `login()`, `register()`, `logout()`. Хранение в `localStorage`.
- [x] `stores/projects.ts` — список, фильтры, сортировка, пагинация.
- [x] `stores/favorites.ts` — избранные проекты (localStorage).
- [x] `stores/locale.ts` — сохранение выбранного языка в `localStorage` и восстановление при загрузке.
- [x] `stores/donation.ts` — выбранная награда и сумма пожертвования.

## Этап 3 — Router и guards (0.5 дня)

- [x] Исправить все динамические ссылки: вместо `/project/1` использовать `\`/project/${project.id}\``.
- [x] В `FeaturedProjects.vue`, `ExploreView.vue`, `SearchView.vue`, `TrendsView.vue`, `CommunityView.vue`, `SuccessStoriesView.vue` — заменить `<a href>` на `<router-link>`.
- [x] `router.beforeEach` guard для `meta: { requiresAuth: true }`.
- [x] Новые маршруты:
  - `/profile` — профиль пользователя
  - `/dashboard` — для авторов
  - `/my-projects` — проекты пользователя
  - `/favorites` — избранное
  - `/settings` — настройки
  - `/forgot-password`, `/reset-password`
  - `/register` (отдельная страница)
  - `/donate/:projectId` — страница оплаты
  - `/notifications`
  - `/help` — центр помощи

## Этап 4 — Аутентификация (1–2 дня)

- [x] В `LoginView.vue` добавить валидацию формы (`vee-validate` или руками).
- [x] Mock-логин: `authService.login(email, password)` → `{ token, user }`, сохранение в `localStorage`.
- [x] Полная работа формы регистрации.
- [x] Создать `ForgotPasswordView.vue`.
- [x] В `AppHeader.vue` — для авторизованного пользователя: аватар + выпадающее меню (профиль, выход).
- [x] Функция logout.

## Этап 5 — Страницы проектов (2–3 дня)

- [x] В `ProjectView.vue` получать проект по `useRoute().params.id` из mock-данных.
- [x] Если не найден → редирект на 404.
- [x] Кнопка "Поддержать" → `/donate/:projectId`.
- [x] Сердечко → добавление в store `favorites`.
- [x] Вкладки (Описание, Новости, Комментарии) — вынести в реальные компоненты.
- [x] Блок комментариев (mock, localStorage).
- [x] Награды (rewards) из mock-данных.

## Этап 6 — Процесс оплаты/пожертвования (1–2 дня)

- [x] Создать `DonateView.vue`:
  - [x] Выбор награды (или сумма вручную)
  - [x] Форма персональных данных
  - [x] Выбор метода оплаты (Payme/Click/Uzcard — UI mock)
  - [x] Шаг подтверждения
  - [x] Страница успеха (`/donate/success`)
- [x] После пожертвования progress bar проекта обновляется (mock).

## Этап 7 — Мастер создания проекта (2 дня)

- [x] `CreateProjectView.vue` — реализовать шаги 1, 2, 3 полностью.
  - Шаг 1: основные данные (название, категория, длительность, цель).
  - Шаг 2: медиа (загрузка изображения — preview, URL видео).
  - Шаг 3: награды (динамическое добавление/удаление).
- [x] Работающие кнопки "Назад" / "Далее".
- [x] Валидация каждого шага.
- [x] Сохранение — добавление в store `projects` (mock).
- [x] Страница предпросмотра.

## Этап 8 — Поиск и фильтры (1 день)

- [x] В `SearchView.vue` реально искать по mock-данным (title, description, author).
- [x] Фильтр категорий не должен ломаться при смене языка — сравнивать по `categoryKey`.
- [x] Отдельный UI для пустого результата.
- [x] Синхронизация с URL query (`?q=...&cat=tech&sort=newest`).
- [x] Работающая пагинация "Load more" (mock).

## Этап 9 — Пользовательские страницы (1–2 дня)

- [x] `ProfileView.vue` — аватар, имя, био, статистика.
- [x] `DashboardView.vue` — проекты и пожертвования пользователя.
- [x] `MyProjectsView.vue` — созданные проекты (редактирование, удаление).
- [x] `FavoritesView.vue` — избранные проекты.
- [x] `SettingsView.vue` — язык, уведомления, смена пароля.
- [x] `NotificationsView.vue` — mock-уведомления.

## Этап 10 — Дополнительные страницы (0.5 дня)

- [x] `HelpView.vue` — центр помощи.
- [x] `ForgotPasswordView.vue`, `ResetPasswordView.vue`.
- [x] `ArticleDetailView.vue` — получение статьи по slug из mock.
- [x] `StoryView.vue` — получение истории по ID из mock.

## Этап 11 — Формы и обратная связь (0.5 дня)

- [x] В `ContactView.vue` при отправке показывать success-баннер `v-if="submitted"`.
- [x] Компонент `Toast`/`Notification` для всех форм (`src/components/ui/Toast.vue`).
- [x] Глобальные компоненты `Loader`, `Modal`, `ConfirmDialog`.

## Этап 12 — Доступность и UX (1 день)

- [x] У всех `<input>` — `<label for>` или `aria-label`.
- [x] Осмысленный `alt` у изображений.
- [x] Focus-состояния у кнопок.
- [x] Focus trap и закрытие по Escape для мобильного drawer.
- [x] Проверить навигацию с клавиатуры.
- [x] Проверить контраст (WCAG AA).
- [x] Поддержка `prefers-reduced-motion`.

## Этап 13 — SEO и производительность (0.5 дня)

- [x] Meta-теги для каждой страницы через `@vueuse/head` или `unhead`.
- [x] Оптимизация изображений (WebP, `loading="lazy"`).
- [x] Route-based code splitting (lazy import) для всех view.
- [x] Lighthouse-аудит (цель: 90+).

## Этап 14 — Третий язык и реструктуризация i18n (0.5 дня)

- [x] Разбить `src/i18n.ts`:
  - `src/locales/uz/common.ts`, `uz/nav.ts`, `uz/views.ts` ...
  - `src/locales/ru/...`
  - `src/locales/en/...` (английский)
- [x] Добавить переключатель третьего языка в `AppHeader`.

## Этап 15 — Тесты и CI (1 день)

- [ ] Unit-тесты Vitest для ключевых компонентов (`AppHeader`, `AppFooter`, `projectService`).
- [ ] Playwright E2E-сценарии:
  - Открытие главной
  - Работа поиска
  - Login → Dashboard
  - Пожертвование проекту
- [ ] GitHub Actions CI.

## Этап 16 — Подготовка к выпуску (0.5 дня)

- [ ] `vite.config.ts` — оптимизация сборки, chunk splitting.
- [ ] Error boundary (`onErrorCaptured` во Vue).
- [ ] Страницы `404` и `500`.
- [ ] Проверка production-сборки.
- [ ] Деплой на Vercel/Netlify.

---

## Порядок работ (кратко)

1. Этапы 0–1 — фундамент и mock-данные
2. Этапы 2–4 — store, router, auth
3. Этапы 5–7 — основная бизнес-логика (проект, пожертвование, создание)
4. Этапы 8–10 — остальные страницы
5. Этапы 11–13 — качество (UX, SEO, a11y)
6. Этапы 14–16 — язык, тесты, деплой

**Ориентировочное время:** 15–20 рабочих дней (на одного разработчика).

## Стратегия перехода на backend

Все файлы `src/services/*.ts` имеют единый интерфейс. Когда backend будет готов:

```ts
// было
export const getProjects = async () => mockProjects;
// стало
export const getProjects = async () => (await fetch('/api/projects')).json();
```

Store и view не меняются. Поэтому **сервисный слой обязателен**.

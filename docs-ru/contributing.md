# Контрибьютинг (Contributing)

> Этот документ описывает стандартный workflow для работы в репозитории Funduz.

---

## Начало

### Требования
- Node.js `^20.19.0 || >=22.12.0`
- npm или pnpm
- Git

### Установка
```bash
git clone <repo-url>
cd funduz
npm install
npm run dev
```

В браузере: http://localhost:5173

---

## Структура проекта

```
funduz/
├── docs/                # Документация (uz)
├── docs-ru/             # Документация (ru)
├── e2e/                 # Playwright e2e тесты
├── public/              # Статические файлы (favicon, ...)
├── src/
│   ├── App.vue
│   ├── main.ts
│   ├── i18n.ts
│   ├── router/          # vue-router
│   ├── stores/          # Pinia
│   ├── views/           # Страницы
│   ├── components/      # Компоненты
│   └── assets/
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Git workflow

### Стратегия веток
- `main` — production-ready, всегда готов к деплою
- `feature/<name>` — новая функция
- `fix/<name>` — bug fix
- `docs/<name>` — изменения документации
- `refactor/<name>` — рефакторинг

### Commit message
Convention: **Conventional Commits**

```
<type>: <краткое описание>

[опциональное body]

[опциональный footer]
```

**Типы:**
- `feat:` новая функция
- `fix:` bug fix
- `docs:` документация
- `style:` форматирование, semicolon
- `refactor:` рефакторинг кода (без изменения функциональности)
- `test:` добавление/изменение тестов
- `chore:` build, deps, config

**Примеры:**
```
feat: implement project creation wizard
fix: correct refund flow for failed projects
docs: add payment integration guide
refactor: extract payment store from view
```

### Pull request workflow
1. Создать ветку от `main`
2. Внести изменения
3. Написать тесты (если нужно)
4. Запустить lint и type-check
5. Закоммитить (атомарные коммиты)
6. Push и создать PR
7. Дождаться code review (1+ approve)
8. Squash merge

---

## Code style

### Автоматически
```bash
npm run lint        # oxlint + eslint
npm run format      # oxfmt
npm run type-check  # vue-tsc
```

### Правила
- TypeScript strict mode включён
- Не используйте `any` (только при необходимости, с обоснованием)
- Vue 3 Composition API (избегайте Options API)
- Синтаксис `<script setup>`
- Компоненты PascalCase (`AppHeader.vue`)
- Composables `useX` (`useAuth.ts`)
- Pinia stores `useXStore` (`useAuthStore`)

### Tailwind
- Utility-first
- `@apply` только для повторяющихся паттернов
- Mobile-first responsive: `class="text-sm md:text-base lg:text-lg"`
- Дизайн-токены в `tailwind.config`

---

## Testing

### Unit тесты (Vitest)
```bash
npm run test:unit
```
- Для компонентов: `@vue/test-utils`
- Для composables: отдельные файлы
- Coverage: пока не обязательно, цель к запуску MVP >= 50%

### E2E тесты (Playwright)
```bash
npm run test:e2e
```
- Основные flow: signup, project create, pledge, refund
- В CI на каждом PR

---

## Секреты (secrets)

- Никогда не коммитьте `.env`
- Поддерживайте актуальный `.env.example`
- Production secrets — Doppler / 1Password Secrets
- API ключи не должны быть hardcoded

---

## Добавление новой документации

1. Добавьте в соответствующую папку `docs/` (uz) и `docs-ru/` (ru)
2. Добавьте ссылку в `docs/README.md` и `docs-ru/README.md`
3. Пишите в Markdown
4. Откройте PR: `docs: add ...`

---

## Issue и task tracking

> TBD — GitHub Issues или Linear/Notion

Сейчас:
- GitHub Issues — баги и feature requests
- Plan папка (`/Users/eldor/.claude/plans/`) — для работы с Claude

---

## Помощь

- Основной разработчик: **Eldor Turg'unov**
- Telegram: TBD
- Email: TBD

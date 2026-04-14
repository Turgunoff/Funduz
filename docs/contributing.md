# Hissa Qo'shish (Contributing)

> Bu hujjat Funduz repository'sida ishlash uchun standart workflow'ni belgilaydi.

---

## Boshlash

### Talablar
- Node.js `^20.19.0 || >=22.12.0`
- npm yoki pnpm
- Git

### O'rnatish
```bash
git clone <repo-url>
cd funduz
npm install
npm run dev
```

Brauzerda: http://localhost:5173

---

## Loyiha strukturasi

```
funduz/
├── docs/                # Bu hujjatlar
├── e2e/                 # Playwright e2e testlar
├── public/              # Statik fayllar (favicon, ...)
├── src/
│   ├── App.vue
│   ├── main.ts
│   ├── i18n.ts
│   ├── router/          # vue-router
│   ├── stores/          # Pinia
│   ├── views/           # Sahifalar
│   ├── components/      # Komponentlar
│   └── assets/
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Git workflow

### Branch strategy
- `main` — production-ready, har doim deploy qilinadigan
- `feature/<name>` — yangi funksiya
- `fix/<name>` — bug fix
- `docs/<name>` — hujjat o'zgarishlari
- `refactor/<name>` — refactor

### Commit message
Convention: **Conventional Commits**

```
<type>: <qisqa tavsif>

[optional body]

[optional footer]
```

**Type'lar:**
- `feat:` yangi funksiya
- `fix:` bug fix
- `docs:` hujjat
- `style:` formatlash, semicolon
- `refactor:` kod refactor (funksionallik o'zgarmasdan)
- `test:` test qo'shish/o'zgartirish
- `chore:` build, deps, config

**Misollar:**
```
feat: implement project creation wizard
fix: correct refund flow for failed projects
docs: add payment integration guide
refactor: extract payment store from view
```

### Pull request workflow
1. `main` dan branch yaratish
2. O'zgarishlarni qiling
3. Testlar yozing (kerakli bo'lsa)
4. Lint va type-check ishga tushiring
5. Commit qiling (atomik commitlar)
6. Push va PR yarating
7. Code review kuting (1+ approve)
8. Squash merge

---

## Code style

### Avtomatik
```bash
npm run lint        # oxlint + eslint
npm run format      # oxfmt
npm run type-check  # vue-tsc
```

### Qoidalar
- TypeScript strict mode yoqilgan
- `any` ishlatmang (zaruratdan tashqari, sabab bilan)
- Vue 3 Composition API (Options API'dan qoching)
- `<script setup>` sintaksisi
- Komponentlar PascalCase (`AppHeader.vue`)
- Composables `useX` (`useAuth.ts`)
- Pinia stores `useXStore` (`useAuthStore`)

### Tailwind
- Utility-first
- `@apply` faqat takrorlanadigan paternlar uchun
- Mobile-first responsive: `class="text-sm md:text-base lg:text-lg"`
- Dizayn tokenlar `tailwind.config` da

---

## Testing

### Unit testlar (Vitest)
```bash
npm run test:unit
```
- Komponentlar uchun: `@vue/test-utils`
- Composables uchun: alohida fayllar
- Coverage: hozircha shart emas, MVP launch'ga yaqin >= 50% maqsad

### E2E testlar (Playwright)
```bash
npm run test:e2e
```
- Asosiy flowlar: signup, project create, pledge, refund
- CI'da har PR'da run

---

## Sirlar (secrets)

- Hech qachon `.env` ni commit qilmang
- `.env.example` ni yangilab boring
- Production secrets — Doppler / 1Password Secrets
- API keylar kodida hardcode bo'lmasligi kerak

---

## Yangi hujjat qo'shish

1. `docs/` ichida tegishli papkaga qo'shing
2. `docs/README.md` ga link qo'shing
3. Markdown formatda yozing
4. PR oching: `docs: add ...`

---

## Issue va task tracking

> TBD — GitHub Issues yoki Linear/Notion

Hozircha:
- GitHub Issues — bug va feature requests
- Plan papka (`/Users/eldor/.claude/plans/`) — Claude bilan ishlashda

---

## Yordam

- Asosiy ishlab chiquvchi: **Eldor Turg'unov**
- Telegram: TBD
- Email: TBD

PROJECT_SETUP_PLAN.md# Project Setup Plan

## Folder Structure

```
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx
│       ├── page.tsx                       # Home
│       ├── about/page.tsx                 # من نحن
│       ├── services/page.tsx              # خدمات
│       ├── portfolio/
│       │   ├── page.tsx                   # أعمالنا (listing)
│       │   └── [slug]/page.tsx            # project detail (e.g. ترس)
│       ├── clients/page.tsx               # عملائنا
│       ├── solutions/page.tsx             # حلول
│       ├── careers/page.tsx               # وظائفنا
│       ├── contact/page.tsx               # اتصل بنا
│       └── faq/page.tsx                   # الأسئلة الشائعة
├── components/
│   ├── ui/                                # shadcn generated
│   └── shared/                            # reusable cross-page components
├── features/
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── portfolio/
│   ├── clients/
│   ├── solutions/
│   ├── careers/
│   ├── contact/
│   └── faq/
│       (each: components/, hooks/, api/, schema.ts, types.ts)
├── providers/
│   ├── query-provider.tsx
│   └── theme-provider.tsx
├── lib/
│   ├── utils.ts
│   ├── query-client.ts
│   └── fetcher.ts
├── hooks/
├── i18n/
│   ├── routing.ts
│   ├── request.ts
│   └── messages/{en.json, ar.json}
├── config/
├── types/
└── middleware.ts
```

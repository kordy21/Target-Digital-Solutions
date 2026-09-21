# Design Tokens (Figma Extraction)

## Colors
| Token | Value | Tailwind Class | Notes |
|-------|-------|----------------|-------|
| Background Light / Default | `#FFFFFF` (Light) / `#020617` (Dark) | `bg-background` | Base background color. |
| Background Secondary | `#F8F9FE` (Light) / `#0f172a` (Dark) | `bg-secondary` | Alternating section backgrounds. |
| Background Accent / Header Pills | `#E8E8E8` (Light) / `rgba(255,255,255,0.05)` (Dark) | `bg-accent` | Used for the header menu wrappers and language toggles. |
| Text Light | `#FFFFFF` | `text-primary-foreground` | Used on primary buttons. |
| Text Default / Dark | `#111827` (Light) / `#F8FAFC` (Dark) | `text-foreground` | Main headings and body text. |
| Text Muted | `#4A4A4A` (Light) / `#D1D5DB` (Dark) | `text-accent-foreground` | Used for nav links and secondary text. |
| Primary / Brand Accent | `#3B5BDB` (Light) / `#60A5FA` (Dark) | `text-primary`, `bg-primary` | Main brand color for subtitles, buttons, and eyebrows. |
| Brand Dark Hero | `#07132F` | `bg-brand-dark` | Used strictly for the Hero section background. |
| Footer Background | `#1A1A1A` | `bg-footer-bg` | Used strictly for the site footer. |

## Typography
| Token | Value | Tailwind Class | Notes |
|-------|-------|----------------|-------|
| Font Family (Primary) | `Cairo` | `font-cairo` | Used for almost all headings and body text. |
| Font Family (Secondary) | `Almarai` | `font-almarai` | Used in the theme toggle and specific UI elements. |
| Font Size (Hero) | `70px` | `text-[70px]` or `text-7xl` | Used for the main hero heading (line-height 105px, font-weight 800). |
| Font Size (Subtitle) | `26px` | `text-[26px]` or `text-2xl` | Used for the hero subtitle (line-height 49px). |
| Font Size (Menu/Button) | `20px` | `text-[20px]` or `text-xl` | Used for navigation links and buttons (line-height 37px). |
| Font Size (Base) | `16px` | `text-base` | Used for small text (e.g. Dark/Light toggle). |
| Font Size (Small) | `14px` | `text-sm` | Used for the language toggle. |

## Spacing & Radii
| Token | Value | Tailwind Class | Notes |
|-------|-------|----------------|-------|
| Radius (Large) | `30px`, `33px` | `rounded-[30px]`, `rounded-full` | Buttons and pill-shaped elements. |
| Radius (Medium) | `20px` | `rounded-[20px]`, `rounded-xl` | Used for the main navigation bar wrapper. |
| Padding/Gap (Header) | `48px`, `16px` | `gap-12`, `gap-4` | Navigation layout spacing. |

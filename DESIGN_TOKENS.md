# Design Tokens (Figma Extraction)

## Colors
| Token | Value | Tailwind Class | Notes |
|-------|-------|----------------|-------|
| Background Dark | `#000000` | `bg-background` (dark mode) / `bg-black` | Pure black is used for dark buttons and dark backgrounds. |
| Background Light | `#FFFFFF` | `bg-background` (light mode) / `bg-white` | White is used for light theme base. |
| Gray/Muted | `#E9E9E9` | `bg-muted` | Used for the header menu wrapper background. |
| Border Gray | `#474747` | `border-border` / `border-gray-700` | Used for borders in the theme toggle. |
| Text Light | `#FFFFFF` | `text-foreground` (dark mode) / `text-white` | |
| Text Dark | `#000000` | `text-foreground` (light mode) / `text-black` | |
| Primary / Accent Glow | `rgba(0, 0, 255, 1)` | `shadow-primary` | Used as a glow/shadow on primary call-to-action buttons. |

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

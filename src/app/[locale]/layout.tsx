import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/providers/theme-provider';
import { QueryProvider } from '@/providers/query-provider';
import "../globals.css";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { SmoothScroller } from "@/components/shared/smooth-scroller";
import { MouseFollower } from "@/components/shared/mouse-follower";
import { FloatingThemeToggle } from "@/components/shared/floating-theme-toggle";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="antialiased bg-secondary" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <QueryProvider>
              <SmoothScroller>
                <MouseFollower />
                <FloatingThemeToggle />
                <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
                  <SiteHeader />
                  <main className="flex-1 relative flex flex-col space-y-24 w-full bg-secondary">
                    {children}
                  </main>
                  <SiteFooter />
                </div>
              </SmoothScroller>
            </QueryProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import Logo from '@/assets/logo.svg';
import { FadeIn } from '@/components/shared/animations';

export default function NotFoundPage() {
  const t = useTranslations('notFound');

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] pt-32 pb-16 px-6 text-center">
      <FadeIn direction="up" delay={0.2} className="flex flex-col items-center">
      {/* Animated Logo Container */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full animate-pulse" />
        <Image 
          src={Logo} 
          alt="Target Digital Solutions" 
          width={120} 
          height={120} 
          className="relative z-10 drop-shadow-2xl dark:brightness-0 dark:invert transition-transform hover:scale-110 duration-500"
        />
      </div>

      <h1 className="text-8xl md:text-9xl font-cairo font-extrabold text-foreground tracking-tighter mb-4 opacity-10">
        {t('title')}
      </h1>
      
      <h2 className="text-2xl md:text-4xl font-cairo font-bold text-foreground mb-4">
        {t('subtitle')}
      </h2>
      
      <p className="text-muted-foreground font-cairo text-sm md:text-base max-w-lg mb-10 leading-relaxed">
        {t('description')}
      </p>

      <Link 
        href="/"
        className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-cairo font-bold py-3 px-8 rounded-full transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
      >
        {t('backHome')}
      </Link>
      </FadeIn>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.svg';
import './globals.css'; // Make sure to import global css

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <div className="flex flex-col items-center justify-center min-h-screen pt-20 px-6 text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full animate-pulse" />
            <Image 
              src={Logo} 
              alt="Target Digital Solutions" 
              width={120} 
              height={120} 
              className="relative z-10 drop-shadow-2xl transition-transform hover:scale-110 duration-500"
            />
          </div>

          <h1 className="text-8xl md:text-9xl font-cairo font-extrabold text-foreground tracking-tighter mb-4 opacity-10">
            404
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-cairo font-bold text-foreground mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="text-muted-foreground font-cairo text-sm md:text-base max-w-lg mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link 
            href="/en"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-cairo font-bold py-3 px-8 rounded-full transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
          >
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}

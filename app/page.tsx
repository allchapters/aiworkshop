'use client';

import HeroSection from '@/components/HeroSection';
import WorkshopDetails from '@/components/WorkshopDetails';
import PDFDownload from '@/components/PDFDownload';
import HumainBrand from '@/components/HumainBrand';

export default function Page() {
  return (
    <main className="min-h-screen bg-transparent relative overflow-x-hidden selection:bg-cyber-gold selection:text-black">
      <div className="absolute inset-0 bg-transparent pointer-events-none z-50 mix-blend-overlay opacity-50 bg-[url('/noise.png')] opacity-10" />

      <HeroSection />

      <div className="relative z-10">
        <WorkshopDetails />
      </div>

      <PDFDownload />

      <footer className="py-8 text-center border-t border-white/10 mt-12 bg-black/50 backdrop-blur-md">
        <p className="font-mono text-sm text-muted-foreground">
          © 2026 AI WORKSHOP // CISCO X <HumainBrand className="align-baseline" /> // AUTHORIZED PERSONNEL ONLY
        </p>
      </footer>
    </main >
  );
}

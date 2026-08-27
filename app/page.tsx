import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import AiWorkflow from '@/components/AiWorkflow';
import Resume from '@/components/Resume';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MotionProvider from '@/components/MotionProvider';

export default function Home() {
  return (
    <MotionProvider>
      <main id="main-content" className="relative">
        <a
          href="#home"
          className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-[var(--primary)] px-4 py-2 font-medium text-[var(--background)] transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Navigation />
        <Hero />
        <Portfolio />
        <Resume />
        <Skills />
        <AiWorkflow />
        <Services />
        <Contact />
        <Footer />
      </main>
    </MotionProvider>
  );
}

"use client";

import PointerEffect from './components/ui/PointerEffect';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="bg-slate-950 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <PointerEffect />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <div className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            
            {/* Footer */}
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                <p>
                    Built with <a href="https://react.dev/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">React</a> &amp; <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">Tailwind CSS</a>,
                    and animated with <a href="https://www.framer.com/motion/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">Framer Motion</a>.
                    Inspired by modern portfolio designs.
                </p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
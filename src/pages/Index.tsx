import { useState, useEffect } from 'react';
import { Hero } from '@/components/portfolio/Hero';
import { Navigation } from '@/components/portfolio/Navigation';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Contact } from '@/components/portfolio/Contact';
import { Background } from '@/components/portfolio/Background';

export type SectionType = 'hero' | 'about' | 'skills' | 'projects' | 'contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <Hero />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-background relative">
      <Background />
      
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        className={`${isLoaded ? 'animate-slide-down' : 'opacity-0'}`}
      />
      
      {/* Main Content */}
      <main className="relative z-10 h-screen flex items-center justify-center">
        <div 
          key={activeSection}
          className="w-full h-full flex items-center justify-center animate-fade-in"
        >
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Index;
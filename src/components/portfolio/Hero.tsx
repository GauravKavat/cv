import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ['Developer', 'Designer', 'Creator', 'Innovator'];
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = texts[currentTextIndex];
    
    if (displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 150);
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, currentTextIndex, texts]);

  return (
    <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-8">
      {/* Main Heading */}
      <div className="space-y-6 animate-fade-in">
        <h1 className="text-5xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Gaurav Meena
        </h1>
        
        <div className="h-16 flex items-center justify-center">
          <h2 className="text-xl md:text-4xl font-light text-foreground">
            I'm a{' '}
            <span className="inline-block min-w-[150px] md:min-w-[200px] text-left">
              <span className="bg-gradient-accent bg-clip-text text-transparent font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </h2>
        </div>
        
        <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences with modern technologies. 
          Passionate about clean code, beautiful design, and innovative solutions.
        </p>
      </div>
      
      {/* Call to Action */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" 
           style={{ animationDelay: '0.3s' }}>
        <Button 
          size="lg" 
          className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-full w-full sm:w-auto"
        >
          View My Work
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="lg"
          className="border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 text-lg px-8 py-6 rounded-full w-full sm:w-auto"
        >
          Download CV
        </Button>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-accent opacity-5 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '2s' }} />
    </div>
  );
};
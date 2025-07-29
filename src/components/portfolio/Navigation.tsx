import { SectionType } from '@/pages/Index';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
  className?: string;
}

const navItems = [
  { id: 'hero' as SectionType, label: 'Home' },
  { id: 'about' as SectionType, label: 'About' },
  { id: 'skills' as SectionType, label: 'Skills' },
  { id: 'projects' as SectionType, label: 'Projects' },
  { id: 'contact' as SectionType, label: 'Contact' },
];

export const Navigation = ({ activeSection, onSectionChange, className }: NavigationProps) => {
  return (
    <nav className={cn("fixed top-8 left-1/2 transform -translate-x-1/2 z-50", className)}>
      <div className="bg-glass backdrop-blur-md border border-glass-border rounded-full px-6 py-3 shadow-elegant">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                  "hover:text-primary hover:scale-105",
                  activeSection === item.id
                    ? "text-primary bg-primary/10 shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-full animate-pulse-glow" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
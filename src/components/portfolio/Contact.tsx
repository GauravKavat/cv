import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: '📧',
    label: 'Email',
    value: 'alex@example.com',
    href: 'mailto:alex@example.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: '/in/alexsmith',
    href: 'https://linkedin.com/in/alexsmith',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: '@alexsmith',
    href: 'https://github.com/alexsmith',
  },
  {
    icon: '🐦',
    label: 'Twitter',
    value: '@alexsmith',
    href: 'https://twitter.com/alexsmith',
  },
];

export const Contact = () => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
      <div className="space-y-12 animate-slide-up">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Ready to bring your ideas to life? I'm always excited to work on new projects 
          and collaborate with creative minds. Let's build something amazing together!
        </p>
        
        {/* Contact Methods */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {contactMethods.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-glass backdrop-blur-md border border-glass-border rounded-xl p-6 hover:shadow-accent hover:scale-105 transition-all duration-300 animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                {contact.label}
              </h3>
              <p className="text-xs text-muted-foreground group-hover:text-accent transition-colors duration-300">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 space-y-6">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-12 py-6 rounded-full animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            Start a Project
            <span className="ml-2">🚀</span>
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Available for freelance work • Remote & On-site
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-accent opacity-10 rounded-full blur-2xl animate-float" />
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-primary opacity-10 rounded-full blur-2xl animate-float" 
             style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};
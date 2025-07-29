const skills = [
  { name: 'React', level: 95, icon: '⚛️' },
  { name: 'TypeScript', level: 90, icon: '📘' },
  { name: 'Node.js', level: 85, icon: '🟢' },
  { name: 'Python', level: 80, icon: '🐍' },
  { name: 'AWS', level: 75, icon: '☁️' },
  { name: 'Docker', level: 85, icon: '🐳' },
  { name: 'GraphQL', level: 80, icon: '🔗' },
  { name: 'MongoDB', level: 85, icon: '🍃' },
];

export const Skills = () => {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-8">
      <div className="text-center space-y-12 animate-slide-up">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A diverse skill set built through years of experience and continuous learning
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-glass backdrop-blur-md border border-glass-border rounded-xl p-6 hover:shadow-accent transition-all duration-300 animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Skill Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {skill.name}
              </h3>
              
              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-accent h-2 rounded-full transition-all duration-1000 delay-300"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
            </div>
          ))}
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-10 left-10 text-6xl opacity-10 animate-float">💻</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>🚀</div>
      </div>
    </div>
  );
};
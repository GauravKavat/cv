export const About = () => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
      <div className="space-y-8 animate-slide-up">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-accent rounded-full opacity-20 animate-pulse-glow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-60 h-60 bg-gradient-primary rounded-full opacity-30 animate-float" />
            </div>
          </div>
          
          {/* About Text */}
          <div className="space-y-6 text-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience 
              creating digital solutions that make a difference. I specialize in 
              modern web technologies and love turning complex problems into 
              simple, beautiful designs.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source projects, or enjoying the great outdoors.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-glass backdrop-blur-md border border-glass-border rounded-lg p-4">
                <h4 className="text-accent font-semibold text-2xl">50+</h4>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-glass backdrop-blur-md border border-glass-border rounded-lg p-4">
                <h4 className="text-accent font-semibold text-2xl">5+</h4>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
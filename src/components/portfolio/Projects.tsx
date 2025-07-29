import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'bg-gradient-primary',
  },
  {
    id: 2,
    title: 'AI Task Manager',
    description: 'An intelligent task management app that uses machine learning to prioritize tasks and predict completion times.',
    tech: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    gradient: 'bg-gradient-accent',
  },
  {
    id: 3,
    title: 'Real-time Chat App',
    description: 'A modern chat application with video calls, file sharing, and end-to-end encryption built with WebRTC and Socket.io.',
    tech: ['React', 'Socket.io', 'WebRTC', 'Express'],
    gradient: 'bg-gradient-primary',
  },
];

export const Projects = () => {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-8">
      <div className="text-center space-y-12 animate-slide-up">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my recent work and creative solutions
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-glass backdrop-blur-md border border-glass-border rounded-xl overflow-hidden hover:shadow-elegant transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 ${project.gradient} opacity-20 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                    💻
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Actions */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    View Live
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                  >
                    GitHub
                  </Button>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
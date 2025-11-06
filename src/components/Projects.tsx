import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'Nakshathra Traditional Wear',
      description: 'An elegant e-commerce platform showcasing traditional ethnic wear with modern shopping experience.',
      image: project1,
      liveUrl: 'https://nakshakthra.myshopify.com/',
      githubUrl: 'https://github.com/Likhitha-Mikkili',
    },
    {
      title: 'Ala by Shirin',
      description: 'A sophisticated clothing website featuring contemporary fashion collections with seamless user experience.',
      image: project2,
      liveUrl: 'https://ala-by-shirin.vercel.app/',
      githubUrl: 'https://github.com/Likhitha-Mikkili',
    },
    {
      title: 'Likhitha Jewel Suite',
      description: 'A premium jewelry showcase website with elegant design and interactive product galleries.',
      image: project3,
      liveUrl: 'https://likhitha-jewel-suite.vercel.app/',
      githubUrl: 'https://github.com/Likhitha-Mikkili',
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          My Featured Projects
        </h2>

        <div className="max-w-5xl mx-auto relative">
          {/* Main Project Display */}
          <div className="relative overflow-hidden">
            <Card className="gradient-border glass overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden h-[400px]">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                  />
                  
                  {/* Overlay with details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="text-center space-y-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="text-3xl font-bold gradient-text">View Project</h4>
                      <p className="text-muted-foreground px-8">Hover to explore details</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold gradient-text">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {projects[currentProject].description}
                  </p>

                  <div className="flex gap-4 pt-4 relative z-10">
                    <a 
                      href={projects[currentProject].liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-hover px-6 py-3 text-sm font-medium transition-colors hover:opacity-90 cursor-pointer"
                      onClick={(e) => {
                        console.log('Live URL clicked:', projects[currentProject].liveUrl);
                      }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </a>
                    <a 
                      href={projects[currentProject].githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full glass border border-primary/50 glow-hover px-6 py-3 text-sm font-medium transition-colors hover:bg-accent cursor-pointer"
                      onClick={(e) => {
                        console.log('GitHub URL clicked:', projects[currentProject].githubUrl);
                      }}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 glass glow-hover rounded-full w-12 h-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 glass glow-hover rounded-full w-12 h-12"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-gradient-to-r from-primary to-secondary w-8'
                    : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

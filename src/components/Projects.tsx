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
      title: 'Glowify Landing Page',
      description: 'A modern, glowing landing page for a skincare brand using gradient themes and smooth animations.',
      image: project1,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'ShopEase E-Commerce Website',
      description: 'A fully responsive shopping website with cart system, filters, and modern product layout.',
      image: project2,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portify Personal Portfolio',
      description: 'A premium personal portfolio template showcasing interactive design and creative motion.',
      image: project3,
      liveUrl: '#',
      githubUrl: '#',
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
                <div className="relative overflow-hidden">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold gradient-text">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {projects[currentProject].description}
                  </p>

                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="default"
                      className="bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-hover rounded-full"
                      asChild
                    >
                      <a href={projects[currentProject].liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="glass border-primary/50 glow-hover rounded-full"
                      asChild
                    >
                      <a href={projects[currentProject].githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
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

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['Web Design', 'UI/UX', 'Responsive Layouts', 'Creative Solutions'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [skills.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fadeUp">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text text-glow">
              Likhitha
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90">
              Web Designer
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Crafting beautiful and functional websites with love
            </p>
          </div>

          {/* Typewriter Effect */}
          <div className="h-12 flex items-center justify-center animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <div className="text-xl md:text-2xl font-medium gradient-text">
              {skills[currentSkill]}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeUp" style={{ animationDelay: '1s' }}>
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-hover rounded-full px-8 py-6 text-lg font-semibold"
            >
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('projects')}
              className="glass border-2 border-primary/50 text-foreground glow-hover rounded-full px-8 py-6 text-lg font-semibold"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-foreground/50" />
      </div>
    </section>
  );
};

export default Hero;

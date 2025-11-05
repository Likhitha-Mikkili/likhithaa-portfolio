import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['Websites', 'AI Videos & Images', 'Landing Pages', 'Brand Advertising'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-secondary to-primary rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-accent to-secondary rounded-full opacity-15 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fadeUp">
            <div className="inline-block">
              <span className="px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-sm font-semibold text-foreground">
                Creative Designer & Developer
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="gradient-text">Likhitha</span>
              <br />
              <span className="text-foreground">Portfolio</span>
            </h1>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">
                Best Creative Design
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Transforming ideas into stunning visual experiences with cutting-edge design and AI-powered creativity
              </p>
            </div>

            {/* Rotating Skills */}
            <div className="flex items-center gap-4 h-16">
              <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary rounded-full" />
              <div className="text-2xl md:text-3xl font-bold gradient-text animate-fadeIn">
                {skills[currentSkill]}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-full px-8 h-14 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10">Let's Collaborate</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="border-2 border-primary/50 hover:border-primary text-foreground hover:bg-primary/10 rounded-full px-8 h-14 text-lg font-semibold transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative animate-scaleIn lg:block hidden" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin-slow" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-8 rounded-full border-2 border-secondary/20 animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              <div className="absolute inset-16 rounded-full border-2 border-accent/20 animate-spin-slow" style={{ animationDuration: '25s' }} />
              
              {/* Center Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-3xl animate-pulse" />
              </div>
              
              {/* Floating Icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/4 left-1/4 p-6 rounded-2xl glass glow-hover animate-float">
                    <div className="text-6xl">🎨</div>
                  </div>
                  <div className="absolute top-1/3 right-1/4 p-6 rounded-2xl glass glow-hover animate-float" style={{ animationDelay: '1s' }}>
                    <div className="text-6xl">🤖</div>
                  </div>
                  <div className="absolute bottom-1/3 left-1/3 p-6 rounded-2xl glass glow-hover animate-float" style={{ animationDelay: '2s' }}>
                    <div className="text-6xl">📱</div>
                  </div>
                  <div className="absolute bottom-1/4 right-1/3 p-6 rounded-2xl glass glow-hover animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="text-6xl">🎬</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

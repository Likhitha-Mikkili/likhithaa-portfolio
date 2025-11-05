import { useEffect, useRef, useState } from 'react';
import { Download, Code2, Palette, Smartphone, Layers, Sparkles, Brain, Zap, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML/CSS', icon: Code2 },
    { name: 'JavaScript', icon: Sparkles },
    { name: 'React', icon: Layers },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'Responsive Design', icon: Smartphone },
    { name: 'AI Tools', icon: Brain },
    { name: 'ChatGPT', icon: Wand2 },
    { name: 'AI Prompt Design', icon: Zap },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className={`flex justify-center ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50" />
              <img
                src={profileImage}
                alt="Likhitha - Web Designer"
                className="relative w-72 h-72 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </div>

          {/* About Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm <span className="gradient-text font-semibold">Likhitha</span>, a passionate web designer
              dedicated to creating beautiful, functional, and user-friendly websites. I believe that great design
              is not just about aesthetics—it's about creating experiences that resonate with users and solve real problems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in modern web technologies and a keen eye for design, I transform ideas into stunning
              digital experiences that work seamlessly across all devices.
            </p>

            {/* Skills Cards */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-6 text-foreground">My Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="glass p-4 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover-scale glow-hover text-center"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                      <p className="text-sm font-medium text-foreground">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-hover rounded-full mt-6"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

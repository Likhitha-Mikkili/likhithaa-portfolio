import { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Responsive Design', level: 92 },
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

            {/* Skills Progress Bars */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
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

import { Globe, Wand2, Layout, Video } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Websites',
      description: 'Building beautiful, responsive websites that deliver exceptional user experiences.',
    },
    {
      icon: Wand2,
      title: 'AI Videos & Images',
      description: 'Creating stunning AI-generated videos and images using cutting-edge tools.',
    },
    {
      icon: Layout,
      title: 'Landing Page Design',
      description: 'Crafting high-converting landing pages with modern animations and effects.',
    },
    {
      icon: Video,
      title: 'Brand Advertising',
      description: 'Designing captivating advertising videos and photos that elevate your brand.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          What I Do
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="gradient-border glass group hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-card rounded-full p-4 border-2 border-primary/30">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

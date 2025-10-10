import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      text: 'Likhitha transformed our brand\'s online presence beautifully. Her attention to detail and creative vision exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      text: 'Working with Likhitha was a pleasure. She delivered a stunning, responsive website that perfectly captured our brand identity.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, GlowSkin',
      text: 'The landing page Likhitha designed for us is absolutely gorgeous! Our conversion rate increased by 40% after launch.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Client Testimonials
        </h2>

        <div className="max-w-3xl mx-auto relative">
          <Card className="gradient-border glass overflow-hidden">
            <CardContent className="p-12">
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              
              <p className="text-xl text-foreground/90 leading-relaxed mb-8 min-h-[120px]">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <div>
                <h4 className="font-bold text-lg gradient-text">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="glass glow-hover rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-primary to-secondary w-6'
                      : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="glass glow-hover rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

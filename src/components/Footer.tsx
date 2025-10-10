import { Heart, Instagram, Linkedin, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Services", href: "services" },
    { label: "Contact", href: "contact" },
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/50 border-t border-border">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-hover rounded-full shadow-lg z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-foreground">Contact Info</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">📧</span>
                <a href="mailto:likhithamikkili3683@gmail.com" className="hover:text-primary transition-colors">
                  likhithamikkili3683@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">🌐</span>
                <span>Guntur, A.P, India</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">📞</span>
                <a href="tel:+12345678900" className="hover:text-primary transition-colors">
                  +91 8555912198
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-foreground">Social Media</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-full glow-hover transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            © 2025 Likhitha | Built with <Heart className="w-4 h-4 fill-primary text-primary animate-pulse" /> LOVE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

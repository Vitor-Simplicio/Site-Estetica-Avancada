import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Procedimentos", href: "#servicos" },
  { name: "Benefícios", href: "#beneficios" },
  { name: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isTransparent ? 'bg-transparent py-6' : 'bg-background/80 backdrop-blur-xl border-b border-primary/10 py-4 shadow-elegant'}`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 group cursor-pointer">
            <h2 className="logo_sonia text-2xl md:text-4xl font-bold text-primary transition-all duration-300 group-hover:scale-105">
              Sonia Saúde e Estética
            </h2>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary/70 hidden md:block mt-[-4px]">
              Estética Avançada
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm uppercase tracking-wider group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <a href="https://wa.me/5511956485972" target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-elegant transform transition-all duration-300 hover:scale-105 group rounded-full px-8"
                size="lg"
              >
                AGENDE SUA CONSULTA
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-primary/10 transition-all duration-300 text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-5 bg-background/95 backdrop-blur-lg rounded-2xl p-6 border border-primary/10 shadow-elegant">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium text-lg border-b border-primary/5 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/5511956485972" target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-primary text-primary-foreground w-full group shadow-soft hover:shadow-elegant rounded-full h-14 text-lg"
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                AGENDE SUA CONSULTA
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}


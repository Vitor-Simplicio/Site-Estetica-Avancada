import { Button } from "@/components/ui/button";
import backgroundVideo from "@/assets/background-sala-edit.mp4";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Video de fundo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover scale-105"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Gradiente overlay refinado */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="absolute inset-0 bg-black/30" /> {/* Filtro extra para contraste */}
      </div>

      {/* Conteúdo */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col items-center text-center gap-8 animate-reveal">
          <div className="max-w-4xl">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight text-foreground tracking-tight">
              Beleza que <span className="text-primary">transforma</span>, cuidado que encanta!
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Experiência exclusiva em Estética Avançada e Bem-Estar no coração de Mairinque.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 shadow-elegant group rounded-full px-10 h-14 md:h-16 text-lg hover:scale-105"
              >
                Agende sua consulta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/20 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-primary hover:text-primary-foreground rounded-full px-10 h-14 md:h-16 text-lg hover:scale-105"
              >
                <a href="#servicos">
                  Conheça nossos serviços
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll - Contraste melhorado */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-float">
        <div className="w-[28px] h-[45px] rounded-full border-2 border-foreground/30 flex justify-center p-2">
          <div className="w-1 h-1 bg-foreground rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

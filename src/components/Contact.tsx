import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contato"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna da esquerda */}
          <div className="animate-reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
              Inicie sua <span className="text-primary">Transformação</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md font-light leading-relaxed">
              Estamos prontos para criar um protocolo exclusivo para você. Entre em contato e agende sua avaliação.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground border border-primary/10">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-1">Whatsapp</h3>
                  <p className="text-foreground font-medium">(11) 9 5648-5972</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground border border-primary/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-1">Endereço</h3>
                  <p className="text-foreground font-medium leading-snug">
                    Rua Nove de Julho, 251 <br />
                    Centro, Mairinque - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground border border-primary/10">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-1">Horário</h3>
                  <p className="text-foreground font-medium">
                    Seg a Sex: 9h às 19h<br />
                    Sáb: 9h às 14h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground border border-primary/10">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-1">Email</h3>
                  <p className="text-foreground font-medium">contato@soniaestetica.com.br</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant rounded-full px-12 h-16 text-lg transition-all duration-500 hover:scale-105 group"
            >
              Agendar via WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          {/* Coluna da direita - Mapa com moldura elegante */}
          <div className="relative animate-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl" />
            <div className="relative bg-card p-4 rounded-[2rem] shadow-elegant border border-primary/10 overflow-hidden">
              <div className="w-full h-[450px] rounded-[1.5rem] overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
                <iframe
                  title="Localização - Sônia Saúde e Estética"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5606508737073!2d-47.184436123839404!3d-23.54829946111407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf73dbcb752281%3A0xb7b18f36feee5123!2sSonia%20Sa%C3%BAde%20e%20Est%C3%A9tica!5e0!3m2!1spt-BR!2sbr!4v1760192405300!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

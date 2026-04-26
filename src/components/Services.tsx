import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import servicesSkincare from "@/assets/tratamento_rosto.jpeg";
import servicesFacial from "@/assets/tratamentos_faciais.jpeg";
import servicesBody from "@/assets/service-body.jpg";
import servicesConsultation from "@/assets/consultoria_personalizada.jpeg";

const services = [
  {
    title: "Tratamentos Faciais",
    description: "Protocolos personalizados para rejuvenescimento e hidratação profunda da pele.",
    image: servicesFacial,
  },
  {
    title: "Cuidados com a Pele",
    description: "Produtos e técnicas premium para uma pele radiante e saudável.",
    image: servicesSkincare,
  },
  {
    title: "Consultoria Personalizada",
    description: "Avaliação completa e plano de tratamento individualizado.",
    image: servicesConsultation,
  },
];

export const Services = () => {
  return (
  <section id="servicos" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Experiências <span className="text-primary">Exclusivas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Protocolos personalizados que combinam ciência e arte para realçar sua beleza natural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative overflow-hidden rounded-[2rem] bg-card border border-primary/5 shadow-soft hover:shadow-elegant transition-all duration-700 animate-reveal"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-[450px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Conteúdo do Card */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 leading-relaxed">
                      {service.description}
                    </p>
                    <a 
                      href="https://wa.me/5511956485972" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary font-medium text-sm uppercase tracking-widest group/link"
                    >
                      Solicitar Consulta 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

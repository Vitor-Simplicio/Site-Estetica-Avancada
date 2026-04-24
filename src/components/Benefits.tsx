import { Sparkles, Shield, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Tecnologia de Ponta",
    description: "Equipamentos modernos e técnicas inovadoras para resultados excepcionais.",
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Protocolos rigorosos e profissionais qualificados para seu bem-estar.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada tratamento é desenvolvido especialmente para suas necessidades.",
  },
  {
    icon: Award,
    title: "Excelência Comprovada",
    description: "Anos de experiência e resultados que falam por si mesmos.",
  },
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Por Que Nos Escolher
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Compromisso com a excelência em cada detalhe do seu tratamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 transition-smooth hover:bg-primary/20 hover:scale-110">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

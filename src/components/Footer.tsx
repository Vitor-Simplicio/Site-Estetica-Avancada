import { Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#fdf6e3] text-[#2c3e50] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#2c3e50]/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="animate-reveal">
            <h3 className="logo_sonia text-4xl font-bold mb-6 text-[#2c3e50]">Sonia Estética e Saúde</h3>
            <p className="text-[#2c3e50]/70 font-light leading-relaxed max-w-sm text-lg">
              Sua beleza natural elevada ao máximo nível de sofisticação e cuidado.
            </p>
          </div>

          {/* Coluna 2: Redes Sociais */}
          <div className="flex flex-col md:items-end animate-reveal" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-sm uppercase tracking-[0.2em] font-semibold mb-8 text-[#2c3e50]/50">Conecte-se</h4>
            <div className="flex gap-6">
              <a 
                href="https://share.google/TMzdjcCdVHrANV5V3" target="_blank" 
                className="w-14 h-14 rounded-full bg-[#2c3e50]/5 flex items-center justify-center hover:bg-[#2c3e50] hover:text-[#fdf6e3] transition-all duration-500 group border border-[#2c3e50]/10"
              >
                <Instagram className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-20 pt-10 border-t border-[#2c3e50]/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[#2c3e50]/60 text-sm font-light">
            &copy; {new Date().getFullYear()} Sonia Estética e Saúde. Todos os direitos reservados.
          </p>
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-[#2c3e50]/40">
            <a href="#" className="hover:text-[#2c3e50] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#2c3e50] transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

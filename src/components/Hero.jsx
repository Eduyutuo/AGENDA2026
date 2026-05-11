import { MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  const WHATSAPP_LINK = "https://wa.me/51928510125?text=Hola%20vengo%20de%20la%20web%20de%20AGENDA%202050%20PER%C3%9A%20y%20quiero%20informaci%C3%B3n%20de%20los%20cursos";

  return (
    <section className="relative w-full bg-gradient-to-r from-[#008C89]/15 via-[#008C89]/5 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20 py-16 lg:py-24 xl:py-32 flex flex-col lg:flex-row items-center">
        
        {/* Left Column - Text Content (55%) */}
        <div className="w-full lg:w-[55%] flex flex-col items-start lg:pr-12 xl:pr-16 z-10">
          <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-[1.15] mb-6">
            Formación tecnológica con criterio profesional y enfoque en <span className="text-primary">empleabilidad</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-gray-800 font-medium mb-4 leading-relaxed">
            Cursos virtuales, prácticos y certificados para estudiantes, egresados, profesionales y técnicos que desean fortalecer sus competencias en programación, base de datos e inteligencia artificial aplicada.
          </p>

          <p className="font-body text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
            Aprende con una metodología orientada a la práctica, clases en vivo por Zoom PRO, aula virtual Moodle, grabaciones disponibles y certificación digital con código QR verificable.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6">
            <a
              href="#cursos"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-title text-sm md:text-base font-bold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Ver cursos de lanzamiento
              <ArrowRight size={18} />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-title text-sm md:text-base font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-sm w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              Solicitar información por WhatsApp
            </a>
          </div>

          {/* Urgency Microcopy */}
          <div className="inline-block bg-[#008C89]/10 border border-[#008C89]/20 rounded-lg px-4 py-3 shadow-sm">
            <p className="font-body text-sm md:text-base text-secondary font-bold flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Los 10 primeros inscritos desde los Lives de TikTok acceden al 50% de descuento.
            </p>
          </div>
        </div>

        {/* Right Column - Image (45%) */}
        <div className="w-full lg:w-[45%] mt-16 lg:mt-0 relative">
          {/* Decorative elements behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full opacity-60 blur-3xl z-0"></div>
          
          <div className="relative z-10 w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform lg:rotate-2 hover:rotate-0 transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Estudiante en formación tecnológica"
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-[3/4]"
            />
          </div>
          
          {/* Floating badge over image */}
          <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-4 md:p-6 rounded-2xl shadow-xl z-20 border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="font-title font-bold text-primary text-xl">+20</span>
              </div>
              <div>
                <p className="font-title font-bold text-dark text-sm md:text-base leading-tight">Años de</p>
                <p className="font-body text-gray-500 text-xs md:text-sm">Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

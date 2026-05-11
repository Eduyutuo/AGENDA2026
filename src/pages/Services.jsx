import { Link } from "react-router-dom";
import { CheckCircle2, Code2, Users } from "lucide-react";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-light py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-dark mb-6">
            Nuestros <span className="text-primary">Servicios</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-body leading-relaxed">
            Descubre las soluciones corporativas y formativas diseñadas para impulsar tu carrera y escalar tu organización hacia el futuro.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          
          {/* Service 1 (Image Left, Text Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20 md:mb-32">
            <div className="w-full lg:w-1/2 relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Formación Tecnológica" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-3/4 h-full bg-primary/10 rounded-2xl z-0 hidden md:block"></div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Code2 className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-title font-bold text-dark leading-tight">
                  Formación Tecnológica y Empleabilidad
                </h2>
              </div>
              <p className="text-gray-600 font-body text-lg mb-8 leading-relaxed">
                Preparamos a los profesionales para los desafíos técnicos del mercado moderno, con herramientas de vanguardia y estrategias prácticas.
              </p>
              <ul className="space-y-4">
                {[
                  "Programación (Python, C++, Java) y Bases de Datos.",
                  "Inteligencia Artificial aplicada.",
                  "Modelamiento de sistemas.",
                  "Mejora de empleabilidad (CV y LinkedIn)."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="font-body text-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 2 (Text Left, Image Right) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Gerencia y Gestión Social" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-3/4 h-full bg-gray-100 rounded-2xl z-0 hidden md:block"></div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Users className="text-dark" size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-title font-bold text-dark leading-tight">
                  Gerencia, Gestión Social y Desarrollo Sostenible
                </h2>
              </div>
              <p className="text-gray-600 font-body text-lg mb-8 leading-relaxed">
                Asesoría y consultoría experta para organizaciones que buscan optimizar su impacto, gestionar eficientemente sus recursos y convivir en armonía con su entorno.
              </p>
              <ul className="space-y-4">
                {[
                  "Relaciones Comunitarias y Gestión de conflictos Socio-Ambientales.",
                  "Responsabilidad Social Empresarial (RSE).",
                  "Proyectos de inversión y gestión pública/minera."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="font-body text-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-white mb-10">
            Moderniza tu perfil profesional hoy
          </h2>
          <Link 
            to="/contacto"
            className="inline-flex items-center justify-center bg-white text-primary font-title font-bold text-lg px-8 py-4 rounded-md shadow-lg hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
          >
            Contáctenos ahora
          </Link>
        </div>
      </section>

    </div>
  );
}

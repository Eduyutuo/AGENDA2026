import { Check, Briefcase, Share2, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function BonoEmpleabilidadPage() {
  const checks = [
    "Optimización de perfil de LinkedIn (Titular, Acerca de, Experiencia)",
    "Construcción y monetización de tu marca personal",
    "Estrategias de Networking profesional para conseguir contactos clave",
    "Técnicas modernas para superar filtros ATS y conseguir entrevistas",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20">
      {/* Header Banner */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary rounded-l-[200px] opacity-50 hidden md:block"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-title font-bold text-white mb-4"
          >
            Bono de Empleabilidad
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 font-body text-lg max-w-2xl"
          >
            Seminario especial exclusivo para alumnos matriculados en nuestros cursos de lanzamiento.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 -mt-10 relative z-20 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left Column - Details */}
          <div className="w-full lg:w-3/5 p-8 md:p-12">
            <div className="inline-block bg-primary/10 text-primary font-title font-bold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-wide">
              Exclusivo y Gratuito
            </div>
            
            <h2 className="text-3xl font-title font-bold text-dark mb-6 leading-tight">
              Domina LinkedIn, tu Marca Personal y el Networking Estratégico
            </h2>
            
            <p className="font-body text-gray-600 mb-8 text-lg leading-relaxed">
              En el mercado laboral moderno, no basta con saber programar o manejar bases de datos. Necesitas que los reclutadores y líderes de proyectos te encuentren. Este seminario intensivo de empleabilidad te dará las herramientas exactas para destacar digitalmente.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-[#F5F7F8] p-5 rounded-xl border border-gray-100 text-center">
                <Briefcase className="mx-auto text-[#0077b5] mb-3" size={32} />
                <h4 className="font-title font-bold text-dark mb-1">LinkedIn</h4>
                <p className="text-xs text-gray-500 font-body">Perfil All-Star</p>
              </div>
              <div className="bg-[#F5F7F8] p-5 rounded-xl border border-gray-100 text-center">
                <Share2 className="mx-auto text-primary mb-3" size={32} />
                <h4 className="font-title font-bold text-dark mb-1">Marca Personal</h4>
                <p className="text-xs text-gray-500 font-body">Visibilidad digital</p>
              </div>
              <div className="bg-[#F5F7F8] p-5 rounded-xl border border-gray-100 text-center">
                <Users className="mx-auto text-secondary mb-3" size={32} />
                <h4 className="font-title font-bold text-dark mb-1">Networking</h4>
                <p className="text-xs text-gray-500 font-body">Conexiones clave</p>
              </div>
            </div>

            <h3 className="font-title font-bold text-xl text-dark mb-4">¿Qué aprenderás en las sesiones?</h3>
            <div className="space-y-4">
              {checks.map((text, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1.5 rounded-full text-primary mt-0.5 flex-shrink-0">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span className="font-body text-base text-gray-700 leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="w-full lg:w-2/5 bg-gray-100 relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="LinkedIn Profile and Networking" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="font-title font-bold text-xl mb-1">Potencia tu futuro</p>
                <p className="font-body text-sm text-white/80">Conecta con los mejores del sector tecnológico.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

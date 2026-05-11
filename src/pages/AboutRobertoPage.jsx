import { Globe } from "lucide-react";
import { motion } from "framer-motion";

// SVGs for social media
const TiktokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function AboutRobertoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pb-20">
      
      {/* Header Banner */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#006B68] opacity-50 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-title font-extrabold text-white mb-4 tracking-tight"
          >
            Sobre mí
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 font-title italic text-lg md:text-xl max-w-2xl mx-auto"
          >
            "La educación abre caminos. La tecnología los multiplica."
          </motion.p>
        </div>
      </section>

      {/* Main Profile Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 -mt-16 relative z-20 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-100 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
          
          {/* Left Column: Image & Buttons */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 flex flex-col items-center"
          >
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white mb-8">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Ing. Roberto Tello Yuen" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-full space-y-3">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-[#0077b5] hover:bg-[#006097] text-white rounded-xl font-title font-bold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <LinkedinIcon size={20} />
                LinkedIn
              </a>
              <a 
                href="https://www.tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-black hover:bg-gray-800 text-white rounded-xl font-title font-bold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <TiktokIcon />
                TikTok
              </a>
              <a 
                href="https://robertotello.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white border-2 border-gray-200 hover:border-primary hover:text-primary text-gray-700 rounded-xl font-title font-bold transition-all duration-300 shadow-sm"
              >
                <Globe size={20} />
                Web Personal
              </a>
            </div>
          </motion.div>

          {/* Right Column: Bio */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <div className="inline-block bg-primary/10 text-primary font-title font-bold px-4 py-1.5 rounded-full text-sm mb-4 uppercase tracking-wide">
              Respaldo Académico y Profesional
            </div>
            
            <h2 className="text-3xl md:text-5xl font-title font-extrabold text-dark mb-2">
              Ing. Roberto Tello Yuen
            </h2>
            <h3 className="text-xl md:text-2xl font-body font-medium text-gray-500 mb-8">
              Ingeniero Industrial | Docente | Gestor Social
            </h3>
            
            <div className="space-y-6 font-body text-gray-700 text-lg leading-relaxed">
              <p>
                Soy <strong className="text-dark">Ingeniero Industrial</strong> de profesión, apasionado por la enseñanza y el desarrollo tecnológico aplicado a la resolución de problemas reales.
              </p>
              
              <p>
                A lo largo de mi carrera, he acumulado <strong className="text-primary">más de 20 años de experiencia profesional</strong> trabajando activamente en sectores clave y exigentes del mercado peruano, incluyendo minería, seguros, tecnología, educación superior, gestión social, proyectos de inversión y desarrollo sostenible.
              </p>
              
              <p>
                Esta trayectoria interdisciplinaria me ha permitido comprender que las herramientas tecnológicas (como la programación y las bases de datos) son el vehículo, pero el criterio profesional y la estrategia son el verdadero destino.
              </p>
              
              <div className="bg-[#F5F7F8] p-6 rounded-xl border border-gray-100 mt-8">
                <p className="text-dark font-medium italic">
                  "Actualmente me desempeño como Gerente General de <strong className="text-primary">AGENDA 2030 PERÚ SAC</strong>, la entidad oficial bajo la cual desarrollamos y respaldamos todas las capacitaciones a través de nuestra marca comercial AGENDA 2050 PERÚ."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

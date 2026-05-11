import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Target, Eye, ChevronRight, Milestone } from "lucide-react";

// SVGs for social media
const TiktokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const YoutubeIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Header */}
      <section className="relative h-[40vh] md:h-[50vh] bg-[#111111] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4 md:px-6 relative z-20 text-center flex flex-col items-center justify-center h-full"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-title font-extrabold text-white mb-8 tracking-tight">
            Nosotros
          </h1>
          <p className="text-xl md:text-3xl font-title text-white font-light italic max-w-4xl leading-relaxed">
            "La educación abre caminos. La tecnología los multiplica. Aquí seguimos, enseñando, aprendiendo y construyendo oportunidades."
          </p>
        </motion.div>
      </section>

      {/* 2. Misión y Visión */}
      <section className="py-20 md:py-32" ref={containerRef}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24"
          >
            {/* Misión */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              className="bg-white border border-gray-100 rounded-[2rem] p-10 lg:p-14 transition-all duration-300"
            >
              <div className="mb-8">
                <Target className="text-primary" size={64} strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl md:text-4xl font-title font-bold text-dark mb-6">Misión</h2>
              <p className="text-gray-600 font-body leading-relaxed text-lg lg:text-xl">
                Brindar capacitación especializada, práctica y accesible a personas naturales y organizaciones, mediante programas de formación tecnológica, empleabilidad, gestión social y desarrollo sostenible.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              className="bg-white border border-gray-100 rounded-[2rem] p-10 lg:p-14 transition-all duration-300"
            >
              <div className="mb-8">
                <Eye className="text-primary" size={64} strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl md:text-4xl font-title font-bold text-dark mb-6">Visión</h2>
              <p className="text-gray-600 font-body leading-relaxed text-lg lg:text-xl">
                Ser una organización referente en Latinoamérica en formación tecnológica, empleabilidad y desarrollo profesional aplicado, integrando educación, innovación e IA.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Historia (Timeline) */}
      <section className="py-20 md:py-32 bg-[#F5F7F8]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-title font-bold text-dark mb-4">Nuestra Evolución</h2>
            <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
              Un recorrido de crecimiento, adaptación y compromiso con la educación y el desarrollo sostenible.
            </p>
          </motion.div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 bg-gray-300 z-0"></div>
            {/* Vertical Line for Mobile */}
            <div className="md:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-gray-300 z-0"></div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10"
            >
              {/* Timeline Item 1 */}
              <motion.div variants={fadeInUp} className="flex md:flex-col items-start md:items-center gap-6 md:gap-8">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center flex-shrink-0 shadow-lg relative z-10">
                  <span className="font-title font-bold text-dark text-xl">2017</span>
                </div>
                <div className="md:text-center mt-2 md:mt-0">
                  <h3 className="font-title font-bold text-xl text-dark mb-2">Fundación</h3>
                  <p className="font-body text-gray-600 leading-relaxed text-lg">
                    Nacimiento bajo el liderazgo del Ing. Roberto Tello Yuen como consultora.
                  </p>
                </div>
              </motion.div>

              {/* Timeline Item 2 */}
              <motion.div variants={fadeInUp} className="flex md:flex-col items-start md:items-center gap-6 md:gap-8">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-lg relative z-10">
                  <Milestone size={28} />
                </div>
                <div className="md:text-center mt-2 md:mt-0">
                  <h3 className="font-title font-bold text-xl text-dark mb-2">Evolución</h3>
                  <p className="font-body text-gray-600 leading-relaxed text-lg">
                    De la consultoría en minería e ingeniería a la formación tecnológica avanzada.
                  </p>
                </div>
              </motion.div>

              {/* Timeline Item 3 */}
              <motion.div variants={fadeInUp} className="flex md:flex-col items-start md:items-center gap-6 md:gap-8">
                <div className="w-16 h-16 rounded-full bg-dark text-white border-4 border-dark flex items-center justify-center flex-shrink-0 shadow-lg relative z-10">
                  <span className="font-title font-bold text-xl">2050</span>
                </div>
                <div className="md:text-center mt-2 md:mt-0">
                  <h3 className="font-title font-bold text-xl text-dark mb-2">Visión de Futuro</h3>
                  <p className="font-body text-gray-600 leading-relaxed text-lg">
                    Consolidación en desarrollo sostenible, innovación e IA en la educación.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Respaldo Académico */}
      <section id="roberto" className="py-20 md:py-32 bg-[#F5F7F8]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center md:items-start"
          >
            {/* Left Column: Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 shadow-lg border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Ing. Roberto Tello Yuen" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column: Text */}
            <div className="flex flex-col flex-grow text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-title font-bold text-[#006B68] mb-2">
                Respaldo académico y profesional
              </h2>
              <h3 className="font-title text-2xl md:text-3xl font-bold text-[#111111] mb-6">
                Ing. Roberto Tello Yuen
              </h3>
              
              <p className="font-body text-lg text-[#111111] leading-relaxed mb-6">
                Ingeniero Industrial, docente universitario, consultor de proyectos y gestor social, con más de 20 años de experiencia profesional en sectores como minería, seguros, tecnología, educación superior, gestión social, proyectos de inversión y desarrollo sostenible.
              </p>
              
              <p className="font-body text-lg text-[#111111] leading-relaxed mb-10">
                Actualmente es Gerente General de AGENDA 2030 PERÚ SAC, entidad que desarrollará sus capacitaciones bajo el nombre comercial AGENDA 2050 PERÚ.
              </p>

              {/* Social Buttons */}
              <div className="flex flex-col xl:flex-row items-center justify-center md:justify-start gap-4">
                <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-full font-title text-sm font-bold text-[#111111] hover:border-[#0077b5] hover:text-[#0077b5] transition-colors bg-white shadow-sm w-full xl:w-auto">
                  <LinkedinIcon size={18} />
                  Ver perfil de LinkedIn
                </a>
                <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-full font-title text-sm font-bold text-[#111111] hover:border-black hover:text-black transition-colors bg-white shadow-sm w-full xl:w-auto">
                  <TiktokIcon />
                  Ver TikTok
                </a>
                <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-full font-title text-sm font-bold text-[#111111] hover:border-gray-700 hover:text-gray-700 transition-colors bg-white shadow-sm w-full xl:w-auto">
                  <Globe size={18} />
                  Ver web personal
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final has been moved to a standalone component */}
    </div>
  );
}

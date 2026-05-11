import { ShieldCheck, QrCode, PenTool } from "lucide-react";
import { motion } from "framer-motion";

export default function CertificacionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20">
      {/* Header Banner */}
      <section className="bg-dark py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary opacity-30 rounded-l-[100px] hidden md:block"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-title font-bold text-white mb-4"
          >
            Certificación Oficial
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 font-body text-lg max-w-2xl"
          >
            Respalda tus conocimientos con documentación verificable y válida para el mercado laboral.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 mt-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative group">
              <div className="absolute -top-4 -right-4 bg-[#FFB800] text-dark font-title font-bold text-xs px-4 py-2 rounded-full shadow-lg z-20">
                Verificable 100%
              </div>
              <div className="border-[6px] border-double border-gray-200 w-full aspect-[4/3] flex flex-col items-center justify-center p-6 md:p-10 text-center bg-[#fdfdfd] transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="text-2xl md:text-4xl font-title font-extrabold text-dark tracking-tighter mb-4">
                  AGENDA <span className="text-primary text-sm md:text-lg tracking-[0.2em] block">2050 PERÚ</span>
                </div>
                <h3 className="font-title font-bold text-gray-800 text-lg md:text-2xl uppercase tracking-widest mb-4">
                  Certificado de Aprobación
                </h3>
                <div className="h-0.5 w-3/4 bg-gray-300 mb-6"></div>
                <p className="font-body text-xs md:text-sm text-gray-500 mb-2">Se otorga el presente documento a:</p>
                <p className="font-title font-bold text-dark text-xl md:text-3xl mb-8 font-serif italic">Nombres y Apellidos</p>
                
                <div className="flex justify-between w-full mt-auto items-end px-2 md:px-6">
                  {/* QR Simulation */}
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white flex items-center justify-center border-2 border-dark shadow-sm">
                    <QrCode size={40} className="text-dark" strokeWidth={1} />
                  </div>
                  
                  {/* Signature Simulation */}
                  <div className="text-center">
                    <div className="font-title text-xl md:text-2xl text-gray-800" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                      Roberto Tello Y.
                    </div>
                    <div className="w-32 md:w-48 h-px bg-gray-500 mb-1"></div>
                    <p className="text-[9px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">Ing. Roberto Tello Yuen</p>
                    <p className="text-[8px] md:text-[10px] text-gray-400">Gerente General</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-title font-bold text-dark mb-6 leading-tight">
              Acredita tus competencias con <span className="text-primary">AGENDA 2050 PERÚ</span>
            </h2>
            
            <p className="font-body text-gray-600 mb-10 text-lg leading-relaxed">
              Al culminar exitosamente cualquiera de nuestros cursos, recibirás un certificado digital con peso académico y profesional, diseñado para destacar en plataformas como LinkedIn y en procesos de selección.
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-title font-bold text-dark text-lg mb-1">Emisión Oficial</h4>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    Certificado emitido formalmente por <strong>AGENDA 2050 PERÚ</strong>, garantizando que el sílabo y la metodología cumplen con estándares de mercado.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg text-secondary mt-1">
                  <QrCode size={24} />
                </div>
                <div>
                  <h4 className="font-title font-bold text-dark text-lg mb-1">Código QR Verificable</h4>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    Cada certificado cuenta con un código QR único que redirige a nuestra base de datos oficial, permitiendo a cualquier reclutador validar tu código de alumno al instante.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-[#111111]/10 p-3 rounded-lg text-[#111111] mt-1">
                  <PenTool size={24} />
                </div>
                <div>
                  <h4 className="font-title font-bold text-dark text-lg mb-1">Firma Digital Validada</h4>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    Acreditado con la firma digital del <strong>Ing. Roberto Tello Yuen</strong>, asegurando el respaldo de un profesional con amplia trayectoria gerencial.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import { CheckCircle2, CreditCard, Send, BookOpen, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Inscripcion() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F7F8] rounded-l-[100px] opacity-50 hidden lg:block z-0" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Institutional Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-dark mb-8 leading-tight">
              Ponte en contacto con <br/>
              <span className="text-primary">AGENDA 2050 PERÚ</span>
            </h2>
            
            <p className="font-body text-gray-600 text-lg mb-10 leading-relaxed">
              Estamos aquí para resolver tus dudas y guiarte en tu proceso de matrícula. Déjanos tus datos o visítanos en nuestras oficinas.
            </p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-full bg-[#008C89]/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div className="pt-1">
                  <p className="font-title text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">
                    Dirección
                  </p>
                  <p className="font-body text-dark text-xl font-medium leading-relaxed">
                    Av. Manuel Olguín 211 Of. 601, Surco
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-full bg-[#008C89]/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div className="pt-1">
                  <p className="font-title text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">
                    Correo electrónico
                  </p>
                  <p className="font-body text-dark text-xl font-medium leading-relaxed">
                    informes@agenda2050.pe
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Formulario */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="font-title text-2xl font-bold text-dark mb-4">¡Solicitud Enviada!</h3>
                <p className="font-body text-lg text-gray-600 leading-relaxed">
                  Gracias por tu interés en AGENDA 2050 PERÚ. Hemos recibido tus datos y nuestro equipo se comunicará contigo por WhatsApp para brindarte la información del curso y los pasos de matrícula.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-primary font-title font-bold hover:underline"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-title text-2xl font-bold text-dark mb-6">
                  Formulario de Matrícula
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ingresa tus nombres y apellidos"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-body text-gray-800 transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="Ej: +51 987 654 321"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-body text-gray-800 transition-all bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                      <input 
                        required
                        type="email" 
                        placeholder="tu@correo.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-body text-gray-800 transition-all bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-2">Curso de interés</label>
                    <div className="relative">
                      <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-body text-gray-800 transition-all bg-gray-50 focus:bg-white appearance-none">
                        <option value="">Selecciona un curso...</option>
                        <option value="python">Aprende a Programar desde CERO con aplicaciones en Python</option>
                        <option value="poo">Programación Orientada a Objetos (Python, C++, Java)</option>
                        <option value="bd">Modelamiento de Base de Datos e Introducción a SQL</option>
                      </select>
                      <BookOpen className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-2">Modalidad de pago preferida</label>
                    <div className="relative">
                      <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-body text-gray-800 transition-all bg-gray-50 focus:bg-white appearance-none">
                        <option value="">Selecciona una opción...</option>
                        <option value="yape">Yape / Plin (Transferencia directa)</option>
                        <option value="transferencia">Transferencia Bancaria (BCP / Interbank)</option>
                        <option value="tarjeta">Link de pago (Tarjeta de crédito / débito)</option>
                      </select>
                      <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-2">Mensaje o consulta adicional</label>
                    <textarea 
                      rows="3"
                      placeholder="¿Tienes alguna duda sobre horarios, requisitos o certificación?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-body text-gray-800 transition-all bg-gray-50 focus:bg-white resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-primary text-white font-title font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send size={20} />
                        Quiero matricularme ahora
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

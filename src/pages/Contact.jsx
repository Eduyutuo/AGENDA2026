import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 bg-white rounded-3xl shadow-xl overflow-hidden">
            
            {/* Left Column - Info */}
            <div className="bg-primary text-white p-10 md:p-14 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold mb-8 leading-tight">
                Ponte en contacto con nosotros
              </h1>
              <p className="text-white/90 font-body text-lg mb-12">
                Estamos aquí para resolver tus dudas y ayudarte a dar el siguiente paso en tu carrera profesional.
              </p>
              
              <div className="space-y-8 font-body">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Sede Central</p>
                    <p className="text-white/80">Av. Manuel Olguín 211 Of. 601<br/>Santiago de Surco, Lima</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Correo Electrónico</p>
                    <a href="mailto:agenda2050peru@gmail.com" className="text-white/80 hover:text-white transition-colors">
                      agenda2050peru@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">WhatsApp</p>
                    <a href="https://wa.me/51989971364" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                      +51 989 971 364
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="p-10 md:p-14 bg-white flex flex-col justify-center">
              <h2 className="text-2xl font-title font-bold text-dark mb-8">
                Envíanos un mensaje
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block font-body text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body bg-gray-50 focus:bg-white"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                
                <div>
                  <label className="block font-body text-sm font-semibold text-gray-700 mb-2">Número de WhatsApp</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body bg-gray-50 focus:bg-white"
                    placeholder="Ej. +51 987 654 321"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-semibold text-gray-700 mb-2">Correo electrónico</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body bg-gray-50 focus:bg-white"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-semibold text-gray-700 mb-2">Curso o Servicio de interés</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body bg-gray-50 focus:bg-white text-gray-700">
                    <option value="">Selecciona una opción...</option>
                    <option value="python">Python desde CERO</option>
                    <option value="poo">Programación Orientada a Objetos</option>
                    <option value="bd">Bases de Datos</option>
                    <option value="servicios">Servicios Corporativos</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <button 
                  type="button"
                  className="w-full flex items-center justify-center gap-2 bg-dark hover:bg-primary text-white font-title font-bold text-lg py-4 rounded-lg transition-colors mt-4 shadow-md"
                >
                  Solicitar Información
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

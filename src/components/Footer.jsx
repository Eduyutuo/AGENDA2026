import { MessageCircle, CreditCard, Phone, Mail, MapPin, Globe } from "lucide-react";

// SVGs para redes sociales
const TiktokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const LinkedinIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const YoutubeIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top CTA Ribbon */}
      <div className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
            
            <div className="flex flex-col text-center lg:text-left">
              <h3 className="font-title text-xl md:text-2xl font-bold mb-1">
                ¡Asegura tu cupo hoy mismo!
              </h3>
              <p className="font-body text-white/90 text-sm md:text-base">
                Cupos <span className="font-bold text-[#FFB800]">limitados</span> por curso
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10">
              {/* WhatsApp Info */}
              <div className="flex items-center gap-3">
                <MessageCircle size={32} className="text-white/80" strokeWidth={1.5} />
                <div className="text-left">
                  <p className="font-title text-sm font-bold leading-tight">Escríbenos por WhatsApp</p>
                  <p className="font-body text-xs text-white/80">Atención inmediata</p>
                </div>
              </div>
              
              {/* Online Info */}
              <div className="flex items-center gap-3">
                <CreditCard size={32} className="text-white/80" strokeWidth={1.5} />
                <div className="text-left">
                  <p className="font-title text-sm font-bold leading-tight">Inscríbete en línea</p>
                  <p className="font-body text-xs text-white/80">Pagos con Yape, Plin, tarjetas y más</p>
                </div>
              </div>
            </div>

            <div>
              <button className="bg-[#FFB800] hover:bg-[#e5a600] text-dark font-title text-sm font-bold py-3 px-8 rounded-md transition-all duration-300 hover:-translate-y-1 w-full md:w-auto">
                QUIERO INFORMACIÓN
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-dark text-white/80 py-16" id="contacto">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Column 1: Logo & Bio */}
            <div>
              <div className="flex flex-col mb-4">
                <span className="font-title font-extrabold text-2xl tracking-tighter text-white leading-none">
                  AGENDA
                </span>
                <span className="font-title font-bold text-[10px] tracking-[0.3em] text-primary mt-1">
                  2 0 5 0
                </span>
              </div>
              <p className="font-body text-sm leading-relaxed max-w-xs text-gray-400">
                Formación tecnológica con criterio profesional y enfoque en empleabilidad
              </p>
            </div>

            {/* Column 2: Links */}
            <div>
              <h4 className="font-title text-white font-bold mb-4">Enlaces</h4>
              <ul className="space-y-2 font-body text-sm text-gray-400">
                <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
                <li><a href="#cursos" className="hover:text-primary transition-colors">Cursos</a></li>
                <li><a href="#bono empleabilidad" className="hover:text-primary transition-colors">Bono Empleabilidad</a></li>
                <li><a href="#sobre mi" className="hover:text-primary transition-colors">Sobre mí</a></li>
                <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="font-title text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-3 font-body text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5 text-gray-300" />
                  <div>
                    <p>+51 9XX XXX XXX</p>
                    <p>+51 9XX XXX XXX</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-300" />
                  <a href="mailto:informes@agenda2050.pe" className="hover:text-primary transition-colors">
                    informes@agenda2050.pe
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 text-gray-300" />
                  <span>Lima, Perú</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Social */}
            <div>
              <h4 className="font-title text-white font-bold mb-4">Síguenos</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <LinkedinIcon size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:opacity-90 transition-opacity">
                  <TiktokIcon />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  {/* Instagram icon replacement since it was requested in the design conceptually, or just generic web */}
                  <Globe size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <YoutubeIcon size={14} />
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="font-body text-xs text-gray-500">
              © 2026 AGENDA 2050 PERÚ. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

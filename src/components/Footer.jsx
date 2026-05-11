import { Mail, MapPin } from "lucide-react";

// SVGs para redes sociales
const TiktokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-gray-300 py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1: Brand & Text */}
          <div className="flex flex-col">
            <div className="flex flex-col mb-6">
              <span className="font-title font-extrabold text-3xl tracking-tighter text-white leading-none">
                AGENDA
              </span>
              <span className="font-title font-bold text-[12px] tracking-[0.3em] text-primary mt-1">
                2 0 5 0
              </span>
            </div>
            <p className="font-body text-base leading-relaxed text-gray-400">
              AGENDA 2050 PERÚ - Formación tecnológica con criterio profesional y enfoque en empleabilidad.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col">
            <h4 className="font-title text-white font-bold text-lg mb-6">Navegación</h4>
            <ul className="space-y-3 font-body text-base text-gray-400">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#cursos" className="hover:text-primary transition-colors">Cursos</a></li>
              <li><a href="#bono" className="hover:text-primary transition-colors">Bono Empleabilidad</a></li>
              <li><a href="#roberto" className="hover:text-primary transition-colors">Ing. Roberto Tello</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="flex flex-col">
            <h4 className="font-title text-white font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 font-body text-base text-gray-400 mb-8">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:informes@agenda2050.pe" className="hover:text-white transition-colors">
                  informes@agenda2050.pe
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>Lima, Perú</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0077b5] text-white flex items-center justify-center transition-colors shadow-sm">
                <LinkedinIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-black hover:text-white text-white flex items-center justify-center transition-colors shadow-sm">
                <TiktokIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 text-white flex items-center justify-center transition-colors shadow-sm">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-gray-500">
            © {new Date().getFullYear()} AGENDA 2050 PERÚ. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 font-body text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Términos y condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

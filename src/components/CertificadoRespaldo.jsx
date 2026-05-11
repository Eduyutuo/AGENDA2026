import { Globe } from "lucide-react";
// SVGs para redes sociales (Lucide no incluye iconos de marcas)
const TiktokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function CertificadoRespaldo() {
  return (
    <section className="bg-white py-16 md:py-24" id="sobre mi">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          
          {/* Left Column - Certificación */}
          <div className="flex flex-col">
            <h2 className="font-title text-3xl font-bold text-primary mb-4">
              Certificación digital
            </h2>
            <p className="font-body text-dark mb-8 max-w-sm">
              Recibe tu certificado digital con <span className="font-bold">código QR</span> verificable y firma digital del Ing. Roberto Tello Yuen, Gerente General y Capacitador.
            </p>
            {/* Certificate Image Placeholder */}
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm flex-grow flex items-center justify-center max-w-md mx-auto lg:mx-0 w-full">
              <div className="border-4 border-double border-gray-200 w-full aspect-[4/3] flex flex-col items-center justify-center p-6 text-center">
                <div className="text-xl font-title font-extrabold text-dark tracking-tighter mb-4">
                  AGENDA <span className="text-primary text-sm tracking-[0.2em] block">2050</span>
                </div>
                <h3 className="font-title font-bold text-gray-800 text-lg uppercase tracking-widest mb-4">
                  Certificado
                </h3>
                <div className="h-0.5 w-3/4 bg-gray-300 mb-2"></div>
                <p className="font-body text-[10px] text-gray-500 mb-4">Otorgado a:</p>
                <p className="font-title font-bold text-dark text-xl mb-6">Nombres y Apellidos</p>
                <div className="flex justify-between w-full mt-auto items-end">
                  <div className="w-16 h-16 bg-gray-200 flex items-center justify-center border border-gray-300">
                    <span className="text-[8px] text-gray-500">QR Code</span>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-0.5 bg-gray-400 mb-1"></div>
                    <p className="text-[8px] text-gray-500">Firma Autorizada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Respaldo Académico */}
          <div className="flex flex-col">
            <h2 className="font-title text-3xl font-bold text-primary mb-6">
              Respaldo académico
            </h2>
            <div className="bg-light rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start h-full">
              
              {/* Profile Image */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0 mx-auto md:mx-0">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Ing. Roberto Tello Yuen" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Info */}
              <div className="flex flex-col flex-grow">
                <h3 className="font-title text-xl font-bold text-dark mb-4 text-center md:text-left">
                  Ing. Roberto Tello Yuen
                </h3>
                <ul className="space-y-3 font-body text-sm text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Gerente General - AGENDA 2030 PERÚ SAC
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Ingeniero con más de 20 años de experiencia en proyectos de ingeniería y tecnología.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Docente universitario y capacitador.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Consultor y mentor en gestión de proyectos, tecnología e innovación.
                  </li>
                </ul>

                {/* Social Icons */}
                <div className="flex items-center gap-3 mt-auto justify-center md:justify-start">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                    <LinkedinIcon size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                    <TiktokIcon />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                    <Globe size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                    <YoutubeIcon size={18} />
                  </a>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

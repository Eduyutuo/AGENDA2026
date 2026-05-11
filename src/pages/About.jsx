import { Globe, Target, Eye } from "lucide-react";

// SVGs for social media
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

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Header */}
      <section className="bg-dark text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-title font-bold mb-8">Nosotros</h1>
          <p className="text-lg md:text-2xl font-body text-gray-300 italic leading-relaxed">
            "La educación abre caminos. La tecnología los multiplica. Aquí seguimos, enseñando, aprendiendo y construyendo oportunidades."
          </p>
        </div>
      </section>

      {/* 2. Misión y Visión */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Misión */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h2 className="text-2xl font-title font-bold text-dark mb-4">Nuestra Misión</h2>
              <p className="text-gray-600 font-body leading-relaxed text-lg">
                Brindar capacitación especializada, práctica y accesible a personas naturales y organizaciones, mediante programas de formación tecnológica, empleabilidad, gestión social y desarrollo sostenible.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-primary" size={32} />
              </div>
              <h2 className="text-2xl font-title font-bold text-dark mb-4">Nuestra Visión</h2>
              <p className="text-gray-600 font-body leading-relaxed text-lg">
                Ser una organización referente en Latinoamérica en formación tecnológica, empleabilidad y desarrollo profesional aplicado, integrando educación, innovación e IA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Historia */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-title font-bold text-dark mb-8">Nuestra Historia</h2>
          <p className="text-lg md:text-xl text-gray-700 font-body leading-relaxed">
            Fundada en 2017 bajo el liderazgo del Ing. Roberto Tello Yuen. Evolucionó de la consultoría en minería e ingeniería hacia una propuesta moderna de formación tecnológica y desarrollo sostenible llamada <span className="font-bold text-primary">AGENDA 2050 PERÚ</span>.
          </p>
        </div>
      </section>

      {/* 4. Respaldo Académico */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-title font-bold text-primary mb-12 text-center">
            Respaldo Académico
          </h2>
          <div className="bg-light rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-10 items-center md:items-start">
            
            {/* Profile Image */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-white shadow-xl flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Ing. Roberto Tello Yuen" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex flex-col flex-grow text-center md:text-left">
              <h3 className="font-title text-3xl font-bold text-dark mb-4">
                Ing. Roberto Tello Yuen
              </h3>
              <ul className="space-y-4 font-body text-gray-700 mb-8 text-left text-lg">
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold text-xl">•</span>
                  Gerente General - AGENDA 2030 PERÚ SAC
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold text-xl">•</span>
                  Ingeniero con más de 20 años de experiencia en proyectos de ingeniería y tecnología.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold text-xl">•</span>
                  Docente universitario y capacitador.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold text-xl">•</span>
                  Consultor y mentor en gestión de proyectos, tecnología e innovación.
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex items-center gap-4 justify-center md:justify-start mt-auto">
                <a href="#" className="w-12 h-12 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-md">
                  <LinkedinIcon size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-md">
                  <TiktokIcon />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-600 text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-md">
                  <Globe size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-md">
                  <YoutubeIcon size={20} />
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

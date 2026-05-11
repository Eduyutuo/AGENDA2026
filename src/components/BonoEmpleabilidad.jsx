import { Check } from "lucide-react";

export default function BonoEmpleabilidad() {
  const checks = [
    "Optimiza tu perfil de LinkedIn",
    "Construye tu marca personal",
    "Networking profesional",
    "Estrategias para conseguir empleo",
  ];

  return (
    <section className="bg-white py-16 md:py-24" id="bono empleabilidad">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.08)] bg-light max-w-6xl mx-auto">
          
          {/* Left Side - Image Placeholder */}
          <div className="w-full lg:w-2/5 relative h-64 lg:h-auto bg-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Profesional" 
              className="w-full h-full object-cover"
            />
            {/* Overlay LinkedIn Icon/Badge Simulation */}
            <div className="absolute top-6 right-6 bg-[#0077b5] text-white p-3 rounded-lg shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
            <p className="font-title text-sm font-bold text-primary tracking-wider uppercase mb-2">
              Bono Exclusivo para Alumnos
            </p>
            <h2 className="font-title text-3xl md:text-4xl font-bold text-dark mb-4">
              Programa de Empleabilidad
            </h2>
            <p className="font-body text-gray-700 mb-4 font-medium">
              Seminario especial sobre LinkedIn, marca personal, networking y estrategias para conseguir prácticas y empleo.
            </p>
            <p className="font-body text-sm text-gray-600 mb-8">
              2 a 3 sesiones en vivo para potenciar tu perfil profesional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checks.map((text, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded-full text-primary mt-0.5">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="font-body text-sm text-dark font-medium leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

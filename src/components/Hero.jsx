import { MonitorPlay, BookOpen, Award, MessageCircle, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Image Setup (Placeholder for the actual student image) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Estudiante"
          className="w-full h-full object-cover object-right-top opacity-50 md:opacity-80"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20 py-16 lg:py-24 xl:py-32 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col items-start space-y-6">
          <h1 className="font-title text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] tracking-tight">
            Formación tecnológica <br className="hidden md:block" />
            <span className="text-primary">con criterio profesional</span>{" "}
            <br className="hidden md:block" />
            y enfoque en empleabilidad
          </h1>

          <p className="font-body text-lg md:text-xl text-gray-200 max-w-xl">
            Cursos prácticos, actuales y certificados para que desarrolles
            habilidades y mejores tu futuro profesional.
          </p>

          {/* Feature Checks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 pb-6 w-full max-w-2xl">
            <div className="flex items-center gap-3">
              <MonitorPlay className="text-primary flex-shrink-0" size={24} />
              <span className="font-body text-sm font-medium leading-tight">
                Clases en vivo<br />por Zoom
              </span>
            </div>
            <div className="flex items-center gap-3">
              <BookOpen className="text-primary flex-shrink-0" size={24} />
              <span className="font-body text-sm font-medium leading-tight">
                Aula virtual<br />Moodle
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-primary flex-shrink-0" size={24} />
              <span className="font-body text-sm font-medium leading-tight">
                Certificado digital<br />con código QR
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#cursos"
              className="bg-primary hover:bg-secondary text-white font-title text-sm font-bold tracking-wide py-4 px-8 rounded-md transition-all duration-300 hover:-translate-y-1 text-center"
            >
              VER CURSOS
            </a>
            <a
              href="#whatsapp"
              className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:border-primary hover:bg-primary text-white font-title text-sm font-bold tracking-wide py-3.5 px-8 rounded-md transition-all duration-300 hover:-translate-y-1"
            >
              <MessageCircle size={20} className="group-hover:animate-pulse" />
              ESCRÍBENOS POR WHATSAPP
            </a>
          </div>
        </div>

        {/* Right side - Floating Card (visible on larger screens) */}
        <div className="hidden md:flex w-full md:w-2/5 lg:w-1/2 justify-end items-end h-full mt-12 md:mt-0">
          <div className="bg-dark/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 flex flex-col items-center justify-center max-w-[200px] transform translate-y-12 lg:translate-y-24 mr-8 lg:mr-16 shadow-2xl">
            <div className="bg-primary/20 p-3 rounded-full mb-3">
              <Users className="text-primary" size={32} />
            </div>
            <p className="font-title text-sm text-center text-white font-semibold leading-tight">
              Miles de alumnos ya transformaron su futuro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

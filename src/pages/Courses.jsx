import CursosSection from "../components/Cursos";
import { Search } from "lucide-react";

export default function Courses() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Search Header */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-dark mb-6 tracking-tight">
            Nuestros Programas de <span className="text-primary">Especialización</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 font-body max-w-2xl mx-auto">
            Encuentra el curso perfecto para desarrollar tus habilidades tecnológicas y destacar en el mercado laboral.
          </p>
          
          {/* Simple Search Filter Mock */}
          <div className="max-w-2xl mx-auto flex items-center bg-white rounded-full shadow-lg border border-gray-100 overflow-hidden p-2 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <Search className="text-gray-400 ml-4 flex-shrink-0" size={24} />
            <input 
              type="text" 
              placeholder="¿Qué quieres aprender hoy? Ej. Python, Base de Datos..." 
              className="w-full px-4 py-4 outline-none font-body text-gray-700 bg-transparent text-lg"
            />
            <button className="bg-primary hover:bg-secondary text-white font-title font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-md hidden sm:block">
              Buscar Cursos
            </button>
          </div>
        </div>
      </section>

      {/* Grid Component */}
      <div className="-mt-8">
        <CursosSection />
      </div>
    </div>
  );
}

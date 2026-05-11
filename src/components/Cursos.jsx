import { Calendar, Code, Terminal, Database } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

export default function Cursos() {
  return (
    <section className="bg-white py-16 md:py-24" id="cursos">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-title text-3xl md:text-4xl font-bold text-dark tracking-tight">
            Cursos de <span className="text-primary">lanzamiento</span>
          </h2>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((curso, index) => {
            // Mapping icons based on ID for aesthetics
            let CoverIcon = Code;
            let imageText = "Curso";
            if (curso.id === "python-desde-cero") {
              CoverIcon = Code;
              imageText = "Python";
            } else if (curso.id === "poo-multilenguaje") {
              CoverIcon = Terminal;
              imageText = "Python | C++ | Java";
            } else if (curso.id === "base-de-datos") {
              CoverIcon = Database;
              imageText = "Base de Datos";
            }

            return (
              <motion.div 
                key={curso.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col overflow-hidden transition-shadow hover:shadow-lg"
              >
                {/* Card Header / Image Placeholder */}
                <div className="relative h-48 bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
                  <CoverIcon className="text-primary mb-3" size={48} strokeWidth={1.5} />
                  <span className="text-white/80 font-title font-semibold tracking-wider text-sm md:text-base">
                    {imageText}
                  </span>
                  {/* Date Badge */}
                  <div className="absolute top-0 right-0 bg-primary text-white font-title text-xs font-bold px-4 py-2 rounded-bl-xl shadow-sm">
                    Inicio: {curso.startDate}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  {/* Title */}
                  <h3 className="font-title text-lg md:text-xl font-bold text-dark leading-tight mb-4">
                    {curso.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-gray-600 mb-6 flex-grow">
                    {curso.description}
                  </p>

                  {/* Details (Schedule & Hours) */}
                  <div className="flex items-start gap-3 mb-6 bg-light p-4 rounded-lg">
                    <Calendar className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-body text-sm font-semibold text-dark">
                        {curso.schedule}
                      </p>
                      <p className="font-body text-xs text-gray-500 mt-1">
                        {curso.duration} ({curso.certification})
                      </p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mt-auto space-y-1 mb-6">
                    <p className="font-body text-sm text-gray-600">
                      Precio regular: <span className="font-semibold text-primary/80 line-through">{curso.regularPrice}</span>
                    </p>
                    <p className="font-title text-sm font-bold text-primary">
                      {curso.discountText}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    to={`/curso/${curso.id}`}
                    className="w-full inline-block text-center bg-primary hover:bg-secondary text-white font-title text-sm font-bold tracking-wide py-3.5 rounded-md transition-all duration-300 hover:-translate-y-1"
                  >
                    Ver Detalle del Curso
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

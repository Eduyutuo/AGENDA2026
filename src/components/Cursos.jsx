import { Calendar, Code, Terminal, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function Cursos() {
  const cursos = [
    {
      id: 1,
      imageIcon: Code,
      imageText: "Python",
      date: "Inicio: 06 de junio",
      title: "Aprende a Programar desde CERO con aplicaciones en Python",
      description: "Incluye 2 a 3 sesiones de Algoritmos con PSeInt y luego Python básico.",
      schedule: "Domingos de 09:00 a 12:00 pm",
      hours: "24 horas cronológicas (certificables por 32 horas)",
      regularPrice: "S/600",
      discountText: "Preventa LIVE: 50% dscto.",
    },
    {
      id: 2,
      imageIcon: Terminal,
      imageText: "Python | C++ | Java",
      date: "Inicio: 13 de junio",
      title: "Programación Orientada a Objetos",
      description: "Con aplicaciones en tres lenguajes de programación: Python - C++ - Java.",
      schedule: "Sábados de 3:00 a 6:00 pm",
      hours: "24 horas cronológicas (certificables por 32 horas)",
      regularPrice: "S/600",
      discountText: "Preventa LIVE: 50% dscto.",
    },
    {
      id: 3,
      imageIcon: Database,
      imageText: "Base de Datos",
      date: "Inicio: 20 de junio",
      title: "Aprende BASE DE DATOS desde CERO",
      description: "Identifica el problema, diseña la solución, implementa la base de datos y gestiona reportes para la toma de decisiones.",
      schedule: "Sábados de 6:00 a 9:00 pm",
      hours: "24 horas cronológicas (certificables por 32 horas)",
      regularPrice: "S/600",
      discountText: "Preventa LIVE: 50% dscto.",
    },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cursos.map((curso, index) => {
            const CoverIcon = curso.imageIcon;
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
                    {curso.imageText}
                  </span>
                  {/* Date Badge */}
                  <div className="absolute top-0 right-0 bg-primary text-white font-title text-xs font-bold px-4 py-2 rounded-bl-xl shadow-sm">
                    {curso.date}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  {/* Title & Number */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-title font-bold text-sm mt-1">
                      {curso.id}
                    </div>
                    <h3 className="font-title text-lg md:text-xl font-bold text-dark leading-tight">
                      {curso.title}
                    </h3>
                  </div>

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
                        {curso.hours}
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
                  <button className="w-full bg-primary hover:bg-secondary text-white font-title text-sm font-bold tracking-wide py-3.5 rounded-md transition-all duration-300 hover:-translate-y-1">
                    INSCRIBIRME AHORA
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

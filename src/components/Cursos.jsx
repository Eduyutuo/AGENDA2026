import { Calendar, Code, Terminal, Database, CheckCircle2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { courses } from "../data/courses";

export default function Cursos() {
  const WHATSAPP_LINK = "https://wa.me/51928510125?text=Hola%20vengo%20de%20la%20web%20de%20AGENDA%202050%20PER%C3%9A%20y%20quiero%20matricularme%20en%20un%20curso";

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((curso, index) => {
            // Mapping icons based on ID for aesthetics
            let CoverIcon = Code;
            let imageText = "Curso";
            if (curso.id === "python-desde-cero") {
              CoverIcon = Code;
              imageText = "Python";
            } else if (curso.id === "poo-multilenguaje") {
              CoverIcon = Terminal;
              imageText = "POO";
            } else if (curso.id === "base-de-datos") {
              CoverIcon = Database;
              imageText = "SQL";
            }

            return (
              <motion.div 
                key={curso.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Card Header / Image Placeholder */}
                <div className="relative h-40 bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
                  <CoverIcon className="text-primary mb-2" size={40} strokeWidth={1.5} />
                  <span className="text-white/90 font-title font-bold tracking-wider text-lg">
                    {imageText}
                  </span>
                  {/* Date Badge */}
                  <div className="absolute top-0 right-0 bg-primary text-white font-title text-xs font-bold px-4 py-2 rounded-bl-xl shadow-sm">
                    Inicio: {curso.startDate}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Title */}
                  <h3 className="font-title text-xl font-bold text-dark leading-tight mb-3">
                    {curso.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-gray-600 mb-6 flex-grow">
                    {curso.description}
                  </p>

                  {/* Syllabus / Lo que aprenderás */}
                  <div className="mb-6">
                    <h4 className="font-title text-sm font-bold text-dark mb-3 uppercase tracking-wider text-gray-500">
                      Lo que aprenderás:
                    </h4>
                    <ul className="space-y-2">
                      {curso.syllabus.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="font-body text-sm text-gray-700 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Details (Schedule & Hours) */}
                  <div className="flex items-start gap-3 mb-6 bg-[#F5F7F8] p-4 rounded-xl border border-gray-100">
                    <Calendar className="text-secondary flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="font-body text-sm font-bold text-dark">
                        {curso.schedule}
                      </p>
                      <p className="font-body text-xs text-gray-600 mt-1 font-medium">
                        {curso.duration} | {curso.certification}
                      </p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mt-auto space-y-1 mb-6 text-center p-4 border border-primary/20 bg-primary/5 rounded-xl">
                    <p className="font-body text-sm text-gray-500">
                      Precio regular: <span className="line-through">{curso.regularPrice}</span>
                    </p>
                    <p className="font-title text-lg font-bold text-primary">
                      {curso.discountText}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#008C89] hover:bg-[#006B68] text-white font-title text-sm md:text-base font-bold tracking-wide py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
                  >
                    <MessageCircle size={20} />
                    Inscribirme por WhatsApp
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

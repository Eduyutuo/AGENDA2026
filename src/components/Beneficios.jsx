import { GraduationCap, MonitorPlay, Monitor, FileBadge, Briefcase, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Beneficios() {
  const beneficios = [
    {
      icon: GraduationCap,
      title: "Cursos cortos y prácticos",
      description: "24 horas cronológicas (certificables por 32 horas)",
    },
    {
      icon: MonitorPlay,
      title: "Clases en vivo interactivas",
      description: "Por Zoom con acceso a grabaciones",
    },
    {
      icon: Monitor,
      title: "Aula virtual Moodle 24/7",
      description: "Materiales, foros, tareas y más",
    },
    {
      icon: FileBadge,
      title: "Certificación digital con QR",
      description: "Verificable y con firma digital del instructor",
    },
    {
      icon: Briefcase,
      title: "Enfoque en empleabilidad",
      description: "Bono especial sobre LinkedIn y marca profesional",
    },
    {
      icon: Star,
      title: "Respaldo académico y experiencia real",
      description: "Aprende con enfoque profesional y casos reales",
    },
  ];

  return (
    <section className="bg-light py-16 md:py-24" id="beneficios">
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
            ¿Por qué elegir <span className="text-primary">AGENDA 2050 PERÚ</span>?
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-4 bg-transparent transition-transform hover:-translate-y-1"
              >
                <div className="mb-5">
                  <Icon className="text-primary w-12 h-12" strokeWidth={1.5} />
                </div>
                <h3 className="font-title text-base font-bold text-dark mb-3 leading-tight">
                  {beneficio.title}
                </h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  {beneficio.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

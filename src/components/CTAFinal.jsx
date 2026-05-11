import { MessageCircle, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function CTAFinal() {
  const WHATSAPP_LINK = "https://wa.me/51928510125?text=Hola%20vengo%20de%20la%20web%20de%20AGENDA%202050%20PER%C3%9A%20y%20quiero%20informaci%C3%B3n%20de%20los%20cursos";

  return (
    <section className="bg-[#006B68] py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-title font-bold text-white mb-6">
            Asegura tu cupo en la primera cohorte
          </h2>
          <p className="text-white text-lg md:text-xl font-body mb-10">
            Los 10 primeros inscritos desde los Lives de TikTok acceden al 50% de descuento. Cupos limitados por curso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-primary font-title font-bold text-sm md:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              Solicitar información por WhatsApp
            </a>
            <a 
              href="#cursos" 
              className="flex items-center justify-center gap-2 bg-white text-primary font-title font-bold text-sm md:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              <BookOpen size={20} />
              Ver cursos disponibles
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

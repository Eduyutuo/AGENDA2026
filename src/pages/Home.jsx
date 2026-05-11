import { Link } from "react-router-dom";
import { ArrowRight, Award, Briefcase, UserCheck } from "lucide-react";
import Hero from "../components/Hero";
import CTAFinal from "../components/CTAFinal";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      
      {/* Portal Summaries Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-title text-3xl md:text-5xl font-bold text-dark mb-4">
              Mucho más que cursos
            </h2>
            <p className="font-body text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre todo el ecosistema de formación, respaldo profesional y beneficios exclusivos que hemos preparado para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Bono Summary */}
            <div className="bg-[#F5F7F8] p-8 md:p-10 rounded-3xl border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Briefcase size={32} />
              </div>
              <h3 className="font-title text-2xl font-bold text-dark mb-4">
                Programa de Empleabilidad
              </h3>
              <p className="font-body text-gray-600 mb-8 flex-grow">
                Un seminario exclusivo enfocado en potenciar tu perfil de LinkedIn, construir tu marca personal y dominar el networking estratégico para destacar en el mercado.
              </p>
              <Link 
                to="/bono-empleabilidad"
                className="inline-flex items-center gap-2 font-title font-bold text-primary hover:text-secondary transition-colors group"
              >
                Leer más
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Certificacion Summary */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Award size={32} />
              </div>
              <h3 className="font-title text-2xl font-bold text-dark mb-4">
                Certificación Oficial
              </h3>
              <p className="font-body text-gray-600 mb-8 flex-grow">
                Respalda tus conocimientos con un certificado digital emitido por AGENDA 2050 PERÚ, con código QR verificable al 100% y firma digital validada.
              </p>
              <Link 
                to="/certificacion"
                className="inline-flex items-center gap-2 font-title font-bold text-secondary hover:text-primary transition-colors group"
              >
                Leer más
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Sobre Mi Summary */}
            <div className="bg-[#F5F7F8] p-8 md:p-10 rounded-3xl border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-dark/10 rounded-2xl flex items-center justify-center text-dark mb-6">
                <UserCheck size={32} />
              </div>
              <h3 className="font-title text-2xl font-bold text-dark mb-4">
                Respaldo Profesional
              </h3>
              <p className="font-body text-gray-600 mb-8 flex-grow">
                Conoce la trayectoria del Ing. Roberto Tello Yuen, Gerente General con más de 20 años de experiencia, que lidera y estructura nuestras capacitaciones.
              </p>
              <Link 
                to="/sobre-mi"
                className="inline-flex items-center gap-2 font-title font-bold text-dark hover:text-primary transition-colors group"
              >
                Leer más
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      <CTAFinal />
    </div>
  );
}

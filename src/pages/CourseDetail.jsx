import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Award, BookOpen, CheckCircle, MessageCircle } from "lucide-react";
import { courses } from "../data/courses";

export default function CourseDetail() {
  const { cursoId } = useParams();
  const course = courses.find((c) => c.id === cursoId);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-32 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-title font-bold text-dark mb-4">Curso no encontrado</h1>
        <p className="text-gray-600 mb-8">El curso que buscas no existe o ha sido removido.</p>
        <Link to="/" className="inline-flex items-center text-white bg-primary hover:bg-secondary px-6 py-3 rounded-md font-semibold transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          Volver a inicio
        </Link>
      </div>
    );
  }

  // Simulated syllabus
  const temario = [
    "Módulo 1: Fundamentos y Conceptos Clave",
    "Módulo 2: Casos Prácticos y Aplicación",
    "Módulo 3: Proyecto Final y Evaluación"
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-primary hover:text-secondary mb-8 font-semibold transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          Volver a inicio
        </Link>

        {/* Main Grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column */}
          <div className="md:col-span-2 space-y-10">
            {/* Header Info */}
            <div>
              <h1 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
                {course.title}
              </h1>
              <p className="font-body text-lg text-gray-700 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Temario Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-primary" size={28} />
                <h2 className="font-title text-2xl font-bold text-dark">Temario del Curso</h2>
              </div>
              <div className="space-y-4">
                {temario.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="font-body text-dark font-medium">{item}</span>
                  </div>
                ))}
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="font-body text-dark font-medium">Asesoría personalizada y Certificación</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Card */}
          <div className="md:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl shadow-xl border border-gray-100 p-6 lg:p-8 flex flex-col gap-6">
              
              {/* Pricing */}
              <div className="border-b border-gray-100 pb-6">
                <p className="text-gray-500 font-body text-sm mb-1">Inversión del curso</p>
                <div className="flex items-end gap-3 flex-wrap">
                  <span className="font-title text-3xl font-bold text-primary">{course.regularPrice}</span>
                  <span className="font-title text-sm font-bold text-secondary bg-primary/10 px-2 py-1 rounded">
                    {course.discountText}
                  </span>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Calendar className="text-primary flex-shrink-0" size={22} />
                  <div>
                    <p className="font-body text-sm text-gray-500">Fecha de inicio</p>
                    <p className="font-body font-semibold text-dark">{course.startDate}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="text-primary flex-shrink-0" size={22} />
                  <div>
                    <p className="font-body text-sm text-gray-500">Horario y Duración</p>
                    <p className="font-body font-semibold text-dark">{course.schedule}</p>
                    <p className="font-body text-sm text-gray-600 mt-0.5">{course.duration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="text-primary flex-shrink-0" size={22} />
                  <div>
                    <p className="font-body text-sm text-gray-500">Certificación</p>
                    <p className="font-body font-semibold text-dark">{course.certification}</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/51989971364?text=Hola%20vengo%20de%20la%20web%20y%20quiero%20informaci%C3%B3n%20del%20curso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-secondary text-white font-title text-base font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <MessageCircle size={22} />
                  Inscribirme por WhatsApp
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

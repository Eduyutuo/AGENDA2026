import Hero from "../components/Hero";
import Courses from "./Courses";
import BonoEmpleabilidad from "../components/BonoEmpleabilidad";
import CertificadoRespaldo from "../components/CertificadoRespaldo";
import About from "./About";
import Inscripcion from "../components/Inscripcion";
import CTAFinal from "../components/CTAFinal";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <div id="inicio">
        <Hero />
      </div>
      <div id="cursos">
        <Courses />
      </div>
      <div id="bono">
        <BonoEmpleabilidad />
      </div>
      <div id="certificacion">
        <CertificadoRespaldo />
      </div>
      {/* About page contains the Roberto Tello section and CTA */}
      <div className="w-full">
        <About />
      </div>
      <CTAFinal />
      <Inscripcion />
    </div>
  );
}

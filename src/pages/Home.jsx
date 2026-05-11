import Hero from "../components/Hero";
import Beneficios from "../components/Beneficios";
import Cursos from "../components/Cursos";
import BonoEmpleabilidad from "../components/BonoEmpleabilidad";
import CertificadoRespaldo from "../components/CertificadoRespaldo";

export default function Home() {
  return (
    <>
      <Hero />
      <Beneficios />
      <Cursos />
      <BonoEmpleabilidad />
      <CertificadoRespaldo />
    </>
  );
}

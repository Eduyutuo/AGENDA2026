import Header from "./components/Header";
import Hero from "./components/Hero";
import Beneficios from "./components/Beneficios";
import Cursos from "./components/Cursos";
import BonoEmpleabilidad from "./components/BonoEmpleabilidad";
import CertificadoRespaldo from "./components/CertificadoRespaldo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-body text-dark">
      <Header />
      <Hero />
      <Beneficios />
      <Cursos />
      <BonoEmpleabilidad />
      <CertificadoRespaldo />
      <Footer />
    </div>
  );
}

export default App;

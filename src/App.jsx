import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import BonoEmpleabilidadPage from "./pages/BonoEmpleabilidadPage";
import CertificacionPage from "./pages/CertificacionPage";
import AboutRobertoPage from "./pages/AboutRobertoPage";
import ContactoPage from "./pages/ContactoPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="cursos" element={<Courses />} />
          <Route path="bono-empleabilidad" element={<BonoEmpleabilidadPage />} />
          <Route path="certificacion" element={<CertificacionPage />} />
          <Route path="sobre-mi" element={<AboutRobertoPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

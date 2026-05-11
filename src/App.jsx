import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<About />} />
          <Route path="servicios" element={<Services />} />
          <Route path="cursos" element={<Courses />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="curso/:cursoId" element={<CourseDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

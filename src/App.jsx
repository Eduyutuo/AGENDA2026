import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="curso/:cursoId" element={<CourseDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

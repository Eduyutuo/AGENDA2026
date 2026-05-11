import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const navLinks = [
    { name: "Inicio", path: "#inicio" },
    { name: "Cursos", path: "#cursos" },
    { name: "Bono Empleabilidad", path: "#bono" },
    { name: "Certificación", path: "#certificacion" },
    { name: "Ing. Roberto Tello", path: "#roberto" },
    { name: "Contacto", path: "#contacto" },
  ];

  const WHATSAPP_LINK = "https://wa.me/51928510125?text=Hola%20vengo%20de%20la%20web%20de%20AGENDA%202050%20PER%C3%9A%20y%20quiero%20informaci%C3%B3n%20de%20los%20cursos";

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.path.substring(1));
      let current = "inicio";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 100)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = path.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for sticky navbar
        behavior: "smooth"
      });
      setActiveSection(targetId);
    } else {
      // Fallback if element not found, just scroll to top
      if (targetId === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("inicio");
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#inicio" onClick={(e) => handleNavClick(e, "#inicio")} className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="flex flex-col items-center">
              <span className="font-title font-extrabold text-2xl tracking-tighter text-dark leading-none">
                AGENDA
              </span>
              <span className="font-title font-bold text-[10px] tracking-[0.3em] text-primary mt-1">
                2 0 5 0
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`font-title text-sm font-semibold hover:text-primary transition-colors ${
                  activeSection === link.path.substring(1)
                    ? "text-dark border-b-2 border-primary pb-1"
                    : "text-dark/80"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary hover:bg-secondary text-white font-title text-sm font-semibold py-2.5 px-5 rounded-md transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <MessageCircle size={18} />
              Solicitar información
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`block px-3 py-3 rounded-md font-title text-base font-semibold ${
                  activeSection === link.path.substring(1)
                    ? "bg-primary/10 text-primary"
                    : "text-dark hover:bg-gray-50 hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-secondary text-white font-title text-base font-semibold py-3 rounded-md transition-all duration-300 shadow-md"
              >
                <MessageCircle size={20} />
                Solicitar información
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

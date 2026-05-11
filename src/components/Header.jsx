import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", active: true },
    { name: "Cursos", active: false },
    { name: "Bono Empleabilidad", active: false },
    { name: "Sobre mí", active: false },
    { name: "Contacto", active: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="flex flex-col items-center">
              <span className="font-title font-extrabold text-2xl tracking-tighter text-dark leading-none">
                AGENDA
              </span>
              <span className="font-title font-bold text-[10px] tracking-[0.3em] text-primary mt-1">
                2 0 5 0
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                className={`font-title text-sm font-semibold hover:text-primary transition-colors ${
                  link.active
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
              href="#whatsapp"
              className="flex items-center gap-2 bg-primary hover:bg-secondary text-white font-title text-sm font-semibold py-2.5 px-5 rounded-md transition-all duration-300 hover:-translate-y-1"
            >
              <MessageCircle size={18} />
              WhatsApp
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
                href={`#${link.name.toLowerCase()}`}
                className={`block px-3 py-3 rounded-md font-title text-base font-semibold ${
                  link.active
                    ? "bg-primary/10 text-primary"
                    : "text-dark hover:bg-gray-50 hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href="#whatsapp"
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-secondary text-white font-title text-base font-semibold py-3 rounded-md transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

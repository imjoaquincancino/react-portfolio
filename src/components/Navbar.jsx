/* eslint-disable react/prop-types */
import React from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 bg-gray-900 shadow-sm z-40 w-full">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/#inicio">
          <img className="h-8 w-auto" src="/img/logo.png" alt="Logo" />
        </a>
        <div className="hidden md:flex space-x-4">
          <NavLink href="#about">Sobre mí</NavLink>
          <NavLink href="#caracteristicas">Características</NavLink>
          <NavLink href="#proyectos">Proyectos</NavLink>
          <NavLink href="#planes">Planes</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 w-full py-2 flex flex-col items-center">
          <NavLink href="#about" mobile>
            Sobre mí
          </NavLink>
          <NavLink href="#caracteristicas" mobile>
            Características
          </NavLink>
          <NavLink href="#proyectos" mobile>
            Proyectos
          </NavLink>
          <NavLink href="#planes" mobile>
            Planes
          </NavLink>
          <NavLink href="#contacto" mobile>
            Contacto
          </NavLink>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children, mobile = false }) {
  const baseClasses =
    "text-white hover:text-gray-300 transition-colors duration-300";
  const mobileClasses = mobile ? "block py-2 px-4" : "";

  return (
    <a href={href} className={`${baseClasses} ${mobileClasses} ${children == "Planes" ? "font-semibold" : ""}`}>
      {children}
    </a>
  );
}

export default Navbar;

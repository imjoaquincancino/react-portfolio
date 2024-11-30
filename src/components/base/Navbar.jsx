import React, { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full inset-x-0 top-0 z-20 fixed bg-black/30 backdrop-blur-xl overflow-visible">
      <nav className="flex items-center h-20 px-8">
        <div className="w-full flex items-center justify-between">
          <a href="/">
            <img className="h-10" src="/img/logo.png" alt="Logo" />
          </a>

          <div className="hidden shrink flex-row items-center gap-16 lg:flex text-base font-extralight">
            <a className="hover:text-gray-200 transition-all duration-300" href="/">Inicio</a>
            <a className="hover:text-gray-200 transition-all duration-300" href="/sobre-mi">Sobre JC</a>
          </div>

          <div className="flex items-center gap-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-2xl text-white"
              href="https://www.instagram.com/joaquincancino.dev/"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <button onClick={toggleMenu} className="text-2xl lg:hidden text-white">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden top-20 left-0 right-0 bg-black/30 backdrop-blur-xl overflow-visible text-white flex flex-col items-center gap-8 py-4 text-base ">
          <a href="/">Inicio</a>
          <a href="/sobre-mi">Sobre JC</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;

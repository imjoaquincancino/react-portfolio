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

          <div className="hidden shrink flex-row items-center gap-16 lg:flex text-base font-light">
            <a
              className="hover:text-gray-200 transition-all duration-300"
              href="/"
            >
              Inicio
            </a>
            <a className="text-yellow-400 font-semibold hover:text-yellow-200 transition-colors duration-200 flex items-center" href="/planes">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12ZM14.24 9.40745L16.918 9.40755C18.3564 9.4076 18.9545 11.2483 17.7908 12.0939L15.6244 13.668L16.4518 16.2149C16.8963 17.583 15.3305 18.7206 14.1667 17.8752L12.0001 16.3012L9.83355 17.8752C8.66976 18.7206 7.10396 17.583 7.54842 16.2149L8.37585 13.668L6.20942 12.0939C5.04569 11.2483 5.64378 9.4076 7.08226 9.40755L9.76019 9.40745L10.5878 6.86061C11.0324 5.49255 12.9678 5.49255 13.4124 6.86061L14.24 9.40745Z"
                ></path>
              </svg>
              Planes de Diseño Web
            </a>
            <a
              className="hover:text-gray-200 transition-all duration-300"
              href="/historia"
            >
              Sobre JC
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-3xl text-white"
              href="https://www.instagram.com/joaquincancino.dev/"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <button
              onClick={toggleMenu}
              className="text-2xl lg:hidden text-white"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden top-20 left-0 right-0 bg-black/30 backdrop-blur-xl overflow-visible text-white flex flex-col items-center gap-8 py-4 text-base ">
          <a
              className="hover:text-gray-200 transition-all duration-300"
              href="/"
            >
              Inicio
            </a>
            <a className="text-yellow-400 font-semibold hover:text-yellow-200 transition-colors duration-200 flex items-center" href="/planes">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12ZM14.24 9.40745L16.918 9.40755C18.3564 9.4076 18.9545 11.2483 17.7908 12.0939L15.6244 13.668L16.4518 16.2149C16.8963 17.583 15.3305 18.7206 14.1667 17.8752L12.0001 16.3012L9.83355 17.8752C8.66976 18.7206 7.10396 17.583 7.54842 16.2149L8.37585 13.668L6.20942 12.0939C5.04569 11.2483 5.64378 9.4076 7.08226 9.40755L9.76019 9.40745L10.5878 6.86061C11.0324 5.49255 12.9678 5.49255 13.4124 6.86061L14.24 9.40745Z"
                ></path>
              </svg>
              Planes de Diseño Web
            </a>
            <a
              className="hover:text-gray-200 transition-all duration-300"
              href="/historia"
            >
              Sobre JC
            </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;

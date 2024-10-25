import { ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";

export function Inicio() {
  return (
    <section id="inicio" className="welcome-section bg-[#001]">
      <div className="welcome-content px-4 relative text-white text-center h-screen flex flex-col items-center justify-center mx-auto">
        <div className="px-5 z-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
            Páginas Web {" "}
            <ReactTyped
              backSpeed={30}
              strings={[
                "a precios accesibles",
                "que atraen Clientes",
                "para Emprendedores",
                "para Restaurantes",
                "para Cabañas",
                "para Puerto Varas y Ensenada",
              ]}
              typeSpeed={50}
              backDelay={4000}
              loop
            />
          </h1>
          <p className="text-gray-300 text-xl mb-6 [&>strong]:text-yellow-200 [&>strong]:font-semibold">
            Joaquín Cancino: <strong>Programador y Diseñador Web</strong> de Ensenada, Chile
          </p>
        </div>
        <div className="flex items-center gap-x-5 gap-y-4 justify-center flex-wrap mt-9">
          <a
            className="py-2.5 px-4 justify-center rounded-[10px] font-bold border flex items-center gap-x-2.5 hover:scale-105 transition-transform duration-300 text-white border-[#7610F8] bg-[#7610F8] text-base md:text-xl md:px-6"
            href="/#planes"
          >
            Ver Planes
          </a>
          <a
            href="/#about"
            className="py-2.5 px-4 justify-center rounded-[10px] font-bold border flex items-center gap-x-2.5 hover:scale-105 transition-transform duration-300 bg-transparent text-white border-white text-base md:text-xl md:px-6"
          >
            Saber más
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;

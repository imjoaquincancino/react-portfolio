import { ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";

export function Inicio() {
  return (
    <section id="inicio" className="welcome-section bg-[#001]">
      <div className="welcome-content relative text-white text-center h-screen flex flex-col items-center justify-center mt-5 mx-auto">
        <div className="px-5 z-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg adlam-display-family">
            Páginas Web {" "}
            <ReactTyped
              backSpeed={30}
              strings={[
                "para PYMEs en Puerto Varas y Ensenada",
                "que atraen Clientes",
                "Atractivas y Funcionales",
                "Personalizadas y Efectivas",
                "Accesibles y Optimizadas",
              ]}
              typeSpeed={50}
              backDelay={4000}
              loop
            />
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light mb-6 drop-shadow-md">
            Joaquín Cancino: Programador y Diseñador Web
          </p>
        </div>
        <div className="flex items-center gap-x-5 gap-y-4 justify-center flex-wrap mt-9">
            <a className="py-2.5 px-4 justify-center rounded-[10px] font-bold border flex items-center gap-x-2.5 hover:scale-105 transition-transform duration-300 text-white border-[#7610F8] bg-[#7610F8] text-base md:text-xl md:px-6 shadow-button" href="/#planes">
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

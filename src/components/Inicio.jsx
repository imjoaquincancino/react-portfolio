import { ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";

export function Inicio() {
  return (
    <section
      id="inicio"
      className="welcome-section bg-[#001]"
    >
      <div className="welcome-content relative text-white text-center h-screen flex flex-col items-center justify-center mt-5 mx-auto">
        <div className="px-5 adlam-display-family">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
            Páginas Web {" "}
          <ReactTyped
          backSpeed={30}
            strings={[
                "para PYMEs en Puerto Varas y Ensenada",
                "que atraen Clientes",
                "Atractivas y Funcionales",
                "Personalizadas y Efectivas",
                "Accesibles y Optimizadas"
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
        <div className="cta">
          <a className="page-scroll p-3" href="#about">
            <ArrowDown className="size-7 mt-8 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;

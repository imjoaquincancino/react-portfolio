import { useState } from "react";
import packages from "../utils/packages";
import PlanCard from "../components/Plan";

export function Planes() {
  const [filter, setFilter] = useState("todos");

  const filteredPackages = filter === "todos" 
    ? packages.slice(0, 3)
    : packages.slice(3, 6);

  return (
    <section
      id="planes"
      className="w-full py-12 md:py-24 lg:py-32 "
      style={{
        background: "linear-gradient(to bottom, #7610F8, #000F1D)",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white adlam-display-family">
            Planes de Diseño Web
          </h2>
          <span className="text-yellow-500 font-bold mt-3 adlam-display-family">
              ¡Ofertas especiales solo por tiempo limitado!
          </span>
          {/* Botones de filtro */}
          <div className="mt-6 flex justify-center space-x-4">
            <button
              className={`py-2.5 px-4 justify-center rounded-[10px] font-bold border flex items-center gap-x-2.5 transition-transform duration-300 ${
                filter === "todos" ? "border-white text-white" : "bg-transparent border-[#7610F8] text-white"
              }`}
              onClick={() => setFilter("todos")}
            >
              Para todos
            </button>
            <button
              className={`py-2.5 px-4 justify-center rounded-[10px] font-bold border flex items-center gap-x-2.5 transition-transform duration-300 ${
                filter === "locales" ? "border-white bg-gradient-to-r from-purple-800 to-indigo-800 text-white" : "text-white border-[#7610F8]"
              }`}
              onClick={() => setFilter("locales")}
            >
              Para empresas
            </button>
          </div>
        </div>
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
          {/* Mostrar planes filtrados */}
          {filteredPackages.map((pkg) => (
            <PlanCard
              key={pkg.name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")}
              name={pkg.name}
              beforePrice={pkg.beforePrice}
              best={pkg.best}
              color={pkg.color}
              description={pkg.description}
              example={pkg.example}
              features={pkg.features}
              mantenimiento={pkg.mantenimiento}
              price={pkg.price}
              wspLink={pkg.wspLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Planes;

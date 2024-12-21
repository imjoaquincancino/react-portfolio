import { useState } from "react";
import packages from "../../utils/packages";
import CTAcampaign from "../campaign/CampaignButton";
import PlanCard from "../PlanCard";

/* Sección de Planes */
export default function PlanesHome() {
  const [filter, setFilter] = useState("todos");

  const filteredPackages =
    filter === "todos" ? packages.slice(0, 4) : packages.slice(4, 6);

  return (
    <section id="planes" className=" py-12 md:py-24 lg:py-32">
      <div className="relative">
        <div className="bg-gradient-to-l from-[#c440de54] to-[#3393a956] w-3/4 absolute -z-10 rotate-[-7deg] blur-[160px] md:blur-[300px] rounded-full h-screen"></div>
        <div className="container px-4 mx-auto z-10">
          <div className="space-y-1 z-10 sm:flex flex-col sm:justify-center sm:items-center">
            <span className="bg-clip-text text-xl md:text-2xl text-transparent bg-gradient-to-br from-[#d88333] to-[#ffc341] font-bold">
              Las mejores ofertas para ti
            </span>
            <h2 className="max-w-screen-lg text-balance text-4xl font-bold md:text-5xl md:leading-tight">
              Planes de Diseño Web
            </h2>
            <div className="py-4">
              <CTAcampaign text={"¡Obtén tu página web a mitad de precio!"} />
            </div>
          </div>
          <div className="flex flex-col mt-4 mb-14 text-center">
            {/* Botones de filtro */}
            <div className="flex justify-center space-x-10 md:space-x-24">
              <button
                className={`text-center py-2.5 px-8 justify-center rounded-[10px] font-bold border flex items-center gap-x-2.5 transition-transform duration-300 ${
                  filter === "todos"
                    ? "border-brand bg-gradient-to-r from-purple-800 to-indigo-800 text-white"
                    : "bg-transparent border-[#7610F8] text-white"
                }`}
                onClick={() => setFilter("todos")}
              >
                Para todos
              </button>
              <button
                className={`text-center py-2.5 px-4 justify-center rounded-[10px] font-bold border flex items-center gap-x-2.5 transition-transform duration-300 ${
                  filter === "locales"
                    ? "border-brand bg-gradient-to-r from-purple-800 to-indigo-800 text-white"
                    : "text-white border-white"
                }`}
                onClick={() => setFilter("locales")}
              >
                Restaurantes y Cabañas
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center p-3 sm:p-0 gap-14 sm:gap-10 md:gap-16 lg:gap-24 ">
            {/* Mostrar planes filtrados */}
            {filteredPackages.map((pkg) => (
              <PlanCard
                key={pkg.name
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")}
                name={pkg.name}
                beforePrice={pkg.beforePrice}
                campaign={pkg.campaign}
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
      </div>
    </section>
  );
}

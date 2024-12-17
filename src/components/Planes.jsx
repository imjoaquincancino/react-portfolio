/* eslint-disable react/prop-types */
import { useState } from "react";
import packages from "../utils/packages";
import CTAcampaign from "./campaign/CTAcampaign";

/* Card de los Planes */
function PlanCard({
  name,
  color,
  example,
  description,
  beforePrice,
  price,
  wspLink,
  features,
  mantenimiento,
  best,
  campaign,
}) {
  const [showMaintenance, setShowMaintenance] = useState(false);

  const toggleMaintenance = () => {
    setShowMaintenance(!showMaintenance);
  };

  return (
    <div
      id={`plan-${name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")}`}
      className="relative md:w-2/5"
    >
      <div
        className="p-6 flex-grow text-center items-center shadow-xl rounded-2xl flex flex-col bg-gray-900 place-content-stretch text-white w-full hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-transform duration-500"
        style={{ borderTopColor: color, borderTopWidth: "4px" }}
      >
        {campaign && (
          <img
            src="/img/icons/descuento-50.webp"
            alt="Descuento de Pre-temporada"
            loading="lazy"
            width="70"
            height="70"
            className="absolute -top-4 -right-4 z-10"
          />
        )}
        <h2 className="text-lg lg:text-2xl font-inter text-neutral-title font-bold leading-headline adlam-display-family">
          {name}
        </h2>

        {example && (
          <span
            style={{ color: color }}
            className="mt-2 font-bold underline underline-offset-4"
          >
            <a target="_blank" href={example}>
              Ver un ejemplo
            </a>
          </span>
        )}

        <div className="flex flex-row flex-nowrap items-center mt-6 mb-4">
          <p className="text-gray-400 ">{description}</p>
        </div>

        <span>
          {beforePrice && (
            <del
              className="delete relative decoration-none opacity-60 leading-none"
              style={{ color: color }}
            >
              {beforePrice} CLP
            </del>
          )}
          <span
            className="flex justify-center mb-5 font-inter font-bold text-2xl sm:text-3xl items-baseline"
            style={{ color: color }}
          >
            {price} <span className="ml-1 font-semibold text-sm">CLP/año</span>
          </span>
        </span>

        <div className="text-center p-4 sm:p-10">
          <a
            target="_blank"
            className="rounded-md inline-flex items-center justify-center text-sm font-medium w-auto h-11 px-12 sm:px-24 hover:bg-opacity-70 transition-colors duration-300 adlam-display-family"
            style={{ backgroundColor: color }}
            href={wspLink}
          >
            Consultar
          </a>
        </div>

        <ul className="flex flex-col">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex content-start items-center text-white p-3 text-start"
            >
              <i
                className={`fas ${feature.icon} content-center mr-3`}
                style={{ color: color }}
              ></i>
              {feature.content}
            </li>
          ))}
        </ul>

        {/* Mantenimiento */}
        <div className="mt-4">
          <button
            onClick={toggleMaintenance}
            className="flex items-center justify-between w-full text-left font-bold"
            style={{ color: color }}
          >
            <span>{mantenimiento.title}</span>
            <i className="fas fa-caret-down ml-2"></i>
          </button>
          {showMaintenance && (
            <ul className="mt-2 list-none">
              {mantenimiento.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex content-start items-center text-white p-3 text-start"
                >
                  <i
                    className="fa-solid fa-screwdriver-wrench content-center mr-3"
                    style={{ color: color }}
                  ></i>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

/* Sección de Planes */
export function Planes() {
  const [filter, setFilter] = useState("todos");

  const filteredPackages =
    filter === "todos" ? packages.slice(0, 4) : packages.slice(4, 6);

  return (
    <section id="planes" className=" py-12 md:py-24 lg:py-32">
      <div className="relative">
        <div className="bg-gradient-to-l from-[#c440de54] to-[#3393a956] w-3/4 absolute -z-10 rotate-[-7deg] blur-[160px] md:blur-[300px] rounded-full h-screen"></div>
        <div className="container px-4 mx-auto z-10">
          <div className="space-y-1 z-10 sm:flex flex-col sm:justify-center sm:items-center">
            <span className="bg-clip-text text-xl md:text-2xl text-transparent bg-gradient-to-br from-[#d83333] to-[#f041ff] font-semibold">
              Los mejores precios para ti
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
            <div className="flex justify-center space-x-20">
              <button
                className={`py-2.5 px-8 justify-center rounded-[10px] font-bold border flex text-justify items-center gap-x-2.5 transition-transform duration-300 ${
                  filter === "todos"
                    ? "border-brand bg-gradient-to-r from-purple-800 to-indigo-800 text-white"
                    : "bg-transparent border-[#7610F8] text-white"
                }`}
                onClick={() => setFilter("todos")}
              >
                Para todos
              </button>
              <button
                className={`py-2.5 px-4 justify-center rounded-[10px] font-bold border flex items-center gap-x-2.5 transition-transform duration-300 ${
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

export default Planes;

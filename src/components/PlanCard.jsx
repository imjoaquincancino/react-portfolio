/* eslint-disable react/prop-types */
import { info } from "autoprefixer";
import { useState } from "react";
export default function PlanCard({
  name,
  color,
  example,
  description,
  beforePrice,
  price,
  wspLink,
  helpLink,
  features,
  mantenimiento,
  best,
  campaign,
  icon,
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
      className="relative w-full"
    >
      <div
        className="flex-grow text-center items-center shadow-xl rounded-2xl flex flex-col bg-gray-900 place-content-stretch text-white w-full hover:shadow-2xl transition-transform duration-500"
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

        <div className="mt-6 flex flex-col gap-2">
          <h2 className="text-xl lg:text-3xl font-inter text-neutral-title font-bold leading-headline adlam-display-family">
            {name}
          </h2>

          {example && (
            <span
              style={{ color: color }}
              className="font-bold underline underline-offset-4"
            >
              <a target="_blank" href={example}>
                Ver un ejemplo
              </a>
            </span>
          )}
        </div>

        <div
          className="flex flex-row flex-nowrap items-center gap-4 p-4 my-8 bg-gray-800/50 border-l-4"
          style={{ borderColor: color }}
        >
          <div className="flex items-center justify-center flex-shrink-0 w-auto h-auto mx-2">
            {icon === "rocket" ? (
              <img
                src="/img/icons/rocket.svg"
                alt="Cohete"
                loading="lazy"
                className="max-w-[40px] max-h-[40px] w-auto h-auto"
              />
            ) : (
              <img
                src="/img/icons/diamond.svg"
                alt="Diamante"
                loading="lazy"
                className="max-w-[40px] max-h-[40px] w-auto h-auto"
              />
            )}
          </div>
          <p className="text-gray-300 text-start text-sm md:text-base lg:text-lg">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-4 px-8">
          <h3 className="text-start text-lg md:text-xl font-bold">
            Beneficios:
          </h3>
          <ul className="flex flex-col gap-6">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex content-start items-center text-white text-start"
              >
                <i
                  className={`fas ${feature.icon} content-center mr-3`}
                  style={{ color: color }}
                ></i>
                {feature.content}
              </li>
            ))}
          </ul>
        </div>

        <span className="mt-8">
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
            ${price} <span className="ml-1 font-semibold text-sm">CLP/año</span>
          </span>
        </span>

        <div className="text-center flex flex-col gap-4 mt-4">
          <a
            target="_blank"
            className="rounded-md inline-flex items-center justify-center text-sm font-bold w-auto h-11 px-12 sm:px-24 hover:bg-opacity-70 transition-colors duration-300"
            style={{ backgroundColor: color }}
            href={wspLink}
          >
            Contratar ahora
          </a>
          <a
            className="rounded-md border inline-flex items-center justify-center text-sm font-semibold w-auto h-11 px-12 sm:px-24 transition-colors duration-300"
            href={helpLink}
          >
            Agendar asesoría (Gratis)
          </a>
        </div>

        {/* Mantenimiento */}
        <div className="mt-4 p-6">
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

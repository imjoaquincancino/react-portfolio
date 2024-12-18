/* eslint-disable react/prop-types */
import { useState } from "react";
export default function PlanCard({
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
        className="p-6 flex-grow text-center items-center shadow-xl rounded-2xl flex flex-col bg-gray-900 place-content-stretch text-white w-full hover:shadow-xl hover:-translate-y-3 transition-transform duration-500"
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
            ${price} <span className="ml-1 font-semibold text-sm">CLP/año</span>
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

import CTAcampaign from "../components/campaign/CampaignButton";
import { ArrowDown } from "lucide-react";
import packages from "../utils/packages";
import PlanCard from "../components/PlanCard";

import { useState } from "react";

export default function Planes() {
  const [filter, setFilter] = useState("todos");

  const pkgEmprendedores = packages.slice(0, 2);
  const pkgEmpresa = packages.slice(2, 4);
  const pkgTurismo = packages.slice(4, 6);

  const filteredPackages = packages.slice(0, 4);
  return (
    <main>
      <section className="h-screen flex items-center justify-center">
        <div className="bg-gradient-to-l from-[#4840de60] to-[#8233a960] w-3/4 max-w-xl absolute rotate-[-7deg] z-0 blur-[160px] rounded-full h-96 md:h-80"></div>
        <div className="mx-auto w-full p-4 sm:p-12 z-10">
          <div className="flex flex-col items-center justify-center">
            <CTAcampaign text={"¡50% de DESCUENTO en TODOS NUESTROS PLANES!"} />
            <h1 className="mt-6 mb-6 text-balance text-5xl sm:text-6xl md:text-7xl font-bold text-center">
              <strong className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-purple-400 font-extrabold">
                Planes
              </strong>{" "}
              de Diseño Web
            </h1>
            <p className="text-xl font-semibold text-center mx-auto text-gray-300 max-w-xl [&>strong]:text-yellow-200 [&>strong]:font-semibold">
              Obtén tu propia página web <strong>Buena</strong>,{" "}
              <strong>Bonita</strong> y <strong>Barata</strong>. La mejor
              oportunidad para emprendedores y empresas de Puerto Varas y
              Ensenada.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-32 mt-8">
              <a
                className="rounded-lg border-2 border-purple-800 text-lg md:text-xl font-bold py-3 px-5 hover:scale-105 bg-brand/15 transition-all duration-300 hover:bg-white hover:bg-opacity-30 text-center"
                href="#emprendedores"
              >
                Emprendedores
              </a>
              <a
                className="rounded-lg border-2 border-purple-800 text-lg md:text-xl font-bold py-3 px-5 hover:scale-105 bg-brand/15 transition-all duration-300 hover:bg-white hover:bg-opacity-30 text-center"
                href=""
              >
                Empresas
              </a>
            </div>
          </div>
          <div className="pt-14">
            <a className="w-full" href="#planes">
              <ArrowDown className="animate-bounce w-12 h-12 mx-auto text-white" />
            </a>
          </div>
        </div>
      </section>
      <section id="planes" className="py-12 px-6 md:px-12 lg:px-20">
        <section id="emprendedores" className="relative">
          <div className="bg-gradient-to-br from-[#77b75d2a] to-[#00e5ff29] w-3/4 absolute -z-10  blur-[160px] md:blur-[300px] rounded-full h-3/4"></div>
          <div className="space-y-1 z-10">
            <h2 className="bg-clip-text text-2xl text-transparent bg-gradient-to-tr from-[#76B75D] to-[#00E5FF] font-semibold">
              Para <strong>Emprendedores</strong> y{" "}
              <strong>Pequeñas empresas</strong>
            </h2>
            <p className="max-w-screen-lg text-balance text-2xl font-normal font-heading md:text-3xl lg:text-4xl md:leading-tight">
              No pierdas la oportunidad, tenemos{" "}
              <strong>precios accesibles</strong> para ti.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
            {pkgEmprendedores.map((pkg) => {
              return (
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
              );
            })}
          </div>
        </section>
        <section id="empresas-medianas" className="mt-32 md:mt-48 relative">
          <div className="bg-gradient-to-l from-[#ffdb582f] to-[#f75ec92a] w-3/4 absolute -z-10  blur-[160px] md:blur-[300px] rounded-full h-3/4"></div>
          <div className="space-y-1 z-10">
            <h2 className="bg-clip-text text-2xl text-transparent bg-gradient-to-tr from-[#FFDC58] to-[#F76C5E] font-semibold">
              Para <strong>Empresas medianas</strong> y{" "}
              <strong>Corporaciones</strong>
            </h2>
            <p className="max-w-screen-lg text-balance text-2xl font-normal font-heading md:text-3xl lg:text-4xl md:leading-tight">
              Tenemos soluciones <strong>personalizadas</strong> para tu
              negocio.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
            {pkgEmpresa.map((pkg) => {
              return (
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
              );
            })}
          </div>
        </section>
        <section
          id="restaurantes-y-cabañas"
          className="mt-32 md:mt-48 relative"
        >
          <div className="bg-gradient-to-l from-[#f76b5e28] to-[#e6394728] w-3/4 absolute -z-10  blur-[160px] md:blur-[300px] rounded-full h-3/4"></div>
          <div className="space-y-1 z-10">
            <span className="bg-clip-text text-2xl text-transparent bg-gradient-to-tr from-[#f77f5e] to-[#e63939] font-semibold">
              Para <strong>Restaurantes</strong> y <strong>Cabañas</strong>
            </span>
            <h2 className="max-w-screen-lg text-balance text-2xl font-normal font-heading md:text-3xl xl:text-4xl md:leading-tight">
              Tenemos la solución que estás buscando para tu negocio.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
            {pkgTurismo.map((pkg) => {
              return (
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
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}

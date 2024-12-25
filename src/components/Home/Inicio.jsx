import { ArrowDown } from "lucide-react";
import CTAcampaign from "../campaign/CampaignButton";
export function Inicio() {
  return (
    <section className="flex h-screen items-center justify-center px-4">
      <div className="bg-gradient-to-l from-brand/40 to-brandlight/20 w-3/4 max-w-xl absolute rotate-[-7deg] z-0 blur-[160px] rounded-full h-96 md:h-80"></div>
      <div className="z-10 mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center gap-6 lg:gap-4 xl:gap-6 relative">
          <header className="flex flex-col items-center justify-center lg:items-start">
              <span className="mb-6">
                <CTAcampaign
                  url={"/planes"}
                  text={"Ofertas de Pre-temporada 2025"}
                />
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center lg:text-start mb-6">
                Impulsa tu negocio con{" "}
                <span className="block">
                  <strong className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-purple-300 font-extrabold">
                    Tu página web
                  </strong>
                </span>
              </h1>
              <p className="max-w-lg mb-6 lg:mb-8 text-center lg:text-left text-[#d0dbec] [&>strong]:text-yellow-200">
                ¡No te quedes fuera esta temporada de verano! Aprovecha nuestro{" "}
                <strong>
                  50% de Descuento en TODOS nuestros planes de Diseño Web
                </strong>{" "}
                y obtén tu propia página web a un precio accesible.
              </p>
              <nav className="flex flex-col sm:flex-row gap-8 sm:gap-36">
                <a
                  className="rounded-md bg-gradient-to-t from-brand to-brandlight text-2xl font-bold py-2 px-6 hover:scale-105 transition-all duration-300 text-center"
                  href="/planes"
                >
                  ¡Obtén tu página con -50%!
                </a>
              </nav>
          </header>
        <div className="hidden lg:block lg:w-2/3">
          <img src="/img/mockup-home.webp" alt="" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default Inicio;

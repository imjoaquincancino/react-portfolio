import { ArrowDown } from "lucide-react";
import CTAcampaign from "../campaign/CampaignButton";
export function Inicio() {
  return (
    <section className="flex h-screen items-center justify-center px-4">
      <div className="bg-gradient-to-l from-[#4840de60] to-[#8233a960] w-3/4 max-w-xl absolute rotate-[-7deg] z-0 blur-[160px] rounded-full h-96 md:h-80"></div>
      <div className="z-10 animate__animated animate__fadeIn">
        <header className="flex flex-col items-center justify-center">
          <span className="mb-6">
            <CTAcampaign icon text={"Ofertas de Pre-temporada 2025"} />
          </span>
          <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-center">
            Impulsa tu negocio con{" "}
            <h1 className="block text-center">
              <strong className="bg-clip-text text-transparent bg-gradient-to-tr from-brand to-purple-300 font-extrabold">
                Tu página web
              </strong>
            </h1>
          </span>
          <nav className="mt-10 md:mt-16 flex flex-col sm:flex-row gap-8 sm:gap-36">
            <a
              className="rounded-2xl bg-gradient-to-tr from-brand to-green-400 text-2xl font-bold py-2 px-6 hover:scale-105 transition-all duration-300 text-center"
              href="#planes"
            >
              Ver Ofertas
            </a>
            <a
              className="rounded-2xl border text-2xl font-semibold py-2 px-6 hover:scale-105 transition-all duration-300 hover:bg-white hover:bg-opacity-30 text-center"
              href="#beneficios"
            >
              Ver Ventajas
            </a>
          </nav>
        </header>
      </div>
    </section>
  );
}

export default Inicio;

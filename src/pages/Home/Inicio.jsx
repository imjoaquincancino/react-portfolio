import { Helmet } from "react-helmet";
import CTAcampaign from "../../components/campaign/CampaignButton";
export function Inicio() {
  return (
    <>
      <Helmet>
        <title>Páginas Web Profesionales - Desde $30.000 anual</title>
        <meta
          name="description"
          content="Aprovecha un 50% de descuento en diseño web y potencia tu negocio con una página única. Descubre nuestros planes para páginas web profesionales y modernas."
        />
        <meta
          name="keywords"
          content="páginas web, diseño web, páginas web profesionales, creación de páginas web, páginas web modernas"
        />
        <meta property="og:title" content="Páginas Web Profesionales - Diseña tu Página Hoy" />
        <meta
          property="og:description"
          content="Obtén una página web profesional y moderna con un 50% de descuento. No pierdas la oportunidad de impulsar tu negocio con una presencia online impactante."
        />
        <meta property="og:image" content="/img/mockup-home.webp" />
        <meta property="og:url" content="https://joaquincancino.dev" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section className="flex h-screen items-center justify-center px-4">
        <div className="bg-gradient-to-l from-brand/40 to-brandlight/20 w-3/4 max-w-xl absolute rotate-[-7deg] z-0 blur-[160px] rounded-full h-96 md:h-80"></div>
        <div className="z-10 pt-12 mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-6 lg:gap-4 xl:gap-6 relative">
          <header className="flex flex-col items-center justify-center lg:items-start">
            <span className="mb-6">
              <CTAcampaign
                url={"/planes"}
                text={"Ofertas de Pre-temporada 2025"}
              />
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center lg:text-start mb-6">
              Impulsa tu negocio con{" "}
              <span className="block">
                <strong className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-purple-300 font-extrabold">
                  Tu página web
                </strong>
              </span>
            </h1>
            <p className="max-w-lg mb-6 lg:mb-8 text-center lg:text-left text-[#d0dbec] [&>strong]:text-yellow-200">
              ¡No te quedes fuera esta temporada de verano! Obtén una página web
              profesional con{" "}
              <strong>
                50% de descuento en TODOS nuestros planes de diseño web
              </strong>{" "}
              y haz crecer tu negocio con una presencia online destacada.
            </p>
            <nav className="flex flex-col sm:flex-row gap-8 sm:gap-36">
              <a
                className="rounded-md bg-gradient-to-t from-brand to-brandlight text-xl md:text-2xl font-bold py-2 px-6 hover:scale-105 transition-all duration-300 text-center"
                href="/planes"
              >
                ¡Obtén tu página con -50%!
              </a>
            </nav>
          </header>
          <div className="relative lg:w-2/3">
            <img
              src="/img/mockup-home.webp"
              alt="Páginas web profesionales para tu negocio"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;

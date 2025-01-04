import ScrollTop from "../../components/base/ScrollTop";

import Inicio from "./Inicio";
import Projects from "./Projects";
import Servicios from "./Servicios";
import CTAend from "../../components/CTAend";
import Ventajas from "./Ventajas";
import { Helmet } from "react-helmet";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Páginas Web desde $30.000 anual</title>
        <meta
          name="description"
          content="Aprovecha un 50% de descuento en diseño web y potencia tu negocio con una página única. Descubre nuestros planes para páginas web profesionales y modernas."
        />
        <meta
          name="keywords"
          content="páginas web, diseño web, páginas web profesionales, creación de páginas web, páginas web modernas"
        />
        <meta
          property="og:title"
          content="Páginas Web en Puerto Varas y Ensenada"
        />
        <meta
          property="og:description"
          content="Obtén una página web profesional y moderna con un 50% de descuento. No pierdas la oportunidad de impulsar tu negocio con una presencia online impactante."
        />
        <meta property="og:image" content="/img/mockup-home.webp" />
        <meta property="og:url" content="https://joaquincancino.dev" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ScrollTop />
      <main>
        <Inicio />
        <Ventajas />
        <Projects />
        <Servicios />
        <CTAend />
      </main>
    </>
  );
}

export default Home;

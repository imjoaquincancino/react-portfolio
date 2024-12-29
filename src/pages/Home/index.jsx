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
        <title>
          ¡Tu página web a mitad de precio! 50% OFF | Joaquín Cancino
        </title>
        <meta
          name="description"
          content="Servicios de Diseño Web en Puerto Varas. Obtén tu página web desde los $30.000 pesos anuales. Todos nuestros planes a mitad de precio."
        />
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

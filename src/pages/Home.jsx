import ScrollTop from "../components/base/ScrollTop";

import Inicio from "../components/Home/Inicio";
import Features from "../components/Home/Features";
import Projects from "../components/Home/Projects";
import Servicios from "../components/Home/Servicios";
import CTAend from "../components/Home/CTAend";
import { Helmet } from "react-helmet";

export function Home() {
  return (
    <>
    <Helmet>
      <title>¡Tu página web a mitad de precio! 50% OFF | Joaquín Cancino</title>
      <meta name="description" content="Servicios de Diseño Web en Puerto Varas. Obtén tu página web desde los $30.000 pesos anuales. Todos nuestros planes a mitad de precio." />
    </Helmet>
      <ScrollTop />
      <main>
        <Inicio />
        <Features />
        <Projects />
        <Servicios />
        <CTAend />
      </main>
    </>
  );
}

export default Home;

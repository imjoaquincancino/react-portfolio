import ScrollTop from "../components/ScrollTop";

import Inicio from "../components/Inicio";
import Features from "../components/Features";
import Projects from "../components/Projects";
import Planes from "../components/Planes";
import Contacto from "../components/Contacto";
import FAQ from "../components/FAQ";
import CTAend from "../components/CTAend";

export function Home() {
  return (
    <>
      <ScrollTop />
      <main>
        <Inicio />
        <Features />
        <Projects />
        <Planes />
        <FAQ />
        <CTAend />
      </main>
    </>
  );
}

export default Home;

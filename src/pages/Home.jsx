import ScrollTop from "../components/base/ScrollTop";

import Inicio from "../components/Home/Inicio";
import Features from "../components/Home/Features";
import Projects from "../components/Home/Projects";
import Servicios from "../components/Home/Servicios";
import CTAend from "../components/Home/CTAend";

export function Home() {
  return (
    <>
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

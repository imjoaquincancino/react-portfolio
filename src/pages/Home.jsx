import ScrollTop from "../components/base/ScrollTop";

import Inicio from "../components/Home/Inicio";
import Features from "../components/Home/Features";
import Projects from "../components/Home/Projects";
import Planes from "../components/Home/Planes";
import FAQ from "../components/Home/FAQ";
import CTAend from "../components/Home/CTAend";

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

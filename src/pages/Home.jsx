import ScrollTop from "../components/ScrollTop";

import Inicio from "../components/Inicio";
import { About } from "../components/About";
import Features from "../components/Features";
import Projects from "../components/Projects";
import Planes from "../components/Planes";
import Contacto from "../components/Contacto";
import FAQ from "../components/FAQ";

export function Home() {
  return (
    <>
      <ScrollTop />
      <main>
        <div className="z-10 w-40 blur-[200px] top-6 h-40 rounded-full bg-[#7610F8] absolute pointer-events-none select-none md:top-32 left-0"></div>
        <div className="z-10 w-60 blur-[200px] h-60 rounded-full bg-[#7610F8] absolute pointer-events-none select-none top-80 md:top-56 right-0"></div>
        <Inicio />
        <About />
        <Features />
        <Projects />
        <Planes />
        <FAQ />
        <Contacto />
      </main>
    </>
  );
}

export default Home;

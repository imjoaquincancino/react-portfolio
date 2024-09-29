import ScrollTop from "../components/ScrollTop";
import { ArrowDown } from "lucide-react";
import features from "../utils/features";
import Feature from "../components/Feature";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const welcomeBackground = document.querySelector(".welcome-background");
    const welcomeContent = document.querySelector(".welcome-content");

    welcomeBackground.style.filter = "blur(5px)";
    welcomeContent.style.opacity = "1";
  }, 1000);
});

export function Home() {
  return (
    <>
      <ScrollTop />
      <main>
        <section id="inicio" className="welcome-section bg-black">
          <div className="welcome-background bg-[url('/img/volcan-osorno-bg.webp')] bg-cover bg-center size-full top-0 left-0 absolute"></div>
          <div className="welcome-content text-white text-center h-full flex flex-col items-center justify-center">
            <div className="px-5">
              <h1 className="text-3xl text-slate-200 font-semibold mb-8 animate__animated animate__fadeInUp animate__delay-1s">
                Joaquín Cancino
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold">
                Programador y Diseñador Web en Puerto Varas y Ensenada
              </h2>
            </div>
            <div className="cta">
              <a className="page-scroll p-3 text-4xl" href="#about">
                <ArrowDown className="mt-20" />
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="bg-white text-black w-full flex justify-center"
        >
          <div className="flex items-center justify-between flex-col px-6 md:flex-row gap-10 py-52 container w-3/4">
            <img
              className="transform hover:scale-110 transition duration-300"
              src="/img/mf-avatar.svg"
              alt="Avatar de Joaquín"
            />
            <aside className="grid text-center gap-2 md:gap-0 md:w-2/4">
              <h2 className="text-3xl font-semibold prose">
                <span className="waving-hand">👋</span> Hola, soy Joaquín.
              </h2>
              <p className="text-xl prose">
                Empecé a programar hace 4 años, durante la pandemia del 2020.
                Con mis conocimientos y habilidades ahora ayudo a emprendedores
                y empresas locales en Puerto Varas y Ensenada a mejorar su
                presencia online con sitios web modernos, adaptados a sus
                necesidades y a <strong>precios accesibles</strong>.
              </p>
            </aside>
          </div>
        </section>
        <section
          id="servicios"
          className="text-white w-full py-16 md:px-16 px-8"
          style={{
            background: "linear-gradient(to bottom, #111827, #7610F8)",
          }}
        >
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-white">
            Características de mi servicio
          </h2>
          <div className="container mx-auto grid gap-10 sm:grid-cols-2">
            {features.map((feature) => {
              const featureKey = feature.name
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ /g, "-");
              return (
                <Feature
                  key={featureKey}
                  title={feature.name}
                  img={feature.img}
                  description={feature.description}
                ></Feature>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

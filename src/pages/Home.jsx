import ScrollTop from "../components/ScrollTop";
import { ArrowDown } from "lucide-react";
import features from "../utils/features";
import Feature from "../components/Feature";
import projects from "../utils/projects";
import Project from "../components/Project";
import packages from "../utils/packages";
import PlanCard from "../components/Plan";
import FadeInSection from "../components/FadeIn";

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
        <section id="inicio" className="welcome-section bg-[#111827]">
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
          className="bg-[#001] text-black w-full flex justify-center"
          style={{
            background: "linear-gradient(to bottom, #001, #004)",
          }}
        >
          <FadeInSection pageSection={"about"}>
            <div className="flex items-center justify-between flex-col px-6 gap-10 py-36 md:py-52 container w-3/4">
              <img
                className="size-2/4 md:size-1/4"
                src="/img/logo.png"
                alt=""
              />
              <aside className="grid text-center gap-6 md:gap-6 md:w-2/4">
                <h2 className="text-3xl font-semibold prose text-gray-100">
                  <span className="waving-hand">👋</span> Hola, soy Joaquín.
                </h2>
                <p className="text-xl prose text-gray-300">
                  Empecé a programar hace 4 años, durante la pandemia del 2020.
                  Con mis conocimientos y habilidades ahora ayudo a
                  emprendedores y empresas locales en Puerto Varas y Ensenada a
                  mejorar su presencia online con sitios web modernos, adaptados
                  a sus necesidades y a{" "}
                  <strong className="text-gray-200">precios accesibles</strong>.
                </p>
              </aside>
              <a
                className="text-sm page-scroll p-3 mt-20 flex flex-col items-center text-gray-300"
                href="#beneficios"
              >
                <ArrowDown className="size-10 text-white" />
              </a>
            </div>
          </FadeInSection>
        </section>
        <section
          id="beneficios"
          className="text-white w-full py-16 md:px-16 px-8"
          style={{
            background: "linear-gradient(to bottom, #004, #008)",
          }}
        >
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-white">
            Beneficios de mi servicio
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
        <section
          id="proyectos"
          className="text-white w-full py-16 md:px-16 px-8"
          style={{
            background: "linear-gradient(to bottom, #008, #7610F8)",
          }}
        >
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-white">
            Mis proyectos
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => {
              const projectKey = project.name
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ /g, "-");

              return (
                <Project
                  key={projectKey}
                  name={project.name}
                  img={project.img}
                  description={project.description}
                  url={project.url}
                />
              );
            })}

            <Project
              key="tu-propio-sitio-web"
              name="Un Proyecto Increible"
              img="/img/projects/new-web-screenshot.webp"
              url="/#contacto"
              description="¿Tienes en mente un proyecto? Hagamos algo increible y llevemos tu negocio al siguiente nivel. 🚀"
            />
          </div>
        </section>

        <section
          id="planes"
          className="w-full py-12 md:py-24 lg:py-32"
          style={{
            background: "linear-gradient(to bottom, #7610F8, #000F1D)",
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-col mb-14 text-center">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Planes de Diseño Web
              </h2>
              <h3 className="text-yellow-500 font-bold mt-3">
                <a href="/#plan-economico">
                  ¡Ofertas especiales para primeros clientes!
                </a>
              </h3>
            </div>
            <div className="grid gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 blue">
              {packages.map((pkg) => (
                <PlanCard
                  key={pkg.name
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")}
                  name={pkg.name}
                  beforePrice={pkg.beforePrice}
                  best={pkg.best}
                  color={pkg.color}
                  description={pkg.description}
                  example={pkg.example}
                  features={pkg.features}
                  mantenimiento={pkg.mantenimiento}
                  price={pkg.price}
                  wspLink={pkg.wspLink}
                />
              ))}
            </div>
          </div>
        </section>
        <section
          id="contacto"
          className="w-full py-20 md:py-24 lg:py-32 relative overflow-hidden"
          style={{
            background:
              "url('/img/bg-bright.jpg') no-repeat center center/cover",
          }}
        >
          <div className="absolute inset-0 bg-[#000B1B] opacity-30 backdrop-blur-3xl"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
              ¿Tienes un proyecto en mente?
            </h2>
            <div className="mx-auto max-w-lg flex flex-col justify-items-center">
              <p className="text-center text-gray-200 mb-8">
                🚀 Contáctame para aclarar dudas o discutir tu proyecto y hacer
                algo increible.
              </p>
              <a
                target="_blank"
                href="https://wa.me/56965926195"
                className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border-white border text-white rounded-full w-auto h-11 px-8 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-800 hover:to-indigo-800 transition-all duration-500"
              >
                Enviar Mensaje
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

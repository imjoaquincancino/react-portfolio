/* eslint-disable react/prop-types */
import CTAcampaign from "../campaign/CampaignButton";
import planes from "../../utils/packages";

function ServiceCard({ title, description, cta, url, color }) {
  return (
    <a href="/planes">
      <article
        className="rounded-2xl border border-[#111C2D] bg-[#0B1422] text-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-transform duration-500 max-w-sm"
        style={{ borderTopColor: color, borderTopWidth: "4px" }}
      >
        <div className="p-4">
          <h3 className="mt-4 text-xl font-bold">{title}</h3>
          <p className="mt-2 text-gray-400">{description}</p>
          <a
            href={url}
            className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-gray-700 text-white hover:bg-gray-700 h-10 py-2 px-4"
          >
            {cta}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </article>
    </a>
  );
}

/* Sección de Planes */
export default function Servicios() {
  return (
    <section id="servicios" className=" py-12 md:py-24 lg:py-32">
      <div className="relative">
        <div className="bg-gradient-to-l from-[#c440de54] to-[#3393a956] w-3/4 absolute -z-10 rotate-[-7deg] blur-[160px] md:blur-[300px] rounded-full h-screen"></div>
        <div className="container px-4 mx-auto z-10">
          <div className="space-y-1 z-10 sm:flex flex-col sm:justify-center sm:items-center">
            <span className="bg-clip-text text-xl md:text-2xl text-transparent bg-gradient-to-br from-[#d88333] to-[#ffc341] font-bold">
              Queremos trabajar contigo
            </span>
            <h2 className="max-w-screen-lg text-balance text-4xl font-bold md:text-5xl md:leading-tight">
              Nuestros Servicios
            </h2>
            <div className="py-4">
              <CTAcampaign
                url={"/planes"}
                text={"¡Obtén tu página web a mitad de precio!"}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center p-3 gap-14 sm:gap-10 md:gap-16 lg:gap-24 ">
            <ServiceCard
              title={"Desarrollo Mini Web"}
              description={
                "Desarrollamos tu Mini Web para que puedas tener presencia en internet de manera rápida y sencilla. Con un diseño simple y efectivo para que tus clientes te encuentren fácilmente."
              }
              cta={"Saber más"}
              url={"/planes"}
              color={planes.find((p) => p.name === "Esencial (Mini Web)").color}
            />
            <ServiceCard
              title={"Desarrollo Landing Page"}
              description={
                "Desarrollamos tu landing page para que puedas promocionar un producto o servicio específico de manera efectiva. Asegurando que tus visitantes se conviertan en clientes."
              }
              cta={"Saber más"}
              url={"/planes"}
              color={planes.find((p) => p.name === "Landing Page").color}
            />
            <ServiceCard
              title={"Desarrollo Página Web Corporativa"}
              description={
                "Desarrollamos tu página web corporativa para que puedas mostrar tus productos o servicios de manera profesional. Asegurando captar al mayor número de visitantes mediante estrategias SEO."
              }
              cta={"Saber más"}
              url={"/planes"}
              color={planes.find((p) => p.name === "Corporativo").color}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* eslint-disable react/prop-types */
import projects from "../utils/projects";

function ProjectCard({ name, description, url, img, targetblank }) {
  const target = targetblank ? "_blank" : "_parent";
  return (
    <article className="rounded-2xl border border-[#111C2D] bg-[#0B1422] text-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-transform duration-500">
      <div className="p-4">
        <a href={url} target={target}>
          <img
            src={img}
            alt="Diseño web realizado por Joaquín Cancino"
            className="w-auto h-auto object-cover rounded-lg"
          />
        </a>
        <h3 className="mt-4 text-xl font-bold">{name}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
        <a
          href={url}
          className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-gray-700 text-white hover:bg-gray-700 h-10 py-2 px-4"
          target={target}
        >
          Ver Detalles{" "}
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
  );
}

export function Projects() {
  return (
    <section
      id="proyectos"
      className="mt-20 sm:mt-32 xs:p-6 mx-auto w-full max-w-screen-xl space-y-8 p-4 sm:p-12"
    >
      <div className="space-y-1 z-10">
        <span className="bg-clip-text md:text-lg text-transparent bg-gradient-to-br from-[#d83333] to-[#f041ff] font-semibold">
          Algunos ya han dado el paso...
        </span>
        <h2 className="max-w-screen-lg text-balance text-2xl font-normal font-heading md:text-3xl xl:text-4xl md:leading-tight">
          Ellos ya disfrutan de las <strong>ventajas</strong> de su página web
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3 mt-6">
        {projects.map((project) => {
          const projectKey = project.name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/ /g, "-");

          return (
            <ProjectCard
              key={projectKey}
              name={project.name}
              img={project.img}
              description={project.description}
              url={project.url}
              targetblank={true}
            />
          );
        })}

        <ProjectCard
          key="tu-propio-sitio-web"
          name="Un Proyecto Increible"
          img="/img/projects/mockup-webnew.webp"
          targetblank={false}
          url="/#planes"
          description="¿Tienes en mente un proyecto? Hagamos algo increible y empieza a aumentar tus ventas. 🚀"
        />
      </div>
    </section>
  );
}

export default Projects;

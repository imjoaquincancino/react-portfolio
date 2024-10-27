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
          img="/img/projects/new-web-screenshot.webp"
          targetblank={false}
          url="/#contacto"
          description="¿Tienes en mente un proyecto? Hagamos algo increible y llevemos tu negocio al siguiente nivel. 🚀"
        />
      </div>
    </section>
  );
}

export default Projects;

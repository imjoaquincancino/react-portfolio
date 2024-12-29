/* eslint-disable react/prop-types */
import projects from "../../utils/projects";

function ProjectCard({ name, description, url, img, targetblank, location, business }) {
  const target = targetblank ? "_blank" : "_parent";
  return (
    <article className="rounded-2xl border border-[#111C2D] bg-[#0B1422] text-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-transform duration-500 max-w-sm">
      <div className="p-4">
        <a href={url} target={target}>
          <img
            src={img}
            alt={`Página Web para ${business} en ${location}`}
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
      className="mt-20 sm:mt-32 xs:p-6 mx-auto w-full max-w-screen-xl p-4 sm:p-12"
    >
      <div className="space-y-1 z-10">
        <h2 className="bg-clip-text md:text-lg text-transparent bg-gradient-to-br from-[#d83333] to-[#f041ff] font-semibold">
          Conoce alguno de nuestros proyectos
        </h2>
        <span className="max-w-screen-lg text-balance text-2xl font-normal font-heading md:text-3xl xl:text-4xl md:leading-tight">
          Ellos ya disfrutan de las <strong>ventajas</strong> de tener una página web
        </span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
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
              location={project.location}
              business={project.business}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
        <a className="rounded-full bg-gradient-to-t from-brand to-brandlight text-lg md:text-xl font-bold py-2 px-6 hover:scale-105 transition-all duration-300 text-center" href="/planes">Quiero tener mi página web</a>
      </div>
    </section>
  );
}

export default Projects;

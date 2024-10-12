import projects from "../utils/projects";
import Project from "../components/Project";
export function Projects () {
    return (
        <section
          id="proyectos"
          className="text-white w-full py-16 md:px-16 px-8"
          style={{
            background: "linear-gradient(to bottom, #008, #7610F8)",
          }}
        >
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-white adlam-display-family">
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
    )
}

export default Projects;
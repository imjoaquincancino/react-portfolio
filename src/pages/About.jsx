export default function AboutMe() {
  return (
    <>
      <div className="z-10 w-2/4 h-60 md:w-4/5 blur-[200px] top-0 md:h-20 rounded-full bg-[#7610F8] absolute pointer-events-none select-none"></div>
      <section className="text-white mx-auto container lg:max-w-4xl md:max-w-2xl">
        <div className="flex justify-center items-center py-16 md:py-36 h-screen w-auto">
          <div className="animate__animated animate__fadeIn text-center h-full flex flex-col items-center justify-center px-8 max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <img
                className="h-16 md:h-28 w-auto hover:scale-105 transition-all duration-300"
                src="/img/logo-purple.png"
                alt="Logo de Joaquín Cancino"
              />
              <div className="flex items-center md:justify-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl ">
                  Joaquín Cancino
                </h1>
              </div>
            </div>
            <p className="mt-6 text-xl dark:[&>strong]:text-yellow-200 [&>strong]:font-semibold text-gray-300">
              +4 Años de experiencia.{" "}
              <strong>Programador y Diseñador Web</strong> de Ensenada, Chile.
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <a
                className="rounded-full hover:scale-105 transition-all duration-300 bg-gray-800 px-4 py-1 border border-gray-600 inline-flex items-center justify-center gap-2"
                href="https://www.instagram.com/joaquincancino.dev/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram size-4" /> Instagram
              </a>
              <a
                className="rounded-full hover:scale-105 transition-all duration-300 bg-gray-800 px-4 py-1 border border-gray-600 inline-flex items-center justify-center gap-2"
                href="https://github.com/imjoaquincancino"
                target="_blank"
              >
                <i className="fa-brands fa-github size-4" /> GitHub
              </a>
              <a
                className="rounded-full hover:scale-105 transition-all duration-300 bg-gray-800 px-4 py-1 border border-gray-600 inline-flex items-center justify-center gap-2"
                href="https://www.linkedin.com/in/joaquincdev/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin size-4" /> LinkedIn
              </a>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

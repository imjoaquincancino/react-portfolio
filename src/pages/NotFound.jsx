function NotFound() {
  return (
    <>
        <section id="not-found" className="welcome-section bg-[#111827]">
          <div className="text-white text-center h-full flex flex-col items-center justify-center">
            <div className="px-5">
              <h1 className="text-6xl text-slate-200 font-bold mb-8 animate__animated animate__fadeInUp animate__delay-1s">
                Error 404
              </h1>
              <h2 className="text-4xl md:text-5xl font-semibold">
                Página no encontrada
              </h2>
              <p className="mt-4 text-xl">
                La página que estás buscando no existe.
              </p>
            </div>
            <div className="cta mt-12">
              <a
                href="/"
                className="page-scroll p-3 text-2xl text-white bg-purple-600 rounded-md hover:bg-purple-500 transition-all"
              >
                Volver al Inicio
              </a>
            </div>
          </div>
        </section>
    </>
  );
}

export default NotFound;

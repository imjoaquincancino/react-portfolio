function NotFound() {
  return (
    <section className="flex h-screen items-center justify-center px-4">
      <div className="text-white text-center h-full flex flex-col items-center justify-center">
        <div className="px-5">
          <h1 className="text-2xl text-slate-200 font-semibold mb-2 animate__animated animate__fadeInUp animate__delay-1s">
            Error 404
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold">
            Página no encontrada
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            La página que estás buscando no existe o está en proceso...
          </p>
        </div>
        <div className="cta mt-12">
          <a
            className="rounded-full bg-gradient-to-tr from-brand to-pink-400 text-xl md:text-2xl font-bold py-2 px-6  hover:scale-105 transition-all duration-300 text-center"
            href="/"
          >
            Volver al Inicio
          </a>
        </div>
      </div>
    </section>
  );
}

export default NotFound;

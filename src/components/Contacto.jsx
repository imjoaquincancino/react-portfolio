export function Contacto () {
    return (
        <section
          id="contacto"
          className="w-full py-20 md:py-24 lg:py-32 relative overflow-hidden"
          style={{
            background: "url('/img/bg-pattern.png') center repeat, #000F1D",
          }}
        >
          <div className="absolute inset-0 opacity-30 backdrop-blur-3xl"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white adlam-display-family">
              ¿Tienes alguna duda?
            </h2>
            <div className="mx-auto max-w-lg flex flex-col justify-items-center">
              <p className="text-center text-gray-200 mb-8">
                🚀 Contáctame para aclarar dudas o discutir tu proyecto.
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
    )
}

export default Contacto;
export function Footer() {
  return (
    <footer className="w-full border-t border-borderdark">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8">
        <nav className="flex flex-col lg:flex-row justify-center gap-12 py-8 md:py-12">
          <div className="grid grid-cols-2 gap-12 sm:flex sm:flex-wrap sm:gap-16 lg:gap-20">
            {/* <section className="group flex flex-col">
              <h2 className="mb-4 label-base leading-none text-white">
                Servicios
              </h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="/web" className="whitespace-nowrap text-gray-400">
                    Diseño Web
                  </a>
                </li>
              </ul>
            </section> */}
            <section className="group flex flex-col">
              <h2 className="mb-4 label-base leading-none text-white">
                Nosotros
              </h2>
              <ul
                aria-labelledby="footerHeading3"
                className="flex flex-col gap-2"
              >
                <li>
                  <a
                    href="/sobre-mi"
                    className="whitespace-nowrap text-gray-400"
                  >
                    Sobre JC
                  </a>
                </li>
              </ul>
            </section>
            {/* <section className="group flex flex-col">
              <h2 className="mb-4 label-base leading-none text-white">Legal</h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="/privacidad"
                    className="whitespace-nowrap text-gray-400"
                  >
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="/tos" className="whitespace-nowrap text-gray-400">
                    Términos de servicio
                  </a>
                </li>
              </ul>
            </section> */}
            <section className="group flex flex-col">
              <h2 className="mb-4 label-base leading-none text-white">Contacto</h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                  target="_blank"
                    href="mailto:hola@joaquincancino.dev"
                    className="whitespace-nowrap text-gray-400"
                  >
                    Correo
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://wa.me/56965926195" className="whitespace-nowrap text-gray-400">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </nav>
        <div className="flex items-center justify-center">
              <span className="text-xs text-gray-600 py-1">
                © {(new Date).getFullYear()} <a className="text-gray-500" href="https://joaquincancino.dev">Joaquín Cancino</a>. Todos los derechos reservados.
              </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

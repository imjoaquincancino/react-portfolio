/* eslint-disable react/prop-types */
export function FooterItem({ url, text, targetblank }) {
  const target = targetblank ? "_blank" : "_parent";
  return (
    <li>
      <a target={target} href={url} className="whitespace-nowrap text-gray-400">
        {text}
      </a>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t bottom-0 right-0 left-0 border-borderdark">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8">
        <nav className="flex flex-col lg:flex-row justify-center gap-12 py-8 md:py-12">
          <div className="grid grid-cols-2 gap-12 sm:flex sm:flex-wrap sm:gap-16 lg:gap-20">
            <section className="group flex flex-col">
              <h2 className="mb-4 label-base leading-none text-white">
                Servicios
              </h2>
              <ul className="flex flex-col gap-2">
                <FooterItem url="/planes" text="Diseño Web" />
                <FooterItem url="/planes" text="Diseño Landing Page" />
                <FooterItem url="/planes" text="Diseño Web Corporativa" />
              </ul>
            </section>
            <section className="group flex flex-col">
              <h2 className="mb-4 label-base leading-none text-white">
                Sobre Nosotros
              </h2>
              <ul
                aria-labelledby="footerHeading3"
                className="flex flex-col gap-2"
              >
                <FooterItem url="/historia" text="Historia" />
                <FooterItem url="https://instagram.com/joaquincancino.dev" text={"Instagram"} targetblank={true} />
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
              <h2 className="mb-4 label-base leading-none text-white">
                Contacto
              </h2>
              <ul className="flex flex-col gap-2">
                <FooterItem url="https://wa.me/56965926195" text="WhatsApp" targetblank={true} />
                <FooterItem url="mailto:hola@joaquincancino.dev" text="Correo" targetblank={true} />
              </ul>
            </section>
          </div>
        </nav>
        <div className="flex items-center justify-center">
          <span className="text-xs text-gray-600 py-1">
            © {new Date().getFullYear()}{" "}
            <a className="text-gray-500" href="https://joaquincancino.dev">
              Joaquín Cancino
            </a>
            . Ruta 225 Km. 41, <strong>Ensenada</strong>,{" "}
            <strong>Puerto Varas</strong>. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

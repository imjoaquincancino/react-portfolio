/* eslint-disable react/prop-types */
function HabilidadCard({ img, title, description }) {
  return (
    <article className="cursor-pointer rounded-3xl p-8 shadow-2xl bg-gray-950 hover:scale-105 transition-all duration-300">
      <div className="flex flex-col items-center justify-center gap-2 max-w-xl">
        <img className="size-16" src={img} alt={`Habilidad de ${title}`} />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </article>
  );
}

function FeatureCard({ icon, title, description, color }) {
  var borderColor = "";
  var gradientColor = "";
  if (color === "blue") {
    borderColor = "from-[#4af2c8] to-[#2f4cb3]";
    gradientColor = "from-[#3245ff40] to-[#3245ff00]";
  } else if (color === "yellow") {
    borderColor = "from-[#f8e42e] to-[#ff7d54]";
    gradientColor = "from-[#f8e42e26] to-[#ff7d5426]";
  } else if (color === "purple") {
    borderColor = "from-[#a258f7] to-[#5a2fb3]";
    gradientColor = "from-[#7e3ff540] to-[#7e3fef00]";
  } else {
    borderColor = "from-[#d83333] to-[#f041ff]";
    gradientColor = "from-[#d8333333] to-[#f041ff33]";
  }
  return (
    <article className="flex-shrink cursor-pointer rounded-3xl bg-gradient-to-tr from-gray-950 to-slate-800 border border-gray-900 flex flex-col items-center justify-center p-6 shadow-xl hover:scale-105 transition-all duration-300 max-w-xl">
      <div>
        <div
          className={`size-fit rounded-full p-0.5 lg:p-[3px] bg-gradient-to-l ${borderColor}`}
        >
          <div className="size-12 lg:size-14 flex flex-col items-center justify-center overflow-visible text-center bg-black text-white rounded-full">
            <div
              className={`size-full flex flex-col items-center justify-center overflow-visible text-center bg-gradient-to-br ${gradientColor} rounded-full`}
            >
              <i className={`${icon} text-3xl`} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-0 text-center ">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
    </article>
  );
}

export default function AboutMe() {
  return (
    <>
      <div className="z-10 w-2/4 h-60 md:w-4/5 blur-[200px] top-0 md:h-20 rounded-full bg-[#7510f892] absolute pointer-events-none select-none"></div>
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
            <p className="mt-6 text-xl text-gray-300">
              +4 Años de experiencia.{" "}
              <strong className="text-yellow-200">Programador y Diseñador Web</strong> de <strong>Ensenada, Puerto Varas</strong>.
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
      <div className="my-4 mx-auto w-3/4 place-content-center rounded-full border-t border-borderdark"></div>
      <section className="my-20 xs:p-6 mx-auto w-full max-w-screen-xl space-y-8 p-4 sm:p-12">
        <div className="bg-gradient-to-l mt-10 from-[#40d4de38] to-[#7833a941] w-3/4  absolute -z-10 rotate-[-7deg] blur-[200px] rounded-full h-1/4"></div>
        <div className="space-y-1 z-10 flex flex-col items-center justify-center text-center">
          <span className="bg-clip-text md:text-lg text-transparent bg-gradient-to-br from-[#d83333] to-[#f041ff] font-semibold">
            <strong>2020:</strong> Gracias a la pandemia
          </span>
          <h2 className="max-w-screen-lg text-balance text-2xl font-normal font-heading md:text-3xl xl:text-4xl md:leading-tight">
            Aprendí a utilizar nuevas tecnologías de manera{" "}
            <strong>autodidacta</strong>.
          </h2>
          <div className="pt-10 sm:pt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-12">
            <span
              className="cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col items-center font-medium justify-center text-center gap-1"
              target="_blank"
              href="https://nodejs.org/es/"
            >
              <img
                className="size-24"
                src="/img/icons/nodejs.svg"
                alt="Logo de Node.js"
              />
              Node.js
            </span>
            <span
              className="cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col items-center font-medium justify-center text-center gap-1"
              href="https://developer.mozilla.org/es/docs/Web/HTML"
              target="_blank"
            >
              <img
                className="size-24"
                src="/img/icons/html.svg"
                alt="Logo de HTML"
              />
              HTML5
            </span>
            <span
              className="cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col items-center font-medium justify-center text-center gap-1"
              href="https://developer.mozilla.org/es/docs/Web/CSS"
              target="_blank"
            >
              <img
                className="size-24"
                src="/img/icons/css.svg"
                alt="Logo de CSS"
              />
              CSS3
            </span>
            <span
              className="cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col items-center font-medium justify-center text-center gap-1"
              href="https://developer.mozilla.org/es/docs/Web/JavaScript"
              target="_blank"
            >
              <img
                className="size-24"
                src="/img/icons/js.svg"
                alt="Logo de JavaScript"
              />
              JavaScript
            </span>
          </div>
        </div>
      </section>
      <section className="my-20 xs:p-6 mx-auto w-full max-w-screen-xl space-y-8 p-4 sm:p-12">
        <div className="space-y-1 z-10 flex flex-col items-center justify-center text-center">
          <span className="bg-clip-text md:text-lg text-transparent bg-gradient-to-br from-[#d87533] to-[#ff6741] font-bold">
            Con el tiempo desarrollé nuevas habilidades...
          </span>
          <div className="p-6 flex flex-wrap items-center justify-center gap-14">
            <HabilidadCard
              img={"/img/emojis/laptop.svg"}
              title={"Diseño Web"}
              description="El arte de Diseñar Interfaces Web"
            />
            <HabilidadCard
              img={"/img/emojis/dev.svg"}
              title={"Lógica de Programación"}
              description="Problema = Solución"
            />
            <HabilidadCard
              img={"/img/emojis/www.svg"}
              title={"Marketing Digital"}
              description="La principal herramienta del siglo XXI"
            />
          </div>
        </div>
      </section>
      <div className="my-4 mx-auto w-3/4 place-content-center rounded-full border-t border-borderdark"></div>
      <section className="my-20 xs:p-6 mx-auto w-full max-w-screen-xl space-y-8 p-4 sm:p-12">
        <div className="bg-gradient-to-l mt-10 from-[#4040de48] to-[#a333a943] w-3/4  absolute -z-10 rotate-[-7deg] blur-[200px] rounded-full h-1/4"></div>
        <div className="space-y-1 z-10 flex flex-col items-center justify-center text-center">
          <span className="bg-clip-text md:text-lg text-transparent bg-gradient-to-b from-brand to-purple-300 font-semibold">
            <strong>2024:</strong> En la actualidad...
          </span>
          <h2 className="max-w-screen-lg text-balance text-2xl font-normal font-heading md:text-3xl xl:text-4xl md:leading-tight">
            Ayudo a <strong>emprendedores y empresas de Ensenada y Puerto Varas</strong> a mejorar su presencia online
          </h2>
          <div className="p-6 flex flex-wrap items-center justify-center gap-14">
            <FeatureCard
              color="purple"
              title="Páginas web a un Precio Accesible y Flexible"
              description="Ofrezco páginas web de alta calidad y con las últimas tecnologías, a un precio accesible mediante pagos flexibles."
              icon="fa-solid fa-laptop"
            />
            <FeatureCard
              color="yellow"
              title="Campañas de Publicidad"
              description="Gestiono campañas de publicidad para que tu negocio alcance el mayor número de personas y así aumentar tus ventas."
              icon="fa-solid fa-ranking-star"
            />
            <FeatureCard
              color="blue"
              title="Identidad de Marca"
              description="Ayudo a que tu negocio demuestre su personalidad, mediante una identidad de marca firme y atractiva, destacandote de la competencia."
              icon="fa-regular fa-gem"
            />
          </div>
        </div>
      </section>
      <div className="my-4 mx-auto w-3/4 place-content-center rounded-full border-t border-borderdark"></div>
      <section className="my-20 sm:mt-36 mx-auto w-full max-w-screen-xl px-4 sm:px-8">
      <div className="bg-gradient-to-l mt-20 from-[#4040dea9] to-[#a333a9ba] w-3/4 absolute -z-10 rotate-[-7deg] blur-[200px] rounded-full h-1/4"></div>
        <article className="flex items-center justify-center">
          <div className="overflow-hidden w-full rounded-2xl border-y-[0.5px] border-[#858b9833] bg-cover bg-center bg-[url('/img/final-cta.webp')]">
            <div className="flex flex-col items-center justify-center text-center overflow-visible h-3/4 min-h-[24rem] gap-8 lg:gap-12 p-8 md:p-20 xl:min-h-[40rem] lg:p-40 bg-black bg-opacity-40">
              <h2 className="text-balance text-2xl md:text-3xl xl:text-5xl font-heading font-bold">
                ¿Tienes un proyecto en mente?
              </h2>
                <a
                  className="hover:scale-105 rounded-full shadow-xl border border-gray-600 bg-gradient-to-tr from-brand to-cyan-400 text-xl md:text-2xl font-bold py-2 px-6 transition-all duration-300 text-center"
                  href="https://wa.me/56965926195"
                  target="_blank"
                >
                  Contáctame
                </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

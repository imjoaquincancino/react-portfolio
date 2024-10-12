import { ArrowDown } from "lucide-react";
export function About() {
  return (
    <section
      id="about"
      className="bg-[#001] text-black w-full flex justify-center"
      style={{
        background:
          "url('/img/bg-pattern.png') center/cover repeat, linear-gradient(to bottom, #001, #004)",
      }}
    >
      <div className="flex items-center justify-between flex-col px-6 gap-10 py-36 container w-3/4">
        <img className="size-2/4 md:size-1/4" src="/img/logo.png" alt="" />
        <aside className="grid text-center gap-6 md:gap-6 md:w-2/4">
          <h2 className="text-3xl font-semibold text-gray-100 adlam-display-family">
            <span className="waving-hand">👋</span> Hola, soy Joaquín.
          </h2>
          <p className="text-xl text-gray-300 leading-8">
            Empecé a programar hace 4 años, durante la pandemia del 2020. Con
            mis conocimientos y habilidades ahora ayudo a emprendedores y
            empresas locales en Puerto Varas y Ensenada a mejorar su presencia
            online con sitios web modernos, adaptados a sus necesidades y a{" "}
            <strong className="text-gray-200">precios accesibles</strong>.
          </p>
        </aside>
        <a className="page-scroll p-3 text-white" href="#beneficios">
          <ArrowDown className="mt-16 size-10 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

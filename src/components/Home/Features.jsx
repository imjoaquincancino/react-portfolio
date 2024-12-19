/* eslint-disable react/prop-types */
import features from "../../utils/features";

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
    <article className="rounded-3xl bg-gradient-to-tr from-gray-900 to-slate-800 border border-gray-700 flex flex-col items-center justify-center p-4 shadow-xl hover:scale-105 transition-all duration-300">
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

export function Features() {
  return (
    <section
      id="beneficios"
      className="mt-20 sm:mt-32 xs:p-6 mx-auto w-full max-w-screen-xl space-y-8 p-4 sm:p-12"
    >
      <div className="bg-gradient-to-l from-[#40d6de25] to-[#334ba94c] w-3/4  absolute -z-10 rotate-[-7deg] blur-[160px] rounded-full h-72 lg:h-80"></div>
      <div className="space-y-1 z-10">
        <span className="bg-clip-text md:text-lg text-transparent bg-gradient-to-br from-[#d83333] to-[#f041ff] font-semibold">
          ¿Para qué una página web?
        </span>
        <h2 className="max-w-screen-lg text-balance text-2xl font-normal font-heading md:text-3xl xl:text-4xl md:leading-tight">
          Para atraer más clientes, <strong>vender más</strong> y llevar tu
          negocio al siguiente nivel.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-6 z-10">
        {features.map((feature) => {
          const featureKey = feature.name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/ /g, "-");
          return (
            <FeatureCard
              key={featureKey}
              title={feature.name}
              icon={feature.icon}
              description={feature.description}
              color={feature.color}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Features;

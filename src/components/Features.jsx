/* eslint-disable react/prop-types */
import features from "../utils/features";

function FeatureCard({img, title, description}) {
  return (
    <article className="flex flex-col items-center space-y-4 text-center border border-[#111C2D] bg-[#0B1422] p-5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500">
      <img className="h-12 w-12" src={img} alt="Emoji" />
      <h3 className="text-xl font-bold text-gray-50">
        {title}
      </h3>
      <p className="prose text-gray-300">{description}</p>
    </article>
  );
}

export function Features () {
    return (
        <section
          id="beneficios"
          className="text-white w-full py-16 md:px-16 px-8"
          style={{
            background: "linear-gradient(to bottom, #004, #008)",
          }}
        >
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-white">
            Beneficios de mi servicio
          </h2>
          <div className="container mx-auto grid gap-10 sm:grid-cols-2">
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
                  img={feature.img}
                  description={feature.description}
                />
              );
            })}
          </div>
        </section>
    )
}

export default Features;
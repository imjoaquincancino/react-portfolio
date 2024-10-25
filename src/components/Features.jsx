import features from "../utils/features";
import Feature from "../components/Feature";

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
                <Feature
                  key={featureKey}
                  title={feature.name}
                  img={feature.img}
                  description={feature.description}
                ></Feature>
              );
            })}
          </div>
        </section>
    )
}

export default Features;
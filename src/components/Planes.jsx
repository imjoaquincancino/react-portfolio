import packages from "../utils/packages";
import PlanCard from "../components/Plan";

export function Planes () {
    return (
        <section
          id="planes"
          className="w-full py-12 md:py-24 lg:py-32 "
          style={{
            background: "linear-gradient(to bottom, #7610F8, #000F1D)",
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-col mb-14 text-center">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white adlam-display-family">
                Planes de Diseño Web
              </h2>
              <h3 className="text-yellow-500 font-bold mt-3 adlam-display-family">
                <a href="/#plan-economico">
                  ¡Ofertas especiales para primeros clientes!
                </a>
              </h3>
            </div>
            <div className="grid gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 blue">
              {packages.map((pkg) => (
                <PlanCard
                  key={pkg.name
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")}
                  name={pkg.name}
                  beforePrice={pkg.beforePrice}
                  best={pkg.best}
                  color={pkg.color}
                  description={pkg.description}
                  example={pkg.example}
                  features={pkg.features}
                  mantenimiento={pkg.mantenimiento}
                  price={pkg.price}
                  wspLink={pkg.wspLink}
                />
              ))}
            </div>
          </div>
        </section>
    )
}

export default Planes;
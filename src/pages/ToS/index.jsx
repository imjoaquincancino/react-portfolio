import { Helmet } from "react-helmet";

export default function ToS() {
  const lastModified = new Date("2025-01-06").toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Helmet>
        <title>Términos y Condiciones del Servicio | Joaquín Cancino</title>
      </Helmet>
      <div className="min-h-screen py-20 px-4 md:px-20">
        <div className="max-w-4xl mx-auto shadow-md rounded-lg p-8 [&>section>h2]:text-gray-200 [&>section>p]:text-gray-400">
          <h1 className="text-4xl font-bold text-white mb-3 text-center">
            Términos y Condiciones del Servicio
          </h1>

          <p className="text-gray-300 text-lg mb-12 text-center">
            Bienvenido/a a nuestro servicio de Diseño Web y Marketing Digital.
            Por favor, lea detenidamente los siguientes Términos y Condiciones
            antes de utilizar nuestros servicios.{" "}
            <strong>
              Al contratar nuestros servicios, usted acepta estos términos en su
              totalidad.
            </strong>
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Alcance del Servicio
            </h2>
            <p>
              Ofrecemos servicios de diseño y desarrollo de páginas web
              adaptados a las necesidades de nuestros clientes. Esto incluye,
              pero no se limita a, diseño gráfico, optimización para motores de
              búsqueda (SEO) y soporte técnico (mantenimiento) durante el
              período acordado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Obligaciones del Cliente
            </h2>
            <p>
              El cliente se compromete a proporcionar toda la información
              necesaria para el desarrollo del proyecto, incluyendo textos,
              imágenes, logotipos y cualquier otro material relevante. El
              cliente debe asegurarse de que posee los derechos necesarios para
              utilizar dicho contenido.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Condiciones de Pago
            </h2>
            <p>
              Los pagos se realizarán en las etapas acordadas previamente. El
              cliente deberá abonar un adelanto (generalmente 1/3 o 1/2 del
              total) antes de iniciar el proyecto. El saldo restante será pagado
              una vez finalizado el proyecto y antes de la entrega final.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Derechos de Propiedad Intelectual
            </h2>
            <p>
              Todos los derechos de propiedad intelectual relacionados con el
              diseño y desarrollo del proyecto serán transferidos al cliente una
              vez que se haya realizado el pago completo. Nos reservamos el
              derecho de incluir capturas de pantalla del proyecto en nuestro
              portafolio y/o redes sociales para fines promocionales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Limitación de Responsabilidad
            </h2>
            <p>
              No seremos responsables de errores derivados de información
              incorrecta proporcionada por el cliente ni de problemas técnicos
              que surjan de proveedores externos, como servidores de hosting o
              dominios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. Modificaciones y Reembolsos
            </h2>
            <p>
              Cualquier modificación fuera del alcance del plan de mantenimiento
              de su página web estará sujeta a cargos adicionales. Los
              reembolsos no serán emitidos una vez que el proyecto haya sido
              aprobado y entregado al cliente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Confidencialidad</h2>
            <p>
              Toda la información proporcionada por el cliente será tratada con
              estricta confidencialidad y no será compartida con terceros sin el
              consentimiento explícito del cliente, salvo que sea requerido por
              ley o fuerzas mayores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              8. Aceptación de los Términos
            </h2>
            <p>
              Al contratar nuestros servicios, usted reconoce haber leído,
              comprendido y aceptado estos Términos y Condiciones. Nos
              reservamos el derecho de modificar estos términos en cualquier
              momento, mostrando la fecha de ultima edición en la parte inferior
              de esta página.
            </p>
          </section>

          <div className="mt-20 place-items-center">
            <img
              className="h-28"
              src="/img/logo-white.webp"
              alt="Joaquín Cancino Logo"
              loading="lazy"
            />
          </div>
          <div className="text-center mt-10 text-gray-400 italic">
            Última modificación: {lastModified}
          </div>
        </div>
      </div>
    </>
  );
}

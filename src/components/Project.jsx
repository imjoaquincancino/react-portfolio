/* eslint-disable react/prop-types */
export function Project({ name, description, url, img }) {
  return (
    <article className="rounded-lg border border-gray-700 bg-gray-800 text-gray-100 shadow-sm">
      <div className="p-4">
        <a href={url} target="_blank">
          <img
            src={img}
            alt="`Diseño web realizado por Joaquín Cancino para {name}`"
            className="w-auto h-auto object-cover rounded-lg"
          />
        </a>
        <h3 className="mt-4 text-xl font-bold">{name}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
        <a
          href={url}
          className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-gray-700 text-white hover:bg-gray-700 h-10 py-2 px-4"
          target="_blank"
        >
          Ver Detalles{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 h-4 w-4"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </article>
  );
}

export default Project;

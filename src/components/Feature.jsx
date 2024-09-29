/* eslint-disable react/prop-types */
export function Feature({img, title, description}) {
  return (
    <article className="flex flex-col items-center space-y-4 text-center bg-white p-6 rounded-lg shadow-xl">
      <img className="h-12 w-12" src={img} alt="Emoji" />
      <h3 className="text-xl font-bold text-gray-900">
        {title}
      </h3>
      <p className="prose text-gray-600">{description}</p>
    </article>
  );
}

export default Feature;

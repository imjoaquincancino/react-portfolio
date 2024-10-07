/* eslint-disable react/prop-types */
export function Feature({img, title, description}) {
  return (
    <article className="flex flex-col items-center space-y-4 text-center bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500">
      <img className="h-12 w-12" src={img} alt="Emoji" />
      <h3 className="text-xl font-bold text-gray-50">
        {title}
      </h3>
      <p className="prose text-gray-200">{description}</p>
    </article>
  );
}

export default Feature;

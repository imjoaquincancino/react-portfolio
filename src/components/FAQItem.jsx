/* eslint-disable react/prop-types */
export default function FAQItem ({ item, isOpen, toggleOpen }) {
    return (
      <li className="rounded-2xl bg-gradient-to-tr from-gray-900 to-slate-800 border border-gray-800 w-full">
        <button
          className="flex justify-between items-center w-full text-left p-4"
          onClick={toggleOpen}
        >
          <span className="text-lg font-medium text-white w-[80%]">
            {item.question}
          </span>
          <svg
            className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ease-in-out ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`bg-[#0b1422] text-gray-400 overflow-hidden rounded-b-2xl transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p
            className="text-left prose-li:list-disc prose-li:list-inside max-w-3xl p-4"
            dangerouslySetInnerHTML={{ __html: item.answer }}
          ></p>
        </div>
      </li>
    );
  };
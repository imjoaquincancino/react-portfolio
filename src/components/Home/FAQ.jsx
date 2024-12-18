/* eslint-disable react/prop-types */
import React, { useState } from "react";
import faqs from "../../utils/faq";

const FAQItem = ({ item, isOpen, toggleOpen }) => {
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section
      id="faq"
      className="mt-20 sm:mt-32 xs:p-6 mx-auto w-full max-w-screen-xl space-y-8 p-4 sm:p-12"
    >
      <div className="px-4">
        <div className="flex flex-col mb-14 text-center">
          <div className="space-y-1 z-10 sm:flex flex-col sm:justify-center sm:items-center">
            <span className="bg-clip-text text-xl md:text-2xl text-transparent bg-gradient-to-br from-[#d83333] to-[#f041ff] font-semibold">
              Resolvamos tus dudas
            </span>
            <h2 className="max-w-screen-lg text-balance text-4xl font-bold font-heading md:text-5xl md:leading-tight">
              Preguntas Frecuentes
            </h2>
          </div>
          <ul className="flex flex-col gap-y-4 max-w-screen-md mx-auto mt-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                item={faq}
                isOpen={openIndex === index}
                toggleOpen={() => toggleOpen(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

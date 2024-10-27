/* eslint-disable react/prop-types */
import React, { useState } from "react";
import faqs from "../utils/faq";

const FAQItem = ({ item, isOpen, toggleOpen }) => {
  return (
    <li className="rounded-2xl bg-[#0D1828] border border-line border-[#111c2d] w-full">
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
        <p className="text-left max-w-xl p-4">
          {item.answer} {item.url ? <a className="text-brandlight font-semibold" href={item.url}>Saber más...</a> : ""}
        </p>
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
      className="w-full py-12 md:py-24 lg:py-32 "
      style={{
        background: "#000F1D",
      }}
    >
      <div className="px-4">
        <div className="flex flex-col mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-6xl text-white">
            Preguntas frecuentes
          </h2>
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

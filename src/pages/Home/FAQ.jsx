import React, { useState } from "react";
import faqs from "../../utils/faq";

import FAQItem from "../../components/FAQItem";

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

import React, { useState } from "react";

export default function CTAend() {
  return (
    <>
      <div className="my-4 w-full border-t border-borderdark"></div>
      <section className="my-20 sm:mt-36 mx-auto w-full max-w-screen-xl px-4 sm:px-8">
        <article className="flex items-center justify-center">
          <div className="overflow-hidden w-full rounded-2xl border-y-[0.5px] border-[#858b9833] bg-cover bg-center bg-[url('/img/final-cta.webp')]">
            <div className="flex flex-col items-center justify-center text-center overflow-visible h-3/4 min-h-[24rem] gap-8 lg:gap-12 p-8 md:p-20 xl:min-h-[40rem] lg:p-40 bg-black bg-opacity-40">
              <h2 className="text-balance text-xl md:text-2xl xl:text-4xl font-heading font-bold">
                No le tengas miedo al éxito
              </h2>
              <div className="grid grid-rows-2 gap-4">
                <a
                  className="rounded-full shadow-xl border border-gray-600 bg-gradient-to-tr from-brand to-cyan-400 text-xl md:text-2xl font-bold py-2 px-6  hover:scale-105 transition-all duration-300 text-center"
                  href="#planes"
                >
                  Quiero dar el salto
                </a>
                <a
                  className="rounded-2xl border text-lg md:text-xl font-medium py-2 px-4 hover:scale-105 transition-all duration-300 hover:bg-white hover:bg-opacity-30 text-center"
                  target="_blank"
                  href="https://wa.me/56965926195"
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

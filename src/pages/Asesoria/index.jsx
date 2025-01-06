import React from "react";
import { InlineWidget } from "react-calendly";

export default function Asesoria() {
  return (
    <main className="flex flex-col items-center justify-center h-screen mt-28">
      <div className="text-center flex flex-col items-center gap-2 w-full">
        <h1 className="text-5xl font-bold">Asesorías Personalizadas</h1>
        <p>¿No sabes qué plan de Diseño Web elegir? Resolvamos tus dudas en una reunión.</p>
        <div className="w-full mt-6 md:w-1/2">
          <InlineWidget url="https://calendly.com/joaquincancino/asesoria-personalizada-gratuita" />
        </div>
      </div>
    </main>
  );
}

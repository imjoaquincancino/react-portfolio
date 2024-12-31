import React from "react";
import { InlineWidget } from "react-calendly";

export function Calendario () {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-2xl p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
          ¡Reserva tu reunión gratuita!
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Selecciona el horario que mejor se adapte a ti y discutamos cómo
          puedo ayudarte.
        </p>
        <InlineWidget url="https://calendly.com/joaquincancino/asesoria-personalizada-gratuita" />
      </div>
    </div>
  );
};


export default function Asesoria () {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Asesorías personalizadas</h1>
            <Calendario />
        </main>
    )
}
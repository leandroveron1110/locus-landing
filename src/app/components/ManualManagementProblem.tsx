"use client";
import React from "react";
import { Clock, MessageSquare, MapPin, BarChart2 } from "lucide-react";

export const ManualManagementProblem: React.FC = () => {
  return (
    <section className="px-4 mt-16 py-16 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          ¿Todavía gestionás tus pedidos de forma manual?
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          WhatsApp, llamadas y planillas pueden parecer prácticos, pero esconden
          un <strong>costo oculto</strong>: tiempo, errores y oportunidades
          perdidas. Con Locus, todo tu flujo de ventas se automatiza.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Problema 1: Tiempo Perdido */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500 transform transition duration-300 hover:scale-[1.02]">
          <Clock className="w-8 h-8 text-red-500 mb-3" />
          <h3 className="font-bold text-lg text-gray-800 mb-2">
            Tiempo en la Toma de Pedido
          </h3>
          <p className="text-gray-600 text-sm">
            Tu equipo dedica valiosas horas a tomar, confirmar y transcribir
            pedidos por mensaje. <strong>Tiempo que no estás vendiendo.</strong>
          </p>
        </div>

        {/* Problema 2: Errores y Caos */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500 transform transition duration-300 hover:scale-[1.02]">
          <MessageSquare className="w-8 h-8 text-red-500 mb-3" />
          <h3 className="font-bold text-lg text-gray-800 mb-2">
            Errores en la Comunicación
          </h3>
          <p className="text-gray-600 text-sm">
            Confusión en sabores, talles, precios o direcciones mal escritas
            generan <strong>devoluciones y clientes frustrados.</strong>
          </p>
        </div>

        {/* Problema 3: Logística Imposible */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500 transform transition duration-300 hover:scale-[1.02]">
          <MapPin className="w-8 h-8 text-red-500 mb-3" />
          <h3 className="font-bold text-lg text-gray-800 mb-2">
            Logística Sin Control
          </h3>
          <p className="text-gray-600 text-sm">
            Coordinar envíos y cadeterías manualmente es un cuello de botella
            que <strong>limita tu capacidad de crecimiento.</strong>
          </p>
        </div>

        {/* Problema 4: Datos Cero */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500 transform transition duration-300 hover:scale-[1.02]">
          <BarChart2 className="w-8 h-8 text-red-500 mb-3" />
          <h3 className="font-bold text-lg text-gray-800 mb-2">
            No Conocés a tu Cliente
          </h3>
          <p className="text-gray-600 text-sm">
            Al no tener un registro centralizado,{" "}
            <strong>no podés fidelizar</strong>, saber qué vendés más o crear
            promociones efectivas.
          </p>
        </div>
      </div>

      {/* CTA de transición */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800">
          Locus transforma este caos en eficiencia y ventas.
        </h3>
        <p className="text-lg text-gray-600 mt-2">
          Descubrí la diferencia de una plataforma diseñada para que el 100% de
          tu margen sea tuyo.
        </p>
      </div>
    </section>
  );
};

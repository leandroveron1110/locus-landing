"use client";
import React from "react";
import { Globe, Smile, TrendingUp, ShieldCheck } from "lucide-react";

export const MoreThanCommissions: React.FC = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Más Allá de las Comisiones
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Locus no solo elimina los costos ocultos — también te libera del
          estrés diario de gestionar pedidos y depender de redes sociales.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Beneficio 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#9e2d49] transform transition duration-300 hover:scale-[1.02]">
          <Globe className="w-8 h-8 text-[#9e2d49] mb-3" />
          <h3 className="font-bold text-lg text-gray-800 mb-2">
            Sin redes, sin algoritmos
          </h3>
          <p className="text-gray-600 text-sm">
            Los clientes te encuentran directamente en la plataforma, sin
            depender de la publicidad o los algoritmos de las redes.
          </p>
        </div>

        {/* Beneficio 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#9e2d49] transform transition duration-300 hover:scale-[1.02]">
          <Smile className="w-8 h-8 text-[#9e2d49] mb-3" />
          <h3 className="font-bold text-lg text-gray-800 mb-2">
            Sin estrés operativo
          </h3>
          <p className="text-gray-600 text-sm">
            Automatizá los pedidos, los envíos y las notificaciones en segundos.
            Más organización, menos mensajes y llamadas.
          </p>
        </div>

        {/* Beneficio 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#9e2d49] transform transition duration-300 hover:scale-[1.02]">
          <TrendingUp className="w-8 h-8 text-[#9e2d49] mb-3" />
          <h3 className="font-bold text-lg text-gray-800 mb-2">
            Conocé a tus clientes
          </h3>
          <p className="text-gray-600 text-sm">
            Accedé a estadísticas y feedback reales para mejorar tus productos,
            promociones y fidelizar clientes.
          </p>
        </div>

        {/* Beneficio 4 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#9e2d49] transform transition duration-300 hover:scale-[1.02]">
          <ShieldCheck className="w-8 h-8 text-[#9e2d49] mb-3" />
          <h3 className="font-bold text-lg text-gray-800 mb-2">
            Más tiempo para crecer
          </h3>
          <p className="text-gray-600 text-sm">
            Enfocate en hacer crecer tu negocio mientras Locus se encarga de lo
            operativo y repetitivo.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800">
          Locus es más que ahorro: es control, tiempo y crecimiento.
        </h3>
        <p className="text-lg text-gray-600 mt-2">
          Diseñado para que tu negocio local tenga las mismas ventajas que una
          gran marca — sin perder independencia.
        </p>
      </div>
    </section>
  );
};

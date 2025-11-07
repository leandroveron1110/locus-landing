"use client";
import React from "react";
// Íconos actualizados para mayor claridad
import { Eye, TrendingUp, Users, ShoppingBag, BarChart2 } from "lucide-react";

export const CommunityGrowthSection: React.FC = () => {
  return (
    <section className="px-4 mt-16 py-16 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      {/* 👑 Encabezado Mejorado: Más directo y con foco en el resultado */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#9e2d49]">
          La Potencia de la Red
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">
          Multiplica tus <span className="text-[#9e2d49]">Ventas</span> con el
          Efecto Locus
        </h2>
        <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto">
          Locus no es solo una plataforma, es una red de negocios locales que se
          impulsan mutuamente. Cada nuevo comercio que se une, amplía el alcance
          y atrae más pedidos para <strong>todos</strong>.
        </p>
      </div>

      {/* 💎 Cards de Beneficios: Ahora 4 puntos clave para mayor detalle */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Beneficio 1: Visibilidad a clientes existentes */}
        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 shadow-md border-t-4 border-[#9e2d49]/70 transition duration-300 hover:shadow-xl hover:bg-white">
          <Eye className="w-10 h-10 text-[#9e2d49] mb-4" />
          <h3 className="font-bold text-xl text-gray-800 mb-2">
            Clientes en Red
          </h3>
          <p className="text-gray-600 text-base">
            Tu negocio se expone automáticamente a miles de clientes que ya
            compran en <strong>otros</strong> comercios de la plataforma.
          </p>
        </div>

        {/* Beneficio 2: Crecimiento y Demanda Colectiva */}
        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 shadow-md border-t-4 border-[#9e2d49]/70 transition duration-300 hover:shadow-xl hover:bg-white">
          <TrendingUp className="w-10 h-10 text-[#9e2d49] mb-4" />
          <h3 className="font-bold text-xl text-gray-800 mb-2">
            Efecto Imán de Pedidos
          </h3>
          <p className="text-gray-600 text-base">
            Cuantos más negocios, más variedad y más gente usa la app. Es un
            círculo virtuoso:{" "}
            <strong>más tráfico = más pedidos para ti.</strong>
          </p>
        </div>

        {/* Beneficio 3: Enfocado en la comunidad y lo local */}
        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 shadow-md border-t-4 border-[#9e2d49]/70 transition duration-300 hover:shadow-xl hover:bg-white">
          <Users className="w-10 h-10 text-[#9e2d49] mb-4" />
          <h3 className="font-bold text-xl text-gray-800 mb-2">Fuerza Local</h3>
          <p className="text-gray-600 text-base">
            Una plataforma 100% de Concepción para impulsar la economía de la
            ciudad. Únete a panaderías, cafeterías y tiendas que te dan apoyo.
          </p>
        </div>

        {/* Beneficio 4: Más allá de las ventas (Fidelización) */}
        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 shadow-md border-t-4 border-[#9e2d49]/70 transition duration-300 hover:shadow-xl hover:bg-white">
          <ShoppingBag className="w-10 h-10 text-[#9e2d49] mb-4" />
          <h3 className="font-bold text-xl text-gray-800 mb-2">
            Fidelización Cruzada
          </h3>
          <p className="text-gray-600 text-base">
            El cliente que pide una pizza hoy, mañana puede descubrir y pedir tu
            producto. La red facilita la retención y el crecimiento orgánico.
          </p>
        </div>
      </div>

      {/* --- BLOQUE DESTACADO con la Demanda (Más impactante) --- */}
      <div className="mt-16 mx-4 sm:mx-6 md:mt-20 max-w-5xl md:mx-auto bg-[#9e2d49] text-[#feffd5] p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden transform transition duration-500 hover:shadow-3xl hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9e2d49] via-[#7f1e3b] to-[#450c1f] opacity-90 rounded-3xl" />
        <div className="relative z-10 text-center">
          {/* Ícono más pequeño en móvil */}
          <BarChart2 className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-4 md:mb-5 text-[#feffd5]" />

          <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#fff1c4] mb-1">
            Dato Clave de Concepción
          </p>

          {/* Título más pequeño en móvil */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 md:mb-4 leading-tight">
            La Demanda{" "}
            <span className="text-white border-b-2 border-white">
              Ya Existe
            </span>
            .
          </h3>

          {/* Texto de cantidad más pequeño en móvil */}
          <p className="text-base sm:text-xl md:text-2xl font-semibold text-[#fff7e0] max-w-3xl mx-auto">
            Más de {/* Cifra destacada, tamaño ajustado */}
            <strong className="text-white text-3xl sm:text-4xl md:text-5xl">
              2.700 personas
            </strong>{" "}
            en tu ciudad están listas para usar una plataforma local de pedidos
            online.
          </p>

          {/* Mensaje final ajustado */}
          <p className="text-base sm:text-xl mt-4 text-[#fff1c4]">
            <strong>Únete ahora y sé la respuesta a esta necesidad.</strong>
          </p>

          {/* Botón CTA */}
          <a
            href="#agendar"
            className="inline-block mt-6 sm:mt-8 bg-[#feffd5] text-[#210110] font-bold text-base sm:text-lg py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-xl hover:bg-white transition transform hover:scale-105"
          >
            Quiero sumar mi negocio
          </a>
        </div>
      </div>

      {/* CTA final (refinado) */}
      <div className="mt-16 text-center max-w-4xl mx-auto">
        <h3 className="text-3xl font-extrabold text-gray-900">
          Dejemos de competir, empecemos a crecer juntos.
        </h3>
        <p className="text-xl text-gray-600 mt-4">
          La mejor estrategia de crecimiento es la que beneficia a todos.
          <strong>
            Únete a Locus y aprovecha el poder de la red para tus ventas.
          </strong>
        </p>
      </div>
    </section>
  );
};

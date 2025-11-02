// ./components/Hero.tsx
import React from "react";
import { ArrowRight, CalendarCheck, Zap } from "lucide-react";
import img from "../../../public/fondo.png";
import logo from "../../../public/favicon.svg";

export const Hero: React.FC = () => (
  <section className="pt-4 pb-5 sm:pt-10 sm:pb-5 px-4 mb-10 ">
    {/* Titulo */}
    <div className="text-center sm:text-left mb-10">
      <h1
        className="font-mono text-center text-5xl sm:text-6xl md:text-7xl font-extrabold 
               text-[#242323] leading-tight 
               [text-shadow:_4px_4px_0_#c6b89e,_8px_8px_0_#feffd5]"
      >
        Locus
      </h1>
    </div>

    <div className="sm:px-0">
      <p className="inline-flex items-center space-x-2 px-3 py-1 bg-red-100 text-red-700 text-xs sm:text-sm font-semibold uppercase rounded-full tracking-wider mb-4 shadow-sm">
        <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="text-xs ">Revolución sin comisiones</span>
      </p>
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#DD0C21] leading-tight sm:leading-[1.1]">
          Eliminá las comisiones.
          {/* <span className="text-2xl sm:text-3xl md:text-4xl text-[#DD0C21] block">
          </span> */}
        </h2>
        <div className="grid md:grid-cols-2 gap-12  mx-auto">
          {/* Columna 1: Descripción (Visible en todas las vistas) */}
          <div className="mb-10  sm:text-left px-0 sm:px-0 md:text-left">
            {/* Título de Impacto */}
            <h3 className="mt-3 text-3xl sm:text-5xl font-bold text-[#242323]">
              Multiplicá tu ganancia
            </h3>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
              <strong>Locus</strong> te libera de los porcentajes por venta.
              Pagás una tarifa <strong>fija y transparente</strong> que aumenta
              solo cuando tu negocio alcanza nuevos umbrales de facturación — no
              por cada pedido.
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-tr from-[#F5F8EB] to-[#E6E9D5] flex items-center justify-center rounded-3xl shadow-xl transform transition duration-500 hover:scale-105">
              <img
                src={logo.src}
                alt="Logo de Locus"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>

          {/* <div className="hidden md:flex items-center justify-center p-4">
  <div
    className="w-[250px] h-[250px] bg-[#000] shadow-lg flex items-center justify-center
    [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]
    transition-transform duration-500 hover:scale-105"
  >
    <span className="text-5xl font-extrabold text-[#000]">L</span>
  </div>
</div> */}
        </div>
      </div>
    </div>

    <section className="grid md:grid-cols-2 gap-12 items-center ">
      <div className="w-full h-96 shadow-none lg:shadow-2xl overflow-hidden bg-[#F5F8EB] flex items-center justify-center order-1 lg:order-1 lg:rounded-3xl">
        <img
          src={img.src}
          alt="Logo de Locus - Tu plataforma sin comisiones"
          className="h-full w-auto object-contain p-8"
        />
      </div>

      <div className="order-2 lg:order-2 px-4">
        {/* Frase de Valor Destacada con la NUEVA INFORMACIÓN */}
        <h2 className="mt-1 text-2xl font-bold text-[#1E931E] flex items-center space-x-3">
          {/* <Coins className="w-6 h-6 flex-shrink-0" /> */}
          <span className="border-b-2 border-[#00EA00] pb-1">
            Escalá sin costos crecientes y con <strong>Visibilidad Pura</strong>
            .
          </span>
        </h2>

        {/* TEXTO DE LOGÍSTICA CORREGIDO: Enfatiza la integración y la elección */}
        <p className="mt-4 text-lg font-medium text-[#242323]">
          Locus está diseñado para que tu negocio o emprendimiento crezca:
          conectamos con cadeterías locales para que tu cliente siempre tenga la
          mejor opción.
        </p>

        {/* Botones CTA */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#como-funciona"
            // Ajustes: text-lg, font-semibold (menos grueso), y padding ajustado
            className="flex items-center space-x-3 bg-[#1E931E] text-white px-5 py-3 rounded-xl font-semibold text-lg shadow-xl transition duration-300 transform hover:scale-[1.03] hover:bg-[#00EA00]"
          >
            <span>Conocé el modelo</span>
            {/* Icono reducido de w-6 h-6 a w-5 h-5 */}
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#agendar"
            // Ajustes: text-lg, font-semibold, y padding ajustado
            className="flex items-center space-x-3 border-2 border-[#DD0C21] text-[#DD0C21] px-5 py-3 rounded-xl font-semibold text-lg transition duration-300 hover:bg-red-50"
          >
            {/* Icono reducido de w-6 h-6 a w-5 h-5 */}
            <CalendarCheck className="w-5 h-5" />
            <span>Agendá una demo</span>
          </a>
        </div>
      </div>
    </section>
  </section>
);

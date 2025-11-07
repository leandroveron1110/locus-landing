// ./components/Hero.tsx
import React from "react";
import { CalendarCheck, Zap, Store, Users } from "lucide-react";
import fondo from "../../../public/fondo.svg";
import logo from "../../../public/favicon.svg";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Fondo sutil */}
      <div
        className="absolute inset-0 opacity-10 bg-repeat"
        style={{
          backgroundImage: `url(${fondo.src})`,
          backgroundSize: "220px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna de texto */}
        <div className="text-center lg:text-left">
          {/* Label superior */}
          <div className="inline-flex items-center space-x-2 bg-[#DD0C21]/10 border border-[#DD0C21]/20 text-[#DD0C21] px-3 py-1.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider mb-6">
            <Zap className="w-4 h-4" />
            <span>Revolución sin comisiones</span>
          </div>

          {/* Título */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#242323] leading-tight mb-6">
            Eliminá las comisiones. <br />
            <span className="text-[#DD0C21]">Multiplicá tu ganancia.</span>
          </h1>

          {/* Dato social destacado */}
          <div className="relative mt-6 sm:mt-8 mx-auto lg:mx-0 max-w-md sm:max-w-lg">
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#1E931E]/20 via-[#1E931E]/10 to-transparent border border-[#1E931E]/40 shadow-lg flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <div className="bg-[#1E931E] text-white p-2.5 sm:p-3 rounded-xl shadow-md flex-shrink-0">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-[#242323] text-left leading-snug">
                <strong className="text-xl sm:text-2xl font-extrabold text-[#1E931E]">
                  +2.700 personas
                </strong>{" "}
                en Concepción <br className="hidden sm:block" />
                ya esperan usar <strong>Locus</strong>.
              </p>
            </div>
            <div className="absolute -inset-1 bg-[#1E931E]/20 blur-3xl rounded-2xl -z-10"></div>
          </div>

          {/* Descripción */}
          <p className="mt-8 text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            <strong>Locus</strong> te libera de los porcentajes por venta. Pagás
            una tarifa <strong>fija y transparente</strong> que crece solo al
            alcanzar nuevos niveles de facturación. Escalá sin costos crecientes
            y mantené el <strong>100% de tu margen</strong>.
          </p>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 flex justify-center lg:justify-start">
            <a
              href="#agendar"
              className="flex items-center justify-center space-x-3 bg-[#1E931E] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg transition-transform transform hover:scale-[1.03] hover:bg-[#00EA00]"
            >
              <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Agendá una demo GRATUITA</span>
            </a>
          </div>
        </div>

        {/* Columna del mockup */}
        <div className="flex justify-center lg:justify-end py-10 lg:py-0 order-first lg:order-none">
          <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md transform hover:scale-[1.02] transition-transform duration-500">
            <div className="bg-[#6E669C] rounded-3xl p-1 shadow-2xl border-4 border-[#242323]">
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-inner">
                <div className="flex justify-between items-center mb-3 pb-2 border-b">
                  <p className="text-sm sm:text-base font-bold text-gray-800 flex items-center gap-2">
                    <Store className="w-4 h-4 sm:w-5 sm:h-5 text-[#333333]" />{" "}
                    Pedido #1254
                  </p>
                  <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-[#00EA00]/20 text-[#1E931E]">
                    PAGADO
                  </span>
                </div>

                {/* Ítems */}
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pizza Napolitana (x2)</span>
                    <span className="font-semibold text-[#333333]">$12.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Empanadas (x12)</span>
                    <span className="font-semibold text-[#333333]">$21.600</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between pt-4 mt-3 border-t border-dashed">
                  <span className="text-sm sm:text-base font-extrabold text-[#DD0C21]">
                    TOTAL VENTA
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#DD0C21]">
                    $33.600
                  </span>
                </div>

                {/* Mensaje de ganancia */}
                <div className="mt-3 sm:mt-4 p-2 bg-[#1E931E]/10 rounded-lg text-center">
                  <p className="text-xs sm:text-sm font-semibold text-[#1E931E]">
                    ¡Tu margen: 100% conservado!
                  </p>
                </div>
              </div>
            </div>

            {/* Logo flotante */}
            <img
              src={logo.src}
              alt="Logo Locus"
              className="absolute -top-4 -left-4 w-10 sm:w-12 h-10 sm:h-12 bg-white p-1 rounded-xl shadow-xl border border-gray-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

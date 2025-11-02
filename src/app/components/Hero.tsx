// ./components/Hero.tsx
import React from "react";
import { ArrowRight, CalendarCheck, Zap, Coins } from "lucide-react";
import img from "../../../public/fondo.png";

export const Hero: React.FC = () => (
  <section className="grid lg:grid-cols-2 gap-12 items-center pt-16 pb-12 sm:pt-24 sm:pb-20 lg:py-32 max-w-7xl mx-auto px-4">
    
    <div className="w-full h-96 shadow-none lg:shadow-2xl overflow-hidden bg-[#F5F8EB] flex items-center justify-center order-1 lg:order-1 lg:rounded-3xl">
      <img
        src={img.src} 
        alt="Logo de Locus - Tu plataforma sin comisiones"
        className="h-full w-auto object-contain p-8" 
      />
    </div>

    <div className="order-2 lg:order-2 px-4"> 
      
      {/* Etiqueta de Valor Clave */}
      <p className="inline-flex items-center space-x-2 px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold uppercase rounded-full tracking-wider mb-4 shadow-sm">
        <Zap className="w-4 h-4" />
        <span>REVOLUCIÓN SIN COMISIONES</span>
      </p>

      {/* Título de Impacto: TAMAÑO RESPONSIVE Y LECTURA ASEGURADA */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
        <span className="text-[#DD0C21]">Eliminá</span>{" "}
        <span className="text-[#DD0C21]">las comisiones.</span>
        <br />
        <span className="text-[#242323]">Multiplicá tu ganancia</span>
      </h1>

      <p className="mt-6 text-xl text-gray-700 leading-relaxed">
        <strong>Locus</strong> te libera de los porcentajes por venta. Pagás una
        tarifa <strong>fija y transparente</strong> que aumenta solo cuando tu negocio
        alcanza nuevos umbrales de facturación, no por cada pedido.
      </p>

      {/* Frase de Valor Destacada con la NUEVA INFORMACIÓN */}
      <h2 className="mt-8 text-2xl font-bold text-[#1E931E] flex items-center space-x-3">
        <Coins className="w-6 h-6 flex-shrink-0" />
        <span className="border-b-2 border-[#00EA00] pb-1">
          Escalá sin costos crecientes y con **Visibilidad Pura**.
        </span>
      </h2>
      
      {/* TEXTO DE LOGÍSTICA CORREGIDO: Enfatiza la integración y la elección */}
      <p className="mt-4 text-lg font-medium text-[#242323]">
        Locus está hecho para tu negocio local: **Integramos las cadeterías locales** para que tu cliente final siempre elija la opción que más le convenga.
      </p>
      

      {/* Botones CTA */}
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#como-funciona"
          className="flex items-center space-x-3 bg-[#1E931E] text-white px-8 py-4 rounded-xl font-bold text-xl shadow-xl transition duration-300 transform hover:scale-[1.03] hover:bg-[#00EA00]"
        >
          <span>Conocé el modelo</span>
          <ArrowRight className="w-6 h-6" />
        </a>

        <a
          href="#agendar"
          className="flex items-center space-x-3 border-2 border-[#DD0C21] text-[#DD0C21] px-8 py-4 rounded-xl font-bold text-xl transition duration-300 hover:bg-red-50"
        >
          <CalendarCheck className="w-6 h-6" />
          <span>Agendá una demo</span>
        </a>
      </div>
    </div>
  </section>
);
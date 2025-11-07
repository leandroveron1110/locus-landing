"use client";
import React from "react";
import {
  AlertTriangle,
  Search,
  DollarSign,
  TrendingDown,
  ArrowUpCircle, 
  Rocket,
  Users,
  Wallet,
  BarChart,
  Minimize2,
  Truck,
} from "lucide-react";

export const OptimizedBeforeAfterLocus: React.FC = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 bg-[#F5F8EB]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        
        {/* --- 🛑 Antes de Locus (El Problema) - Se mantiene el diseño de alerta --- */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#DD0C21]/20 shadow-xl transition duration-300 hover:shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-[#DD0C21] flex-shrink-0" /> 
            <h3 className="font-extrabold text-2xl text-[#333333]">
               Antes de Locus
            </h3>
          </div>
          
          <ul className="space-y-4 text-[#333333]"> 
            
            {/* 1. Búsqueda Constante */}
            <li className="flex items-start gap-4 p-3 bg-red-50 rounded-lg border-l-4 border-[#DD0C21]/70">
              <Search className="w-6 h-6 text-[#DD0C21] flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-[#242323]">Búsqueda Constante</span>
                <span className="text-sm">Tenés que salir a <strong>buscar clientes constantemente</strong>, perdiendo tiempo valioso.</span>
              </div>
            </li>

            {/* 2. Comisiones Elevadas */}
            <li className="flex items-start gap-4 p-3 bg-red-50 rounded-lg border-l-4 border-[#DD0C21]/70">
              <DollarSign className="w-6 h-6 text-[#DD0C21] flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-[#242323]">Comisiones Elevadas</span>
                <span className="text-sm">Pagás <strong>comisiones altas</strong> (20-30%) en cada venta, reduciendo tu ingreso real.</span>
              </div>
            </li>

            {/* 3. Precios que Tenés que Subir */}
            <li className="flex items-start gap-4 p-3 bg-red-50 rounded-lg border-l-4 border-[#DD0C21]/70">
              <ArrowUpCircle className="w-6 h-6 text-[#DD0C21] flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-[#242323]">Precios que Tenés que Subir</span>
                <span className="text-sm">Te ves obligado a <strong>aumentar tus precios</strong> para compensar la comisión de la plataforma.</span>
              </div>
            </li>

            {/* 4. Margen Reducido */}
            <li className="flex items-start gap-4 p-3 bg-red-50 rounded-lg border-l-4 border-[#DD0C21]/70">
              <TrendingDown className="w-6 h-6 text-[#DD0C21] flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-[#242323]">Margen Reducido</span>
                <span className="text-sm">Tu ganancia se  <strong>reduce con cada pedido</strong> debido a costos y márgenes ajenos.</span>
              </div>
            </li>

            {/* 5. Dependencia de Algoritmos */}
            <li className="flex items-start gap-4 p-3 bg-red-50 rounded-lg border-l-4 border-[#DD0C21]/70">
              <BarChart className="w-6 h-6 text-[#DD0C21] flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-[#242323]">Dependencia de Algoritmos</span>
                <span className="text-sm">Tu visibilidad depende de la publicidad y los <strong>algoritmos</strong> que no controlás.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* --- ✅ Con Locus (La Solución Profesional) - Fondo más suave (#6E669C) --- */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#6E669C] shadow-xl text-white transition duration-300 hover:shadow-2xl"> {/* Fondo 6E669C */}
          <div className="flex items-center gap-4 mb-6">
            <Rocket className="w-8 h-8 text-white flex-shrink-0" />
            <h3 className="font-extrabold text-2xl text-white">
               Con Locus
            </h3>
          </div>

          <ul className="space-y-4">
            
            {/* 1. Clientes que te Encuentran */}
            <li className="flex items-start gap-4 p-3 bg-[#6E669C]/80 rounded-lg border-l-4 border-white">
              <Users className="w-6 h-6 text-[#FF9500] flex-shrink-0 mt-0.5" /> {/* Usando el color Naranja FF9500 para los íconos */}
              <div className="flex flex-col">
                <span className="font-semibold text-white">Clientes que te Encuentran</span>
                <span className="text-sm">Los clientes te <strong>buscan directamente</strong> en la plataforma, aprovechando el tráfico de la red.</span>
              </div>
            </li>

            {/* 2. Margen 100% Tuyo */}
            <li className="flex items-start gap-4 p-3 bg-[#6E669C]/80 rounded-lg border-l-4 border-white">
              <Wallet className="w-6 h-6 text-[#FF9500] flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-white">Margen 100% Tuyo</span>
                <span className="text-sm"><strong>CERO comisiones:</strong> Conservás el 100% de tu margen de ganancia por cada pedido.</span>
              </div>
            </li>
            
            {/* 3. Tarifa Fija y Escalable */}
            <li className="flex items-start gap-4 p-3 bg-[#6E669C]/80 rounded-lg border-l-4 border-white">
              <BarChart className="w-6 h-6 text-[#FF9500] flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-white">Tarifa Fija y Escalable</span>
                <span className="text-sm">Pagás una <strong>tarifa fija</strong> por volumen, sin porcentajes que te fuercen a subir precios.</span>
              </div>
            </li>

            {/* 4. Optimización del Beneficio Neto */}
            <li className="flex items-start gap-4 p-3 bg-[#6E669C]/80 rounded-lg border-l-4 border-white">
              <Minimize2 className="w-6 h-6 text-[#FF9500] flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-white">Optimización del Beneficio Neto</span>
                <span className="text-sm">Maximizás tu beneficio neto al <strong>eliminar intermediarios</strong> y mantener el control total del precio.</span>
              </div>
            </li>

            {/* 5. Logística Simplificada */}
            <li className="flex items-start gap-4 p-3 bg-[#6E669C]/80 rounded-lg border-l-4 border-white">
              <Truck className="w-6 h-6 text-[#FF9500] flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-white">Logística Simplificada</span>
                <span className="text-sm">El sistema incluye <strong>integración con cadeterías locales</strong>, simplificando tu operación diaria.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
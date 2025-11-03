"use client";
import React from "react";
import {
  // Íconos de Antes (Problemas)
  AlertTriangle, // Nuevo ícono para el título "Antes"
  Search,
  DollarSign,
  TrendingDown,
  Megaphone,
  // Íconos de Después (Soluciones)
  Rocket, // Ícono para el título "Con Locus"
  CheckCircle, // Nuevo ícono para los items de "Con Locus"
  Users,
  Wallet,
  BarChart,
  Truck,
} from "lucide-react";

// Paleta de Colores:
// Primario (Locus): #0077B6 (Azul profesional)
// Fondo: #F8FAFC (Gris muy claro)

export const BeforeAfterLocus: React.FC = () => {
  return (
    // Sección principal responsive con padding generoso
    <section className="px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* --- 🛑 Antes de Locus (El Problema) --- */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-gray-200 shadow-xl transition duration-300 hover:shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            {/* Ícono de Alerta para el título */}
            <AlertTriangle className="w-7 h-7 sm:w-8 sm:h-8 text-red-500" />
            <h3 className="font-extrabold text-xl sm:text-2xl text-gray-800">
              Antes de Locus
            </h3>
          </div>
          
          <ul className="space-y-5 text-gray-600">
            {/* Problema 1: Búsqueda de Clientes */}
            <li className="flex items-start gap-4 p-3 bg-red-50 rounded-lg">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">Búsqueda Constante</span>
                <span>Tenés que salir a <strong>buscar clientes constantemente</strong>, perdiendo tiempo valioso.</span>
              </div>
            </li>

            {/* Problema 2: Altas Comisiones */}
            <li className="flex items-start gap-4 p-3 bg-red-50 rounded-lg">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">Comisiones Elevadas</span>
                <span>Pagás <strong>comisiones altas</strong> en cada venta, reduciendo tu ingreso real.</span>
              </div>
            </li>

            {/* Problema 3: Reducción de Margen */}
            <li className="flex items-start gap-4 p-3 bg-red-50 rounded-lg">
              <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">Margen Reducido</span>
                <span>Tu margen de ganancia se <strong>reduce con cada pedido</strong> debido a costos ocultos.</span>
              </div>
            </li>

            {/* Problema 4: Dependencia de Publicidad */}
            <li className="flex items-start gap-4 p-3 bg-red-50 rounded-lg">
              <Megaphone className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">Dependencia de Algoritmos</span>
                <span>Dependés de la publicidad y los <strong>algoritmos</strong> para que te encuentren.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* --- ✅ Con Locus (La Solución Profesional) --- */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#0077B6] shadow-xl text-white transition duration-300 hover:shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            {/* Ícono de Cohete para el título */}
            <Rocket className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            <h3 className="font-extrabold text-xl sm:text-2xl">
              Con Locus
            </h3>
          </div>

          <ul className="space-y-5">
            {/* Solución 1: Clientes Activos */}
            <li className="flex items-start gap-4 p-3 bg-blue-700/30 rounded-lg">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-white">Clientes que te Encuentran</span>
                <span>Los clientes te <strong>buscan directamente</strong> en la plataforma, ¡sin esfuerzo!</span>
              </div>
            </li>

            {/* Solución 2: Cero Comisiones */}
            <li className="flex items-start gap-4 p-3 bg-blue-700/30 rounded-lg">
              <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-white">Margen 100% Tuyo</span>
                <span><strong>No hay comisiones:</strong>: conservás el 100% de tu margen de ganancia..</span>
              </div>
            </li>

            {/* Solución 3: Tarifa Fija y Transparente */}
            <li className="flex items-start gap-4 p-3 bg-blue-700/30 rounded-lg">
              <BarChart className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-white">Tarifa Fija y Escalable</span>
                <span>Pagás una <strong>tarifa fija</strong> muy baja, sin sorpresas, según tu volumen de ventas.</span>
              </div>
            </li>

            {/* Solución 4: Logística Integrada */}
            <li className="flex items-start gap-4 p-3 bg-blue-700/30 rounded-lg">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-white">Logística Simplificada</span>
                <span><strong>Integración con cadeterías locales</strong>: el cliente elige y gestiona su envío.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
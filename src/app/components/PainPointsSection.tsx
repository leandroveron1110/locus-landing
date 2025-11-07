"use client";
import React from "react";
import {
  DollarSign, // Costo N° 1: Altas Comisiones
  TrendingDown, // Margen Reducido
  Clock, // Caos Operativo
  AlertTriangle, // Errores por Gestión Manual
  Truck, // Logística Manual
  EyeOff, // Costos Ocultos
  BarChart3, // Falta de Datos y Fidelización
  Layers, // Costos que Crecen al Escalar
  Network, // Dependencia de Algoritmos
} from "lucide-react";

// Array de Puntos de Dolor Priorizados (9 puntos)
const optimizedPainPoints = [
  {
    icon: DollarSign,
    title: "Costo N° 1: Altas Comisiones",
    problem: "Las plataformas te quitan hasta el 30% de cada venta.",
    solution: "Retenés el 100% de tu margen. ¡Cero comisión por pedido!",
  },
  {
    icon: TrendingDown,
    title: "Margen Reducido y Precios Inflados",
    problem: "Te ves forzado a subir tus precios para mantener la ganancia.",
    solution: "Pagás una tarifa fija y transparente, sin porcentajes.",
  },
  {
    icon: Clock,
    title: "Caos Operativo y Pérdida de Tiempo",
    problem:
      "Tu equipo pierde horas gestionando pedidos por WhatsApp/llamadas.",
    solution: "Locus automatiza pedidos, notificaciones y flujo de venta.",
  },
  {
    icon: AlertTriangle,
    title: "Errores por Gestión Manual",
    problem:
      "Confusiones en sabores, talles o direcciones que frustran al cliente.",
    solution: "Todo se carga automáticamente, eliminando los errores humanos.",
  },
  {
    icon: Truck,
    title: "Logística Manual y Demoras",
    problem: "Coordinar envíos y cadeterías es un cuello de botella constante.",
    solution:
      "Integración simple con cadeterías locales, sin esfuerzo de tu parte.",
  },
  {
    icon: Network,
    title: "Dependencia de Algoritmos",
    problem:
      "Dependés de la publicidad pagada y el algoritmo de las redes para que te encuentren.",
    solution:
      "Los clientes te buscan directamente en la plataforma: es tráfico de calidad.",
  },
  {
    icon: BarChart3,
    title: "Falta de Datos y Fidelización",
    problem:
      "Sin información, no sabés qué vendés más ni cómo retener a tus clientes.",
    solution:
      "Locus te da estadísticas y feedback real para crear promociones efectivas.",
  },
  {
    icon: Layers,
    title: "Costos que Crecen al Escalar",
    problem: "A medida que vendés más, más pagás en comisiones (sin límite).",
    solution:
      "Tu costo aumenta solo cuando superás un umbral de venta, ¡siempre previsible!",
  },
  {
    icon: EyeOff,
    title: "Costos Ocultos e Impredecibles",
    problem:
      "Nunca sabés exactamente cuánto te va a costar vender el próximo mes.",
    solution:
      "Transparencia total con tarifas fijas mensuales según tu volumen.",
  },
];

export const OptimizedPainPointsSection: React.FC = () => {
  return (
    // Fondo más neutro para mejor contraste con las tarjetas
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* CABECERA */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#210110] mb-4">
            Los <strong>dolores reales</strong> de los negocios locales
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Entendemos lo que enfrentás. Por eso, diseñamos{" "}
            <span className="font-semibold text-[#9e2d49]">Locus</span> para
            eliminar <strong className="text-[#9e2d49]">uno por uno</strong> los
            desafíos que frenan tu crecimiento.
          </p>
        </div>

        {/* CUERPO DE TARJETAS (9 PUNTOS) */}
        {/* Usamos lg:grid-cols-3, idealmente 3x3 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {optimizedPainPoints.map(
            ({ icon: Icon, title, problem, solution }, index) => (
              // Código de la tarjeta optimizado para alinear la Solución y el Problema
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-transparent hover:border-[#9e2d49] transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Bloque de Ícono y Título: Sin cambios aquí, se ve bien */}
                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-lg mr-4 bg-[#9e2d49]/10 flex-shrink-0">
                    <Icon className="text-[#9e2d49] w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-[#210110] leading-snug pt-1">
                    {title}
                  </h3>
                </div>

                {/* Problema (Alineado) */}
                {/* Se mantiene la línea izquierda y el padding interno (pl-3) */}
                <div className="text-gray-600 text-sm mb-4 leading-relaxed border-l-2 border-red-400 pl-3">
                  <span className="font-bold text-red-600 uppercase text-xs block mb-1">
                    El Problema
                  </span>
                  {problem}
                </div>

                {/* Solución (Alineado y Destacado) */}
                {/* Se reemplaza el p-2 y los márgenes negativos por un padding vertical simple (py-3) 
      y se usa padding horizontal (pl-3) para alinearlo con el Problema. */}
                <div className="text-gray-800 text-sm leading-relaxed border-l-2 border-[#9e2d49] pl-3 py-3 bg-[#9e2d49]/5 rounded-md">
                  <span className="font-bold text-[#9e2d49] uppercase text-xs block mb-1">
                    La Solución Locus
                  </span>
                  {solution}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

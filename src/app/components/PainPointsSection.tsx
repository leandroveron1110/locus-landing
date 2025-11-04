"use client";
import React from "react";
import {
  DollarSign,
  TrendingDown,
  Clock,
  AlertTriangle,
  Truck,
  Network,
  BarChart3,
  Layers,
  EyeOff,
  Lock,
  Smile,
  Gift,
  Settings,
  Users,
  UserCheck,
} from "lucide-react";


const painPoints = [
  {
    icon: DollarSign,
    title: "Altas comisiones por venta",
    problem: "Las plataformas te quitan parte de cada venta.",
    solution: "Con Locus conservás el 100% de tu ganancia.",
  },
  {
    icon: TrendingDown,
    title: "Margen reducido y precios forzados a subir",
    problem: "Tenés que aumentar precios para no perder margen.",
    solution: "Pagás una tarifa fija, sin porcentajes por pedido.",
  },
  {
    icon: Clock,
    title: "Tiempo perdido gestionando pedidos",
    problem: "Tomás pedidos por WhatsApp o llamadas todo el día.",
    solution: "Locus automatiza pedidos y notificaciones.",
  },
  {
    icon: AlertTriangle,
    title: "Errores en pedidos o comunicación",
    problem: "Confusiones en sabores, talles o direcciones.",
    solution: "Todo se carga automáticamente, sin errores manuales.",
  },
  {
    icon: Truck,
    title: "Problemas con la logística y cadeterías",
    problem: "Coordinar envíos lleva tiempo y genera demoras.",
    solution: "Integración con cadeterías locales, sin esfuerzo.",
  },
  {
    icon: Network,
    title: "Dependencia de redes sociales",
    problem: "Dependés de los algoritmos para que te encuentren.",
    solution: "Los clientes te buscan directo en la plataforma.",
  },
  {
    icon: BarChart3,
    title: "No conocés a tus clientes",
    problem: "Sin datos, no sabés qué productos funcionan mejor.",
    solution: "Locus te da estadísticas y feedback reales.",
  },
  {
    icon: Layers,
    title: "Difícil escalar sin costos crecientes",
    problem: "A más ventas, más comisiones.",
    solution: "Pagás más solo cuando tu negocio crece.",
  },
  {
    icon: EyeOff,
    title: "Costos ocultos e imprevisibles",
    problem: "Nunca sabés cuánto te va a costar vender.",
    solution: "Transparencia total con tarifas fijas mensuales.",
  },
  {
    icon: Lock,
    title: "Pérdida de control sobre precios y marca",
    problem: "Las plataformas definen tu visibilidad y tus precios.",
    solution: "Con Locus tenés control total de tu negocio.",
  },
  {
    icon: Smile,
    title: "Mala experiencia del cliente",
    problem: "Demoras y desorganización afectan la satisfacción.",
    solution: "Pedidos automáticos y seguimiento simple.",
  },
  {
    icon: Gift,
    title: "No podés fidelizar ni crear promociones efectivas",
    problem: "Sin información, no sabés cómo retener clientes.",
    solution: "Conocé hábitos y ofrecé descuentos personalizados.",
  },
  {
    icon: Settings,
    title: "Falta de herramientas centralizadas",
    problem: "Todo está disperso en mensajes y planillas.",
    solution: "Unificá ventas, clientes y envíos en una sola app.",
  },
  {
    icon: Users,
    title: "Dependencia de personal o encargados",
    problem: "Si el encargado no está, el negocio se frena.",
    solution: "Todo queda registrado y funciona sin depender de nadie.",
  },
  {
    icon: UserCheck,
    title: "Falta de tiempo para hacer crecer el negocio",
    problem: "La gestión diaria te consume todo el día.",
    solution: "Automatizá lo operativo y enfocáte en crecer.",
  },
];


export const PainPointsSection: React.FC = () => {
  return (
    <section className="bg-[#F5F8EB] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* CABECERA - REFACTORIZADA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#210110] mb-4">
            Los <strong>dolores reales</strong> de los negocios locales
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Entendemos lo que enfrentás todos los días. Por eso diseñamos{" "}
            <span className="font-semibold text-[#9e2d49]">Locus</span> para
            <strong className="text-[#9e2d49]"> eliminar uno por uno</strong> los
            desafíos que frenan tu crecimiento.
          </p>
        </div>
        {/* FIN CABECERA */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map(({ icon: Icon, title, problem, solution }, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Ícono y Título */}
              <div className="flex items-center mb-4">
                <div className="bg-[#9e2d49]/10 p-3 rounded-full mr-3">
                  <Icon className="text-[#9e2d49] w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg text-[#210110]">
                  {title}
                </h3>
              </div>

              {/* PROBLEMA: Etiqueta usando el color oscuro del texto */}
              <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                <span className="font-medium text-[#210110]">Problema: </span>
                {problem}
              </p>

              {/* SOLUCIÓN: Etiqueta usando el color primario de la marca (Locus) */}
              <p className="text-gray-800 text-sm leading-relaxed">
                <span className="font-medium text-[#9e2d49]">Solución: </span>
                {solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// ./components/Comparison.tsx
import React from "react";
import {
  CheckCircle,
  Shield,
  ShoppingCart,
  XCircle,
} from "lucide-react";

interface ComparisonItemProps {
  text: string;
  isAdvantage: boolean;
}

const ComparisonItem: React.FC<ComparisonItemProps> = ({ text, isAdvantage }) => (
  <li className="flex items-start space-x-2">
    {isAdvantage ? (
      <CheckCircle className="w-5 h-5 text-[#1E931E] mt-1 flex-shrink-0" />
    ) : (
      <XCircle className="w-5 h-5 text-[#DD0C21] mt-1 flex-shrink-0" />
    )}
    <span className="text-sm sm:text-base text-[#4A4A4A] leading-snug">
      {text}
    </span>
  </li>
);

export const ComparisonCards: React.FC = () => (
  <section className="mt-16 mb-16 max-w-7xl mx-auto px-4">
    {/* Header */}
    <div className="flex items-center justify-center sm:justify-start mb-10 space-x-3">
      {/* <Coins className="w-7 h-7 text-[#242323]" /> */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242323] tracking-tight text-center sm:text-left">
        Análisis Competitivo: Costos vs. Foco en Clientes
      </h2>
    </div>

    {/* Contenedor de tarjetas */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Competencia */}
      <div className="p-8 rounded-2xl bg-white border border-[#E0E0E0] shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#DD0C21] flex items-center space-x-2 mb-5 border-b border-[#E0E0E0] pb-2">
          <ShoppingCart className="w-6 h-6" />
          <span>Competencia: Alto Riesgo</span>
        </h3>

        <h4 className="text-sm font-bold text-[#DD0C21] uppercase tracking-wider mb-3">
          Desventajas Comunes
        </h4>
        <ul className="space-y-3">
          <ComparisonItem
            text="Comisión del 20-30% sobre cada venta."
            isAdvantage={false}
          />
          <ComparisonItem
            text="Pérdida de control sobre precios y experiencia del cliente."
            isAdvantage={false}
          />
          <ComparisonItem
            text="Costos que crecen con el volumen de ventas (sin límite)."
            isAdvantage={false}
          />
          <ComparisonItem
            text="Obligación de subir precios para mantener el margen."
            isAdvantage={false}
          />
        </ul>
      </div>

      {/* Locus */}
      <div className="relative p-8 rounded-2xl border-2 border-[#1E931E] bg-gradient-to-br from-[#F7FBF4] to-white shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1">
        <h3 className="text-xl sm:text-2xl font-bold text-[#1E931E] flex items-center space-x-2 mb-5">
          <Shield className="w-6 h-6" />
          <span>Locus</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ventajas Clave */}
          <div>
            <h4 className="text-sm font-bold text-[#1E931E] uppercase tracking-wider mb-3 border-b border-[#D3E5D1] pb-2">
              Ventajas Clave (Costos)
            </h4>
            <ul className="space-y-3">
              <ComparisonItem
                text="CERO (0%) comisión. Conservás el 100% de tus ventas."
                isAdvantage={true}
              />
              <ComparisonItem
                text="Costo fijo mensual previsible, sin sorpresas."
                isAdvantage={true}
              />
              <ComparisonItem
                text="Máximo margen en cada venta, sin intermediarios."
                isAdvantage={true}
              />
            </ul>
          </div>

          {/* Beneficios Estratégicos */}
          <div>
            <h4 className="text-sm font-bold text-[#1E931E] uppercase tracking-wider mb-3 border-b border-[#D3E5D1] pb-2">
              Beneficios Estratégicos
            </h4>
            <ul className="space-y-3">
              <ComparisonItem
                text="Escalabilidad: tus costos no crecen con tus ventas."
                isAdvantage={true}
              />
              <ComparisonItem
                text="Acceso a todos los datos de tus clientes."
                isAdvantage={true}
              />
              <ComparisonItem
                text="Integración con cadeterías locales: tus clientes eligen."
                isAdvantage={true}
              />
              <ComparisonItem
                text="Tráfico de calidad: plataforma centrada en negocios, no en redes."
                isAdvantage={true}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

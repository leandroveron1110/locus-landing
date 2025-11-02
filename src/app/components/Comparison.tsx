// ./components/Comparison.tsx
import React from "react";
import {
  CheckCircle,
  Coins,
  Shield,
  ShoppingCart,
  XCircle,
} from "lucide-react";

interface ComparisonItemProps {
  text: string;
  isAdvantage: boolean;
}

const ComparisonItem: React.FC<ComparisonItemProps> = ({
  text,
  isAdvantage,
}) => (
  <li className="flex items-start space-x-2">
    {isAdvantage ? (
      <CheckCircle className="flex-shrink-0 w-5 h-5 text-[#1E931E] mt-1" />
    ) : (
      <XCircle className="flex-shrink-0 w-5 h-5 text-[#DD0C21] mt-1" />
    )}
    <span className="text-sm sm:text-base text-[#605F67] leading-snug">
      {text}
    </span>
  </li>
);

export const ComparisonCards: React.FC = () => (
  <section className="mt-12 max-w-7xl mx-auto px-4"> 
    
    {/* Header con título que refleja la ventaja estratégica */}
    <div className="flex items-center justify-center sm:justify-start mb-10 space-x-3">
      <Coins className="w-7 h-7 text-[#242323]" />
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242323] tracking-tight">
        Análisis Competitivo: Costos vs. Foco en Clientes
      </h2>
    </div>

    {/* Contenedor de Tarjetas */}
    <div className="flex flex-col lg:flex-row gap-8">
      
      {/* Competencia Card (Riesgo) - No se modifica el contenido interno */}
      <div className="flex-1 p-6 border border-[#BFBFBF] rounded-2xl bg-white shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-bold text-[#DD0C21] flex items-center space-x-2 mb-6 border-b pb-3 border-[#BFBFBF]">
          <ShoppingCart className="w-6 h-6 flex-shrink-0" />
          <span>Competencia: Alto Riesgo</span>
        </h3>

        <h4 className="text-base font-semibold text-[#DD0C21] uppercase tracking-wider mb-3">
          Desventajas Comunes (El Costo de no tener control)
        </h4>
        <ul className="space-y-3">
          <ComparisonItem
            text="Comisión del 20-30% sobre el valor total de cada venta."
            isAdvantage={false}
          />
          <ComparisonItem
            text="Pérdida de control sobre el precio final y la experiencia del cliente."
            isAdvantage={false}
          />
          <ComparisonItem
            text="Costos que crecen linealmente con el volumen de ventas (sin límite)."
            isAdvantage={false}
          />
          <ComparisonItem
            text="Obligación de subir precios para mantener el margen de ganancia."
            isAdvantage={false}
          />
        </ul>
      </div>

      {/* Locus Card (Ventaja) - Modificado el punto de Logística */}
      <div className="flex-1 relative p-8 border-2 border-[#1E931E] rounded-2xl bg-gradient-to-br from-[#F5F8EB] to-white shadow-2xl transform hover:scale-[1.01] transition duration-500">
        
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#333333] flex items-center space-x-2 mb-6">
          <Shield className="w-5 sm:w-6 md:w-7 flex-shrink-0 text-[#1E931E]" />
          <span>Locus</span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
          
          {/* Columna 1: Ventajas Clave (Costos) */}
          <div>
            <h4 className="text-base font-bold text-[#1E931E] uppercase tracking-wider mb-3 border-b border-[#BFBFBF] pb-2">
              Ventajas Clave (Costos)
            </h4>
            <ul className="space-y-3">
              <ComparisonItem
                text="CERO (0%) comisión por pedido. Tú retienes el 100% de la venta."
                isAdvantage={true}
              />
              <ComparisonItem
                text="Tarifa fija y progresiva: Previsibilidad total del costo mensual."
                isAdvantage={true}
              />
              <ComparisonItem
                text="Margen de ganancia máximo retenido en cada transacción."
                isAdvantage={true}
              />
            </ul>
          </div>

          {/* Columna 2: Beneficios Estratégicos (Valor, Logística y Foco) */}
          <div>
            <h4 className="text-base font-bold text-[#1E931E] uppercase tracking-wider mb-3 border-b border-[#BFBFBF] pb-2">
              Beneficios Estratégicos (Valor y Crecimiento)
            </h4>
            <ul className="space-y-3">
              <ComparisonItem
                text="Mayor previsibilidad de costos, ideal para escalar el negocio."
                isAdvantage={true}
              />
              <ComparisonItem
                text="Acceso exclusivo a todos los datos del cliente (Tuyo, no de terceros)."
                isAdvantage={true}
              />
              {/* VENTAJA DE LOGÍSTICA CORREGIDA: Enfatiza la integración de cadeterías locales */}
              <ComparisonItem
                text="Integración de Logística Local: Tu cliente elige la cadetería que prefiera. Locus facilita la conexión."
                isAdvantage={true}
              />
              {/* VENTAJA DE Tráfico de Calidad (Nueva) */}
              <ComparisonItem
                text="Tráfico de Calidad: Eres visto en una plataforma dedicada SOLO a negocios, sin distracciones algorítmicas de redes sociales."
                isAdvantage={true}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
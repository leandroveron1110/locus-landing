import React from "react";
import {
  Zap,
  TrendingUp,
  Handshake,
  Wallet,
  LucideIcon,
} from "lucide-react";

// NOTA: Reemplaza esta línea con la importación real de tu valor.
const TARIFA_BASE: number = 35;

interface FeatureStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface PricingItem {
  range: string;
  detail: string;
  isHighlight: boolean;
}

const FeatureStep: React.FC<FeatureStepProps> = ({
  number,
  title,
  description,
  icon: Icon,
}) => (
  <li className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
    <div className="flex-shrink-0">
<span
  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 
  bg-[#1E931E] text-white font-semibold text-base sm:text-lg shadow-md
  [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]"
>
  {number}
</span>



    </div>
    <div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 flex items-center space-x-2">
        {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E931E]" />}
        <span>{title}</span>
      </h3>
      <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">
        {description}
      </p>
    </div>
  </li>
);

export const HowItWorks: React.FC = () => {
  const pricingData: PricingItem[] = [
    {
      range: "$0 – $499.999 ARS",
      detail: `Tarifa base: $${TARIFA_BASE} USD/mes`,
      isHighlight: false,
    },
    {
      range: "Cada $500.000 ARS adicional",
      detail: "Aumento por bloque (aprox. $25–$40 USD)",
      isHighlight: true,
    },
    {
      range: "Ventas superiores",
      detail: "El costo fijo por venta disminuye al escalar",
      isHighlight: false,
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#F5F8EB] rounded-xl shadow-inner mt-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <div className="text-center mb-10">
          <p className="text-sm sm:text-base font-semibold uppercase text-[#00EA00] tracking-wider">
            Modelo de Costos
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#242323] mt-2 leading-tight">
            La Lógica de Locus: Crecer Sin Comisiones
          </h2>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 items-start">
          {/* Columna de Ventajas */}
          <div className="lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-[#333333] mb-4 flex items-center space-x-2 border-b pb-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#DD0C21]" />
              <span>El Problema Común vs. Nuestra Solución</span>
            </h3>
            <p className="mt-3 text-[#333333] leading-relaxed text-sm sm:text-base">
              Muchas plataformas cobran comisiones por pedido que reducen
              significativamente tu margen. <strong>Locus elimina esto</strong>.
              Solo tenés una tarifa fija por bloques que crece{" "}
              <strong>progresivamente</strong> a medida que aumentás tus ventas.
            </p>

            <ul className="mt-6 space-y-3 sm:space-y-4">
              <FeatureStep
                number={1}
                title="Transparencia Total"
                description="Sabés exactamente cuánto vas a pagar según tus objetivos de venta. ¡Cero sorpresas!"
                icon={Handshake}
              />
              <FeatureStep
                number={2}
                title="Crecimiento Escalonado"
                description="Pagás más solo cuando tu negocio crece y aumenta sus ventas. Costos controlados."
                icon={TrendingUp}
              />
              <FeatureStep
                number={3}
                title="Margen 100% Tuyo"
                description="Mantenés el control total de tus precios y retenés el 100% de tu margen de ganancia."
                icon={Wallet}
              />
            </ul>
          </div>

          {/* Columna de Tarifas */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#1E931E]">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1E931E] mb-5 flex items-center space-x-2">
              <span>Modelo de Costos Locus</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base border-collapse">
                <thead>
                  <tr className="text-left text-[#333333] uppercase border-b-2 border-emerald-100">
                    <th className="py-2 pr-4 font-semibold">
                      Bloque de Ventas (ARS/mes)
                    </th>
                    <th className="py-2 pl-4 font-semibold">
                      Tarifa Mensual (USD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <tr
                      key={index}
                      className={`${
                        item.isHighlight
                          ? "bg-emerald-50/50 font-semibold"
                          : "bg-white"
                      } border-b border-gray-100`}
                    >
                      <td className="py-3 pr-4 text-[#333333]">{item.range}</td>
                      <td className="py-3 pl-4 text-[#1E931E]">
                        {item.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-3 sm:p-4 bg-red-50 border-l-4 border-red-400 text-sm text-[#333333] rounded">
              <p className="font-semibold text-[#DD0C21]">
                🚨 Importante: CERO Comisiones por Pedido.
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Tu costo es <strong>fijo por el mes</strong> según tu volumen
                total de ventas, no por cada transacción individual. Esto
                garantiza que tu costo fijo por pedido disminuya a medida que
                creces.
              </p>
            </div>

            <div className="mt-3 text-xs text-[#333333]">
              *Ejemplo: si vendés $1.2M ARS, tu tarifa se calcula con la tarifa
              base más los aumentos progresivos por haber superado el umbral de
              $500k.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};





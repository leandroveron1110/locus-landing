import React, { useState, useMemo } from "react";
import {
  DollarSign,
  Percent,
  TrendingUp,
  Zap,
  CheckCircle,
} from "lucide-react";
import { cobroToBusiness } from "@/libs/pricing";
import { formatPrice } from "@/libs/formatPrice";

const USD_TO_ARS = 1500;

interface CardValueProps {
  label: string;
  value: string;
  colorClass: string;
  icon: React.ElementType;
  subText?: string;
}

const CardValue: React.FC<CardValueProps> = ({
  label,
  value,
  colorClass,
  icon: Icon,
  subText,
}) => (
  // Clase de altura mínima (min-h-full) para asegurar que ambas tarjetas tengan la misma altura
  <div
    className={`p-3 sm:p-4 rounded-xl border ${colorClass} bg-[#F5F8EB] transition duration-300 hover:shadow-md h-full min-h-32`} 
  >
    <div className="flex justify-between items-start">
      {/* Reducción de tamaño de texto de etiqueta en móvil (text-xs) */}
      <h5 className="text-xs sm:text-sm font-medium text-[#605F67] pr-2 leading-tight">
        {label}
      </h5>
      <Icon
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          colorClass.includes("green") ? "text-[#1E931E]" : "text-[#DD0C21]"
        } flex-shrink-0`} // Aseguramos que el ícono no se achique
      />
    </div>
    <div className="mt-1">
      {/* TAMAÑO RESPONSIVE: Usa un tamaño menor en móvil y trunca si es necesario */}
      <span className="text-xl sm:text-2xl font-extrabold text-[#242323] leading-none block truncate">
        {value}
      </span>
      {subText && (
        <p className="text-xs text-[#605F67] mt-1 truncate">{subText}</p>
      )}
    </div>
  </div>
);

export const Calculator: React.FC = () => {
  const [ventasInput, setVentasInput] = useState<string>("500.000");
  const COMPETENCIA_OPTIONS = [20, 25, 30, 35];
  const [competenciaPorcentaje, setCompetenciaPorcentaje] = useState<number>(
    COMPETENCIA_OPTIONS[1]
  );

  const {
    ventasNumber,
    tarifaLocusUSD,
    tarifaLocusARS,
    cobroCompetenciaARS,
    ahorroARS,
    porcentajeAhorro,
  } = useMemo(() => {
    const ventasNumber = Number(ventasInput.replace(/[^0-9]/g, "")) || 0;
    const tarifaLocusUSD = cobroToBusiness(ventasNumber);
    const tarifaLocusARS = tarifaLocusUSD * USD_TO_ARS;
    const cobroCompetenciaARS = (ventasNumber * competenciaPorcentaje) / 100;
    const ahorroARS = Math.max(cobroCompetenciaARS - tarifaLocusARS, 0);
    const porcentajeAhorro =
      cobroCompetenciaARS > 0
        ? ((ahorroARS / cobroCompetenciaARS) * 100).toFixed(1)
        : "0";
    return {
      ventasNumber,
      tarifaLocusUSD,
      tarifaLocusARS,
      cobroCompetenciaARS,
      ahorroARS,
      porcentajeAhorro,
    };
  }, [ventasInput, competenciaPorcentaje]);

  const handleVentasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (!value) {
      setVentasInput("");
      return;
    }
    const formattedValue = new Intl.NumberFormat("es-AR", {
      minimumFractionDigits: 0,
    }).format(Number(value));
    setVentasInput(formattedValue);
  };

  return (
    // Reducción del max-w-xl a max-w-lg en desktop para un mejor foco visual
    <div className="bg-[#F5F8EB] p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-lg mx-auto border-t-8 border-[#DD0C21] font-sans">
      
      {/* Encabezado */}
      <div className="flex items-start space-x-3 mb-6 border-b pb-4 border-[#BFBFBF]">
        <TrendingUp className="w-7 h-7 text-[#DD0C21] flex-shrink-0 mt-1" />
        <div>
          {/* Título más responsive: text-xl en móvil, text-2xl en sm, text-3xl en md */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#242323] leading-tight">
            Optimiza y Ahorra
          </h3>
          <p className="text-xs sm:text-sm text-[#605F67] leading-tight">
            Calculadora de Ahorro de Comisiones Locus
          </p>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        <div className="space-y-2">
          <label
            htmlFor="ventas"
            className="text-sm font-semibold text-[#605F67] block"
          >
            Ventas Acumuladas (ARS)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#605F67]" />
            {/* Se mantiene el tamaño de fuente consistente para mejor UX */}
            <input
              id="ventas"
              type="text"
              inputMode="numeric"
              placeholder="Ej: 50.000.000"
              value={ventasInput}
              onChange={handleVentasChange}
              className="w-full border border-[#605F67] rounded-xl pl-10 pr-4 py-3 text-lg sm:text-xl font-semibold text-[#242323] focus:ring-2 focus:ring-[#1E931E] focus:border-[#1E931E] outline-none transition duration-200"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="comision"
            className="text-sm font-semibold text-[#605F67] block"
          >
            Comisión Competencia (%)
          </label>
          <div className="relative">
            <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#605F67]" />
            <select
              id="comision"
              value={competenciaPorcentaje}
              onChange={(e) => setCompetenciaPorcentaje(Number(e.target.value))}
              // Se ajustó el color de borde para ser consistente
              className="w-full border border-[#605F67] rounded-xl pl-10 pr-4 py-3 text-lg sm:text-xl font-semibold text-[#242323] appearance-none bg-[#F5F8EB] focus:ring-2 focus:ring-[#1E931E] focus:border-[#1E931E] outline-none cursor-pointer"
            >
              {COMPETENCIA_OPTIONS.map((val) => (
                <option key={val} value={val}>
                  {val}%
                </option>
              ))}
            </select>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#605F67] pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="p-4 rounded-xl bg-[#F5F8EB] shadow-inner border border-[#BFBFBF]">
        <h4 className="text-lg font-bold text-[#242323] mb-4 border-b border-[#BFBFBF] pb-2">
          Comparativa de Costos
        </h4>

        {/* Las CardValue ya tienen ajustes de responsividad interna */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> 
          <CardValue
            label="Costo con Locus"
            value={formatPrice(tarifaLocusARS)}
            colorClass="border-[#1E931E]/30"
            icon={Zap}
            subText={`Aprox. $${tarifaLocusUSD.toFixed(2)} USD`}
          />
          <CardValue
            label={`Costo Competencia (${competenciaPorcentaje}%)`}
            value={formatPrice(cobroCompetenciaARS)}
            colorClass="border-[#DD0C21]/30"
            icon={Percent}
            subText={`Costo sobre ${formatPrice(ventasNumber)} ARS`}
          />
        </div>

        {/* Ahorro Neto */}
        <div className="mt-6 p-6 rounded-2xl border border-[#1E931E]  text-center shadow-xl">
          <div className="flex flex-col items-center justify-center">
            <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-[#1E931E] mb-2 animate-bounce-slow" />
            <h5 className="text-sm font-bold text-[#1E931E] uppercase tracking-wider">
              ¡Ahorro Neto al Elegir Locus!
            </h5>
            {/* TAMAÑO RESPONSIVE: Usa un tamaño menor en móvil para números grandes */}
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E931E] mt-2 block truncate">
              {formatPrice(ahorroARS)}
            </span>
            {ahorroARS > 0 && (
              <p className="text-sm text-[#1E931E] font-medium mt-1">
                Reducción total de <strong>{porcentajeAhorro}%</strong> en
                costos de comisión.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-[#605F67] mt-6 text-center">
        *Cálculo referencial y estimado. La tarifa final de Locus se consolida
        según el volumen acumulado.
      </p>
    </div>
  );
};

export default Calculator;
"use client";
import { CheckCircle, Zap, TrendingUp } from "lucide-react";

export const FreeUntilSection = () => {
  return (
    <section className="bg-[#F5F8EB] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Título principal */}
        <h2 className="text-4xl font-extrabold text-[#DD0C21] mb-4">
          Gratis hasta que vendas $275.000
        </h2>
        <p className="text-lg text-[#333] max-w-2xl mx-auto mb-12">
          En Locus creemos que <strong>solo deberías pagar cuando ves resultados
          reales.</strong> Por eso podés usar la plataforma sin costo hasta alcanzar{" "}
          <span className="font-semibold">$275.000 en ventas</span>.
        </p>
      </div>

      {/* Tarjetas */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Tarjeta 1 */}
        <div className="bg-white border-t-4 border-[#B30BBC] rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]">
          <div className="flex items-center mb-4">
            <Zap className="w-7 h-7 text-[#B30BBC] mr-3" />
            <h3 className="text-xl font-bold text-[#333]">
              Antes de llegar a $275.000
            </h3>
          </div>
          <ul className="space-y-4">
            <Feature
              color="#B30BBC"
              title="$0 costo mensual"
              desc="Disfrutás de todas las funcionalidades sin pagar nada al inicio."
            />
            <Feature
              color="#B30BBC"
              title="Uso completo de la plataforma"
              desc="Gestión, marketing y ventas — todo disponible desde el día uno."
            />
            <Feature
              color="#B30BBC"
              title="Cero comisiones por pedido"
              desc="Cada venta es 100% tuya hasta alcanzar el límite."
            />
          </ul>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-white border-t-4 border-[#1518E3] rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-7 h-7 text-[#1518E3] mr-3" />
            <h3 className="text-xl font-bold text-[#333]">
              Después de los $275.000
            </h3>
          </div>
          <ul className="space-y-4">
            <Feature
              color="#1518E3"
              title="Tarifa fija mensual"
              desc="Un único costo predecible para escalar sin límites."
            />
            <Feature
              color="#1518E3"
              title="100% del margen sigue siendo tuyo"
              desc="A diferencia de otras plataformas, mantenés todas tus ganancias."
            />
            <Feature
              color="#1518E3"
              title="Sin porcentajes ni costos ocultos"
              desc="Transparencia total: sabés exactamente cuánto pagás."
            />
          </ul>
        </div>
      </div>

      {/* Mensaje final */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-[#333]">
          Si Locus no te genera ventas, no te cuesta nada.
        </h3>
        <p className="text-gray-600 mt-3 text-lg italic">
          Tu crecimiento es la única forma en que nosotros crecemos.
        </p>
      </div>
    </section>
  );
};

/* Subcomponente reutilizable */
interface FeatureProps {
  color: string;
  title: string;
  desc: string;
}

const Feature = ({ color, title, desc }: FeatureProps) => (
  <li className="flex items-start gap-3">
    <CheckCircle size={20} style={{ color }} className="flex-shrink-0 mt-0.5" />
    <div>
      <span className="font-semibold text-[#333]">{title}</span>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  </li>
);

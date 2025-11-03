import React from "react";
import { CalendarCheck, MessageCircle, MapPin } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section
      id="agendar"
      className="bg-[#242323] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden"
    >
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1E931E20] to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        
        {/* Texto principal */}
        <div className="text-white max-w-2xl">
          <h3 className="flex flex-wrap items-center gap-2 sm:gap-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
            <CalendarCheck className="text-[#1E931E] w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
            <span>
              ¿Querés ver{" "}
              <span className="bg-gradient-to-r from-[#1E931E] to-[#7ED957] text-transparent bg-clip-text">
                Locus en acción?
              </span>
            </span>
          </h3>
          <p className="text-[#CCCCCC] text-base sm:text-lg leading-relaxed">
            Agendá una <strong>demo personalizada y gratuita</strong>. Te mostramos cómo funciona 
            nuestro sistema <strong>sin comisiones</strong> y resolvemos todas tus dudas en solo 
            <strong> 15 minutos.</strong>
          </p>
        </div>

        {/* Botón principal */}
        <div className="flex justify-center md:justify-end">
          <a
            href="https://wa.me/5493442675388?text=Hola%20quiero%20una%20demo%20de%20Locus"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#1E931E] to-[#23B923] text-white rounded-xl font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.05] focus:ring-2 focus:ring-[#23B923] focus:ring-offset-2 focus:ring-offset-[#242323]"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span>Demo por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Opción VIP */}
      <div className="mt-10 pt-6 border-t border-[#333333] text-center text-[#BFBFBF] text-xs sm:text-sm">
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 leading-relaxed">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#BFBFBF]" />
          <span>
            <strong>Opción VIP:</strong> También podemos visitar tu local y hacer la demo in situ.{" "}
            <span className="block sm:inline">
              Disponible en{" "}
              <strong className="text-white">
                Concepción del Uruguay, Entre Ríos
              </strong>.
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

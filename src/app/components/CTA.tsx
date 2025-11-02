import React from "react";
import { CalendarCheck, MessageCircle, MapPin } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section
      id="agendar"
      // Se mantiene el fondo oscuro, padding y centrado
      className="bg-[#242323] p-8 sm:p-10 lg:p-12 mt-10 shadow-2xl " 
    >
      <div className="md:flex md:justify-between md:items-center"> {/* items-center asegura alineación vertical */}
        
        {/* Bloque de Texto y Propuesta de Valor */}
        <div className="text-white max-w-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold flex items-center space-x-3">
            <CalendarCheck className="w-8 h-8 text-[#1E931E] flex-shrink-0" />
            <span>¿Querés ver Locus en acción?</span>
          </h3>
          <p className="mt-3 text-[#BFBFBF] text-lg">
            Agendá una <strong>demo personalizada y gratuita</strong>. Te mostramos cómo funciona
            nuestro sistema sin comisiones y resolvemos todas tus dudas en solo
            15 minutos.
          </p>
        </div>

        {/* Bloque de Botones de acción (Solo WhatsApp) */}
        <div className="mt-8 md:mt-0 flex flex-col sm:flex-row md:items-center">
          
          {/* Botón Principal: WhatsApp (Ajustado a font-semibold text-lg) */}
          <a
            href="https://wa.me/5493442675388?text=Hola%20quiero%20una%20demo%20de%20Locus"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold text-lg shadow-lg transition duration-300 transform hover:scale-[1.05] hover:bg-green-600 min-w-[200px]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Demo por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Mensaje adicional de Opción VIP */}
      <div className="mt-8 pt-6 border-t border-[#333333] text-sm text-[#BFBFBF] flex items-center space-x-2 justify-center">
        <MapPin className="w-4 h-4 text-[#BFBFBF] flex-shrink-0" />
        <span className="text-center">
          Opción VIP: También podemos visitar tu local y hacer la demo in situ
          (disponible en <strong>Concepción del Uruguay, Entre Ríos</strong>).
        </span>
      </div>
    </section>
  );
};
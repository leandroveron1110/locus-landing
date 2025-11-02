import React from "react";
import { CalendarCheck, MessageCircle, Mail, MapPin } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    // Fondo oscuro (#242323) para alto contraste y padding ampliado
    <section
      id="agendar"
      // Usamos tu color negro/oscuro principal para el fondo de alto contraste
      className="bg-[#242323] p-8 sm:p-10 lg:p-12 shadow-2xl max-w-7xl mx-auto"
    >
      <div className="md:flex md:justify-between md:items-center">
        {/* Texto principal con ícono destacado */}
        <div className="text-white max-w-xl">
          {/* Título en blanco/claro con ícono en tu verde principal (#1E931E) */}
          <h3 className="text-2xl sm:text-3xl font-extrabold flex items-center space-x-3">
            <CalendarCheck className="w-8 h-8 text-[#1E931E] flex-shrink-0" />
            <span>¿Querés ver Locus en acción?</span>
          </h3>
          {/* Párrafo en gris claro (#BFBFBF o #F5F8EB) */}
          <p className="mt-3 text-[#BFBFBF] text-lg">
            Agendá una demo personalizada y gratuita. Te mostramos cómo funciona
            nuestro sistema sin comisiones y resolvemos todas tus dudas en solo
            15 minutos.
          </p>
        </div>

        {/* Botones de acción */}
        <div className="mt-8 md:mt-0 flex flex-col sm:flex-row gap-4 md:gap-3 md:items-center">
          
          {/* Botón Principal: WhatsApp (Mantenemos el verde WA por UX) */}
          <a
            href="https://wa.me/5493442675388?text=Hola%20quiero%20una%20demo%20de%20Locus"
            target="_blank"
            rel="noreferrer"
            // Se usa el verde WhatsApp y un hover más oscuro
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-xl font-bold text-base shadow-lg transition duration-300 transform hover:scale-[1.05] hover:bg-green-600 min-w-[200px]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Demo por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Mensaje adicional con ícono (Ahora con la ubicación de Concepción del Uruguay) */}
      <div className="mt-8 pt-6 border-t border-[#333333] text-sm text-[#BFBFBF] flex items-center space-x-2 justify-center">
        <span className="text-center">
          Opción VIP: También podemos visitar tu local y hacer la demo in situ
          (disponible en <strong>Concepción del Uruguay, Entre Ríos</strong>).
        </span>
      </div>
    </section>
  );
};
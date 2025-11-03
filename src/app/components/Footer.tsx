"use client";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#242323] text-center text-gray-400 text-sm py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-2">
        {/* Nombre y propósito */}
        <p className="text-white font-semibold text-base tracking-wide">
          Locus
        </p>
        <p className="text-gray-400">
          La plataforma que conecta a los comercios locales con sus clientes.
        </p>

        {/* Separador sutil */}
        <div className="border-t border-[#333333] w-24 mx-auto my-4"></div>

        {/* Derechos */}
        <p className="text-xs text-gray-500">
          © {currentYear} Locus — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

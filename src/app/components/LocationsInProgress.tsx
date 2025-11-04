// src/components/LocationsInProgress.tsx
import React from "react";
import { Hammer } from "lucide-react"; // icono de lucide-react

interface Local {
  name: string;
  image: string;
  category: string;
}

const locales: Local[] = [
  {
    name: "Hamburguesa en Inglés",
    image: "/hamburguesaeningles.png",
    category: "Hamburguesería",
  },
  {
    name: "La Coqueta",
    image: "/lacoqueta.png",
    category: "Rotisería",
  },
  {
    name: "Locos por lo Salado",
    image: "/locosporlosalado.png",
    category: "Sandwichería",
  },
  {
    name: "Me Gusta",
    image: "/megusta.png",
    category: "Pizzería",
  },
  {
    name: "Optimus",
    image: "/optimus.png",
    category: "Rotisería",
  },
  {
    name: "Urban Food",
    image: "/urbanfood.png",
    category: "Comidas rápidas",
  },
  {
    name: "Otra Historia Mas",
    image: "/otrahitoriamas.png",
    category: "Rotisería",
  },
  {
    name: "Hamburgo",
    image: "/hamburgo.png",
    category: "Hamburguesería y Sandwichería",
  },
  {
    name: "Pimienta Resto",
    image: "/pimienta_resto.jpeg",
    category: "Restaurante",
  },
];

export const LocationsInProgress: React.FC = () => {
  return (
    <section className="py-16 px-6 text-center bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Hammer className="w-6 h-6 text-[#450c1f]" aria-hidden />
          <h2 className="text-3xl font-bold text-[#210110]">
            Locales en proceso de incorporación
          </h2>
        </div>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Estos emprendimientos ya están configurando su espacio en Locus para
          empezar a recibir pedidos online.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {locales.map((local) => (
            <article
              key={local.name}
              className="bg-white shadow-md hover:shadow-xl rounded-2xl p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={local.image}
                alt={local.name}
                className="w-full h-44 object-cover rounded-xl mb-3"
              />
              <h3 className="font-semibold text-lg text-[#450c1f]">
                {local.name}
              </h3>
              <p className="text-sm text-gray-500">{local.category}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-gray-600">
          <p>
            Cada uno de estos negocios está dando el siguiente paso para
            digitalizar sus ventas y automatizar la gestión de envíos.
          </p>
          <p className="text-[#9e2d49] font-medium mt-3">
            Vos también podés sumarte a la nueva forma de vender con Locus 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

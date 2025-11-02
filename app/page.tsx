"use client"
import Head from 'next/head';
import React, { useState } from 'react';

// --- TARIFAS: lógica tomada de tu propuesta original ---
const CINK = 500_000; // $500.000 ARS por bloque
const TARIFA_BASE = 35; // USD base para el primer bloque

const UMBRALES = [
  { limite: 2_000_000, aumentoUSD: 25 }, // hasta 2M -> aumento 25
  { limite: 3_000_000, aumentoUSD: 30 }, // hasta 3M -> aumento 30
  { limite: Infinity, aumentoUSD: 40 }, // >3M -> aumento 40
];

function obtenerAumento(ventasAcumuladas: number) {
  if (ventasAcumuladas < UMBRALES[0].limite) return UMBRALES[0].aumentoUSD;
  else if (ventasAcumuladas < UMBRALES[1].limite) return UMBRALES[1].aumentoUSD;
  return UMBRALES[2].aumentoUSD;
}

function cobroToBusiness(ventas: number) {
  if (ventas <= 0) return 0;
  const bloquesVendidos = Math.ceil(ventas / CINK);
  let tarifaTotal = TARIFA_BASE; // primer bloque

  for (let i = 1; i < bloquesVendidos; i++) {
    const ventasAcumuladas = i * CINK;
    const aumento = obtenerAumento(ventasAcumuladas);
    tarifaTotal += aumento;
  }

  return tarifaTotal;
}

export default function Home() {
  const [ventasInput, setVentasInput] = useState('500000');
  const ventasNumber = Number(ventasInput.replace(/[^0-9]/g, '')) || 0;
  const tarifa = cobroToBusiness(ventasNumber);

  return (
    <div>
      <Head>
        <title>Locus — Plataforma para negocios</title>
        <meta name="description" content="Locus: tu negocio crece, nosotros crecemos con vos. Sin comisiones por venta, tarifa progresiva basada en objetivos." />
      </Head>

      <main className="min-h-screen bg-[#feffd5] text-[#210110]">
        {/* Container */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* HERO */}
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Locus — Tu negocio crece, <span className="text-[#9e2d49]">nosotros crecemos con vos</span>
              </h1>
              <p className="mt-6 text-lg text-gray-800">
                A diferencia de otras plataformas, no cobramos comisiones por venta. Pagás una tarifa fija
                que aumenta solo cuando alcanzás nuevos objetivos de venta.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#como-funciona" className="inline-block bg-[#9e2d49] text-white px-6 py-3 rounded-lg font-semibold shadow">
                  Conocé cómo funciona
                </a>
                <a href="#agendar" className="inline-block border-2 border-[#9e2d49] text-[#9e2d49] px-6 py-3 rounded-lg font-semibold">
                  Agendá una demo
                </a>
              </div>

              <div className="mt-8 text-sm text-gray-700">
                <strong>Transparencia:</strong> sin porcentajes escondidos y sin comisiones por pedido.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Calculadora simple</h3>
              <p className="text-sm text-gray-600">Ingresá tus ventas acumuladas (ARS) para ver la tarifa USD aproximada</p>

              <div className="mt-4">
                <label className="text-sm text-gray-700">Ventas acumuladas (ARS)</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={ventasInput}
                  onChange={(e) => setVentasInput(e.target.value)}
                  className="mt-2 w-full border rounded-md px-3 py-2"
                  aria-label="Ventas acumuladas"
                />
              </div>

              <div className="mt-4 bg-[#f7f1ea] p-4 rounded-md">
                <div className="text-sm text-gray-600">Tarifa estimada total (USD)</div>
                <div className="text-2xl font-bold">${tarifa.toFixed(2)}</div>
                <div className="mt-2 text-xs text-gray-500">Basado en bloques de ${CINK.toLocaleString('es-AR')} ARS</div>
              </div>

              <div className="mt-4 text-xs text-gray-600">
                Nota: la lógica implementada usa los umbrales originalmente definidos en la especificación. Si querés ajustar
                los rangos (por ejemplo 3M / 4M) lo actualizamos fácil.
              </div>
            </div>
          </section>

          {/* PROBLEM & DIFFERENTIAL */}
          <section id="como-funciona" className="mt-16">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-bold">El problema con las plataformas actuales</h2>
                <p className="mt-4 text-gray-700">
                  Muchas plataformas cobran comisiones por pedido que reducen significativamente el margen de los comercios.
                  Locus adopta otra lógica: <strong>no cobramos por venta</strong>. Solo tenés una tarifa fija que crece por bloques
                  a medida que aumentás tus ventas.
                </p>

                <ul className="mt-6 space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="w-8 h-8 rounded-full bg-[#c6b89e] flex items-center justify-center font-bold">1</span>
                    <div>
                      <strong>Transparencia</strong>
                      <div className="text-sm text-gray-600">Sabés exactamente cuánto vas a pagar según tus objetivos.</div>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <span className="w-8 h-8 rounded-full bg-[#c6b89e] flex items-center justify-center font-bold">2</span>
                    <div>
                      <strong>Crece con tu negocio</strong>
                      <div className="text-sm text-gray-600">Pagás más solo si vendés más.</div>
                    </div>
                  </li>

                  <li className="flex gap-3 items-start">
                    <span className="w-8 h-8 rounded-full bg-[#c6b89e] flex items-center justify-center font-bold">3</span>
                    <div>
                      <strong>Sin comisiones por pedido</strong>
                      <div className="text-sm text-gray-600">Mantenés el control de tus precios y margen.</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold">Resumen de tarifas</h3>
                <table className="w-full mt-4 text-sm table-auto">
                  <thead>
                    <tr className="text-left text-xs text-gray-500">
                      <th className="pb-2">Ventas acumuladas</th>
                      <th className="pb-2">Detalle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2">$0 – $499.999 ARS</td>
                      <td className="py-2">Tarifa base: ${TARIFA_BASE} USD</td>
                    </tr>
                    <tr className="bg-[#faf8f6]">
                      <td className="py-2">A partir de cada $500.000</td>
                      <td className="py-2">Aumentos por bloque según umbrales (25–40 USD)</td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-4 text-xs text-gray-500">
                  *Ejemplo: si vendés $1.2M ARS, se cuentan bloques de 500k para calcular la tarifa total.
                </div>
              </div>
            </div>
          </section>

          {/* COMPARATIVA */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold">Comparativa rápida</h2>
            <div className="mt-6 bg-white rounded-2xl p-6 shadow-md">
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">PedidosYa</h4>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li>Comisión por venta (porcentaje)</li>
                    <li>Menor control sobre precios</li>
                    <li>Costos crecientes por volumen</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg bg-[#feffd5]">
                  <h4 className="font-semibold">Locus</h4>
                  <ul className="mt-3 space-y-2 text-gray-700">
                    <li>0% de comisión por pedido</li>
                    <li>Tarifa fija progresiva por bloques</li>
                    <li>Transparencia y control</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">Para el comerciante</h4>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li>Mayor margen por venta</li>
                    <li>Mejor previsibilidad de costos</li>
                    <li>Soporte y onboarding personalizado</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA / Agendar */}
          <section id="agendar" className="mt-16 bg-[#fff] rounded-2xl p-8 shadow-md">
            <div className="md:flex md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-bold">Queres ver Locus en acción?</h3>
                <p className="mt-2 text-gray-600">Agendá una demo personalizada y te mostramos todo en 15 minutos.</p>
              </div>

              <div className="mt-6 md:mt-0 flex gap-3">
                <a
                  href="https://wa.me/5491110000000?text=Hola%20quiero%20una%20demo%20de%20Locus"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 bg-[#9e2d49] text-white rounded-lg font-semibold"
                >
                  Agendar por WhatsApp
                </a>

                <a
                  href="mailto:contacto@locus.com.ar?subject=Demo%20Locus"
                  className="px-5 py-3 border border-[#9e2d49] rounded-lg font-semibold text-[#9e2d49]"
                >
                  Enviar solicitud
                </a>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-500">También podemos visitar tu local y hacer la demo in situ.</div>
          </section>

          {/* FOOTER */}
          <footer className="mt-16 text-center text-sm text-gray-600 pb-8">
            <div className="mb-2">Locus — Plataforma para comercios locales</div>
            <div>
              <a className="underline" href="#">Políticas</a> · <a className="underline" href="#">Contacto</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
export const CINK = 500_000; // $500.000 ARS
export const TARIFA_BASE = 35;

export const UMBRALES = [
  { limite: 2_000_000, aumentoUSD: 25 },
  { limite: 3_000_000, aumentoUSD: 30 },
  { limite: Infinity, aumentoUSD: 40 },
];

export function obtenerAumento(ventasAcumuladas: number) {
  if (ventasAcumuladas < UMBRALES[0].limite) return UMBRALES[0].aumentoUSD;
  else if (ventasAcumuladas < UMBRALES[1].limite) return UMBRALES[1].aumentoUSD;
  return UMBRALES[2].aumentoUSD;
}

export function cobroToBusiness(ventas: number): number {
  if (ventas <= 0) return 0;
  const bloquesVendidos = Math.ceil(ventas / CINK);
  let tarifaTotal = TARIFA_BASE;
  for (let i = 1; i < bloquesVendidos; i++) {
    const ventasAcumuladas = i * CINK;
    tarifaTotal += obtenerAumento(ventasAcumuladas);
  }
  return tarifaTotal;
}

import type { RelatorioSemanal } from "../types/relatorio";

export async function fetchRelatorioSemanal(): Promise<RelatorioSemanal[]> {
  const res = await fetch("http://localhost:8080/relatorios/semanal");
  if (!res.ok) throw new Error("Erro ao buscar relatório semanal");
  return res.json();
}

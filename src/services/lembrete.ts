import type { Lembrete } from "../types/lembrete";

export async function fetchLembretes(): Promise<Lembrete[]> {
  const res = await fetch("http://localhost:8080/lembretes");
  if (!res.ok) throw new Error("Erro ao buscar lembretes");
  return res.json();
}

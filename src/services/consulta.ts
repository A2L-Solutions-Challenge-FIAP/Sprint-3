import type { Consulta } from "../types/consulta";

export async function fetchConsultas(): Promise<Consulta[]> {
  const res = await fetch("http://localhost:8080/consultas");
  if (!res.ok) throw new Error("Erro ao buscar consultas");
  return res.json();
}

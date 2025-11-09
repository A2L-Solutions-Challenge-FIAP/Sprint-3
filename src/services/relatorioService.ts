import type { RelatorioPaciente, RelatorioEspecialidade } from "../types/relatorio";


const API_URL = "http://localhost:8080/relatorios"; 


export async function getRelatorioPorPaciente(inicio: string, fim: string): Promise<RelatorioPaciente[]> {
  const url = `${API_URL}/pacientes?inicio=${inicio}&fim=${fim}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Erro ao buscar relatório por paciente");
  }

  return res.json();
}


export async function getRelatorioEspecialidadeSemanal(): Promise<RelatorioEspecialidade[]> {
  const res = await fetch(`${API_URL}/semana`);

  if (!res.ok) {
    throw new Error("Erro ao buscar relatório semanal por especialidade");
  }

  return res.json();
}

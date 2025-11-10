export interface RelatorioEspecialidade {
  nome: string;
  consultas: number;
  confirmadas: number;
  realizadas: number;
  canceladas: number;
}

export interface RelatorioSemanal {
  nome: string;
  atual: RelatorioEspecialidade;
  anterior: RelatorioEspecialidade;
}

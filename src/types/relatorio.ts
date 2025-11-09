export interface RelatorioPaciente {
  nome: string;
  total: number;
  realizadas: number;
  canceladas: number;
  naoCompareceu: number;
}

export interface RelatorioEspecialidadeItem {
  nome: string;
  consultas: number;
  confirmadas: number;
  realizadas: number;
  canceladas: number;
}

export interface RelatorioEspecialidade {
  nome: string;
  atual: RelatorioEspecialidadeItem;
  anterior: RelatorioEspecialidadeItem;
}

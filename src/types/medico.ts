import type { Pessoa } from "./pessoa";

export interface Medico {
  id: number;
  crm: string;
  especialidade: string;
  pessoa: Pessoa;
}

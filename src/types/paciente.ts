import type { Pessoa } from "./pessoa";

export interface Paciente {
  id: number;
  cns: string;
  pessoa: Pessoa;
}
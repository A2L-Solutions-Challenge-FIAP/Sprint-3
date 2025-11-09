import type { StatusLembrete, CanalLembrete } from "./enums";
import type { Consulta } from "./consulta";

export interface Lembrete {
  id: number;
  mensagem: string;
  dataEnvio: string; 
  status: StatusLembrete;
  canal: CanalLembrete;
  consulta: Consulta;
}
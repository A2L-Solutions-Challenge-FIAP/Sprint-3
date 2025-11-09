import type { Paciente } from "./paciente";
import type { Medico } from "./medico";
import type { StatusConsulta, TipoConsulta } from "./enums";

export interface Consulta {
  id: number;
  dataConsulta: string; 
  tipoConsulta: TipoConsulta;
  status: StatusConsulta;
  paciente: Paciente;
  medico: Medico;
}
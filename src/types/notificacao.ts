import type { StatusNotificacao } from "./enums";

export interface Notificacao{
  id: string;
  paciente: string;
  medico: string;
  especialidade: string;
  dataHora: string;
  canal: "EMAIL" | "SMS" | "WHATSAPP";
  enviada: boolean;
  status: StatusNotificacao;
}


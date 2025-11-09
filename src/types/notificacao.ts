import type { StatusNotificacao } from "./enums";
export interface Notificacao {
  id: number;
  dataEnvio: string;
  status: StatusNotificacao;
  lembrete: {
    mensagem: string; // ou título da notificação
  };
}


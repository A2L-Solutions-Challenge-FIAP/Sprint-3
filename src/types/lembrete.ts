export interface Lembrete {
  id: number;
  mensagem: string;
  dataEnvio: string;
  statusLembrete: "PENDENTE" | "ENVIADO" | "CONFIRMADO" | "FALHOU";
  canal: "SMS" | "WHATSAPP" | "EMAIL";
  nomePaciente: string;
  cnsPaciente: string;
  nomeMedico: string;
  crmMedico: string;
  especialidade: string;
  tipoConsulta: string;
}
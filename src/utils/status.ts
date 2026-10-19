import type { AppointmentStatus, OrderStatus } from "../types/dashboard";

export const appointmentStatusLabels: Record<AppointmentStatus, string> = {
  em_andamento: "Em andamento",
  aguardando_pecas: "Aguardando peças",
  agendado: "Agendado",
  concluido: "Concluído",
};

export const orderStatusLabels: Record<OrderStatus, string> = {
  em_andamento: "Em andamento",
  aguardando_pecas: "Aguardando peças",
  concluida: "Concluída",
};

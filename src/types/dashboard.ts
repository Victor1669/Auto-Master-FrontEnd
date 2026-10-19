import type { User } from "./user";

export type AppointmentStatus =
  | "em_andamento"
  | "aguardando_pecas"
  | "agendado"
  | "concluido";

export type OrderStatus = "em_andamento" | "aguardando_pecas" | "concluida";

export type Appointment = {
  id: string;
  time: string;
  client: string;
  vehicle: string;
  plate: string;
  service: string;
  status: AppointmentStatus;
};

export type AgendaStats = {
  scheduledToday: number;
  inProgress: number;
  awaitingParts: number;
  completedToday: number;
};

export type AgendaOverview = {
  date: string;
  stats: AgendaStats;
  appointments: Appointment[];
};

export type ServiceOrder = {
  id: string;
  code: string;
  vehicle: string;
  plate: string;
  service: string;
  status: OrderStatus;
};

export type MechanicStats = {
  openOrders: number;
  completedToday: number;
};

export type MechanicOverview = {
  mechanic: User;
  stats: MechanicStats;
  orders: ServiceOrder[];
};

import type {
  AgendaStats,
  Appointment,
  MechanicStats,
  ServiceOrder,
} from "../../types/dashboard";
import type { User } from "../../types/user";

export const appointmentsMock: Appointment[] = [
  {
    id: "1",
    time: "08:00",
    client: "Carlos Almeida",
    vehicle: "Honda Civic",
    plate: "FQK-3287",
    service: "Revisão geral",
    status: "em_andamento",
  },
  {
    id: "2",
    time: "10:30",
    client: "Lucas Ferreira",
    vehicle: "Toyota Corolla",
    plate: "EJT-4621",
    service: "Troca de óleo",
    status: "aguardando_pecas",
  },
  {
    id: "3",
    time: "13:00",
    client: "Mariana Costa",
    vehicle: "Volkswagen Gol",
    plate: "KLP-7753",
    service: "Alinhamento e balanceamento",
    status: "agendado",
  },
  {
    id: "4",
    time: "15:30",
    client: "Rafael Santos",
    vehicle: "Ford Ranger",
    plate: "QWE-9021",
    service: "Troca de pastilhas",
    status: "agendado",
  },
  {
    id: "5",
    time: "17:00",
    client: "Pedro Lima",
    vehicle: "Chevrolet Onix",
    plate: "JKS-7342",
    service: "Troca de bateria",
    status: "agendado",
  },
];

export const agendaStatsMock: AgendaStats = {
  scheduledToday: 5,
  inProgress: 3,
  awaitingParts: 2,
  completedToday: 5,
};

export const mechanicMock: User = {
  id: "mechanic-1",
  name: "Carlos Mendes",
  role: "Mecânico",
  avatarUrl: null,
};

export const ordersMock: ServiceOrder[] = [
  {
    id: "123",
    code: "000123",
    vehicle: "Honda Civic",
    plate: "FOK-3287",
    service: "Revisão geral",
    status: "em_andamento",
  },
  {
    id: "118",
    code: "000118",
    vehicle: "Toyota Corolla",
    plate: "EJT-4621",
    service: "Troca de óleo",
    status: "em_andamento",
  },
  {
    id: "116",
    code: "000116",
    vehicle: "Volkswagen Gol",
    plate: "KLP-7759",
    service: "Alinhamento e balanceamento",
    status: "aguardando_pecas",
  },
  {
    id: "110",
    code: "000110",
    vehicle: "Ford Ranger",
    plate: "QWE-9021",
    service: "Troca de pastilhas",
    status: "em_andamento",
  },
  {
    id: "105",
    code: "000105",
    vehicle: "Chevrolet Onix",
    plate: "JKS-7342",
    service: "Troca de bateria",
    status: "em_andamento",
  },
  {
    id: "112",
    code: "000112",
    vehicle: "Fiat Argo",
    plate: "RTB-1180",
    service: "Revisão de freios",
    status: "concluida",
  },
  {
    id: "108",
    code: "000108",
    vehicle: "Hyundai HB20",
    plate: "MNC-5520",
    service: "Troca de correia",
    status: "concluida",
  },
  {
    id: "101",
    code: "000101",
    vehicle: "Jeep Renegade",
    plate: "PLA-9034",
    service: "Diagnóstico eletrônico",
    status: "concluida",
  },
];

export const mechanicStatsMock: MechanicStats = {
  openOrders: ordersMock.filter((order) => order.status !== "concluida").length,
  completedToday: ordersMock.filter((order) => order.status === "concluida")
    .length,
};

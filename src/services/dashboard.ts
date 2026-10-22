import type {
  AgendaOverview,
  Appointment,
  MechanicOverview,
} from "../types/dashboard";
import {
  agendaStatsMock,
  appointmentsMock,
  mechanicMock,
  mechanicStatsMock,
  ordersMock,
} from "./mocks/dashboard";

type AgendaParams = {
  query: string;
};

export function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function matchesQuery(appointment: Appointment, terms: string[]) {
  const haystack = normalize(
    [
      appointment.client,
      appointment.vehicle,
      appointment.plate,
      appointment.plate.replace("-", ""),
      appointment.service,
    ].join(" "),
  );

  return terms.every((term) => haystack.includes(term));
}

export async function getAgendaOverview({
  query,
}: AgendaParams): Promise<AgendaOverview> {
  const terms = normalize(query).split(/\s+/).filter(Boolean);

  return {
    date: new Date().toISOString(),
    stats: agendaStatsMock,
    appointments: appointmentsMock.filter((appointment) =>
      matchesQuery(appointment, terms),
    ),
  };
}

export async function getMechanicOverview(): Promise<MechanicOverview> {
  return {
    mechanic: mechanicMock,
    stats: mechanicStatsMock,
    orders: ordersMock,
  };
}

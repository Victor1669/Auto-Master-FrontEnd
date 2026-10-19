import type { User } from "../types/user";
import { currentUserMock } from "./mocks/user";

export async function getCurrentUser(): Promise<User> {
  return currentUserMock;
}

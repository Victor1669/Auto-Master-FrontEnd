import { getCurrentUser } from "../services/user";

export async function appLoader() {
  const user = await getCurrentUser();

  return { user };
}

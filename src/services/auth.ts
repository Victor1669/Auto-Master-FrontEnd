const SESSION_KEY = "automaster:session";

type Credentials = {
  email: string;
  password: string;
  remember: boolean;
};

type Session = {
  token: string;
};

export function getSession(): Session | null {
  const raw =
    localStorage.getItem(SESSION_KEY) ?? sessionStorage.getItem(SESSION_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as Session;
  } catch {
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);
}

export async function login({ email, password, remember }: Credentials) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(
      response.status === 401
        ? "E-mail ou senha incorretos."
        : "Não foi possível entrar. Tente novamente.",
    );
  }

  const session = (await response.json()) as Session;
  const storage = remember ? localStorage : sessionStorage;

  clearSession();
  storage.setItem(SESSION_KEY, JSON.stringify({ token: session.token }));
}

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4545";

export type AuthResponse = {
  username: string;
  role?: string;
  message?: string;
  error?: string;
};

export async function loginUser(username: string, password: string): Promise<AuthResponse> {
  const res = await fetch(`${API_BASE}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function signupUser(username: string, password: string, email?: string): Promise<AuthResponse> {
  const res = await fetch(`${API_BASE}/user/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, email }),
  });
  return res.json();
}

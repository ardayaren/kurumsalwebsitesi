import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE = "admin_session";

function secret() {
  return process.env.ADMIN_SESSION_SECRET || "dev-secret-change-me";
}

export function signSession(user: string): string {
  const exp = Date.now() + 1000 * 60 * 60 * 12; // 12 saat
  const payload = `${user}.${exp}`;
  const sig = createHmac("sha256", secret()).update(payload).digest("hex");
  return Buffer.from(`${payload}.${sig}`).toString("base64url");
}

export async function setSession(user: string) {
  const store = await cookies();
  store.set(COOKIE, signSession(user), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
}

export async function clearSession() {
  const store = await cookies();
  store.delete(COOKIE);
}

export async function getSessionUser(): Promise<string | null> {
  const store = await cookies();
  const raw = store.get(COOKIE)?.value;
  if (!raw) return null;
  try {
    const decoded = Buffer.from(raw, "base64url").toString();
    const [user, exp, sig] = decoded.split(".");
    if (!user || !exp || !sig) return null;
    if (Number(exp) < Date.now()) return null;
    const expected = createHmac("sha256", secret()).update(`${user}.${exp}`).digest("hex");
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
    return user;
  } catch {
    return null;
  }
}

export function checkCredentials(user: string, pass: string): boolean {
  return (
    user === (process.env.ADMIN_USER || "admin") &&
    pass === (process.env.ADMIN_PASS || "admin123")
  );
}

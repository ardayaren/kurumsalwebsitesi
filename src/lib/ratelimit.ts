import { headers } from "next/headers";

const buckets = new Map<string, number[]>();

/** Basit in-memory sliding-window rate limit. limit: pencere içindeki max istek. */
export async function rateLimit(key: string, limit: number, windowMs: number): Promise<boolean> {
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "local";
  const bucket = `${key}:${ip}`;
  const now = Date.now();
  const prev = (buckets.get(bucket) || []).filter((t) => now - t < windowMs);
  if (prev.length >= limit) return false;
  prev.push(now);
  buckets.set(bucket, prev);
  return true;
}

import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

const DATA_PATH = join(process.cwd(), "src/lib/data/fallback.json");

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const raw = await readFile(DATA_PATH, "utf-8");
    const data = JSON.parse(raw);
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    // Return fallback import as last resort
    const fallback = await import("@/lib/data/fallback.json");
    return NextResponse.json(fallback.default);
  }
}

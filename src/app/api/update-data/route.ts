import { NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

const DATA_PATH = join(process.cwd(), "src/lib/data/fallback.json");
const UPDATE_SECRET = process.env.UPDATE_SECRET;

export async function POST(request: Request) {
  // Auth check
  const authHeader = request.headers.get("authorization");
  if (!UPDATE_SECRET || authHeader !== `Bearer ${UPDATE_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const updates = await request.json();
    const currentRaw = await readFile(DATA_PATH, "utf-8");
    const current = JSON.parse(currentRaw);

    // Deep merge updates into current data
    if (updates.metaplanet) {
      current.metaplanet = { ...current.metaplanet, ...updates.metaplanet };
    }
    if (updates.strategy) {
      current.strategy = { ...current.strategy, ...updates.strategy };
    }
    if (updates.prices) {
      current.prices = { ...current.prices, ...updates.prices };
    }

    current.lastUpdated = new Date().toISOString();
    current.source = updates.source || current.source;

    await writeFile(DATA_PATH, JSON.stringify(current, null, 2));

    return NextResponse.json({
      success: true,
      lastUpdated: current.lastUpdated,
      updated: Object.keys(updates),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update", detail: String(error) },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  // Auth check
  const authHeader = request.headers.get("authorization");
  if (!UPDATE_SECRET || authHeader !== `Bearer ${UPDATE_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const raw = await readFile(DATA_PATH, "utf-8");
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}

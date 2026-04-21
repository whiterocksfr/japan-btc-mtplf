import { NextResponse } from "next/server";
import { readFile, writeFile, mkdir } from "fs/promises";
import { join } from "path";

const DATA_PATH = join(process.cwd(), "src/lib/data/fallback.json");

// CoinGecko free API - no key needed
const COINGECKO_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,metaplanet&vs_currencies=usd,jpy&include_24hr_change=true";

// Yahoo Finance quote API for individual tickers
async function fetchYahooPrice(ticker: string): Promise<number | null> {
  try {
    const res = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&range=1d`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data?.chart?.result?.[0]?.meta?.regularMarketPrice ?? null;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  // Verify cron secret (Vercel injects this for cron jobs)
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Read current data
    const currentRaw = await readFile(DATA_PATH, "utf-8");
    const current = JSON.parse(currentRaw);

    // Fetch BTC price from CoinGecko
    let btcUsd = current.prices.btcUsd;
    try {
      const cgRes = await fetch(COINGECKO_URL);
      if (cgRes.ok) {
        const cgData = await cgRes.json();
        if (cgData.bitcoin?.usd) {
          btcUsd = cgData.bitcoin.usd;
        }
      }
    } catch {
      // Keep existing price on failure
    }

    // Fetch share prices
    const [mstrPrice, metaplanetJpy] = await Promise.all([
      fetchYahooPrice("MSTR"),
      fetchYahooPrice("3350.T"),
    ]);

    // Fetch STRC price
    const strcPrice = await fetchYahooPrice("STRC");

    // Update prices only - don't touch company data
    const jpyUsdRate = metaplanetJpy && metaplanetJpy > 0 ? 1 / (metaplanetJpy / (current.prices.metaplanet3350Usd || 2.13) * (current.prices.metaplanet3350Jpy || 339) / metaplanetJpy) : current.prices.jpyUsdRate;

    current.prices = {
      btcUsd,
      metaplanet3350Jpy: metaplanetJpy ?? current.prices.metaplanet3350Jpy,
      metaplanet3350Usd: metaplanetJpy
        ? metaplanetJpy * (current.prices.jpyUsdRate || 0.006276)
        : current.prices.metaplanet3350Usd,
      mstrUsd: mstrPrice ?? current.prices.mstrUsd,
      jpyUsdRate: current.prices.jpyUsdRate,
    };

    // Update Strategy STRC price if available
    if (strcPrice) {
      current.strategy.strcPrice = strcPrice;
    }
    if (mstrPrice) {
      current.strategy.mstrPrice = mstrPrice;
    }

    // Recalculate NAV-dependent metrics with new BTC price
    const mpBtcNav = current.metaplanet.btcHoldings * btcUsd;
    current.metaplanet.marketCapMnav = parseFloat(
      (current.metaplanet.marketCapUsd / mpBtcNav).toFixed(2)
    );

    const stBtcNav = current.strategy.btcHoldings * btcUsd;
    current.strategy.btcReserveValueUsd = stBtcNav;
    current.strategy.mNav = parseFloat(
      (current.strategy.enterpriseValueUsd / stBtcNav).toFixed(2)
    );

    current.lastUpdated = new Date().toISOString();

    // Write updated data
    await writeFile(DATA_PATH, JSON.stringify(current, null, 2));

    return NextResponse.json({
      success: true,
      updated: {
        btcUsd,
        metaplanet3350Jpy: current.prices.metaplanet3350Jpy,
        mstrUsd: current.prices.mstrUsd,
        strcPrice: current.strategy.strcPrice,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to refresh prices", detail: String(error) },
      { status: 500 }
    );
  }
}

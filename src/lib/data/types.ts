export interface LivePrices {
  btcUsd: number;
  metaplanet3350Jpy: number;
  metaplanet3350Usd: number;
  mstrUsd: number;
  jpyUsdRate: number;
}

export interface MetaplanetData {
  btcHoldings: number;
  avgCostPerBtc: number;
  totalCostBasis: number;
  basicShares: number;
  dilutedShares: number;
  satsPerBasicShare: number;
  satsPerDilutedShare: number;
  btcYieldYtd: number;
  btcYieldQtd: number;
  btcGainYtd: number;
  bseReturn: number;
  marketCapUsd: number;
  enterpriseValueUsd: number;
  evMnav: number;
  marketCapMnav: number;
  totalDebtUsd: number;
  totalPreferredUsd: number;
  leverageRatio: number;
  amplificationRatio: number;
  mercuryDividendRate: number;
  mercuryAnnualDividendUsd: number;
  coverageYears: number;
}

export interface StrategyData {
  btcHoldings: number;
  mstrPrice: number;
  btcReserveValueUsd: number;
  marketCapUsd: number;
  enterpriseValueUsd: number;
  mNav: number;
  dilutedShares: number;
  totalDebtUsd: number;
  totalPreferredUsd: number;
  annualObligationsUsd: number;
  btcYieldYtd: number;
  btcYieldQtd: number;
  usdReserveUsd: number;
  coverageYears: number;
  strcFaceValue: number;
  strcDividendRate: number;
  strcPrice: number;
}

export interface SiteData {
  lastUpdated: string;
  source: string;
  prices: LivePrices;
  metaplanet: MetaplanetData;
  strategy: StrategyData;
}

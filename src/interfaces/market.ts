export interface MarketInterface {
  getTopOrderBy(orderBy: OrderBy, top: number, orderType?: OrderType): (keyof CoinByUuids)[];
  getAllUuids(): CoinByUuids;
  getCoinByUuid(uuid: keyof CoinByUuids): Coin;
  createTableInfos(orderBy: OrderBy, orderType: OrderType, top?: number): TableInfo[];
  getMarketStats(): MarketStats;
}

export interface MarketProps {
  status: string;
  data: {
    stats: MarketStats;
    coins: Coin[];
  };
}

export type OrderType = 'HIGH_TO_LOW' | 'LOW_TO_HIGH';

export interface MarketStats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
}

export interface Coin {
  image: string | undefined;
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: number;
  price: number;
  btcPrice: number;
  listedAt: number;
  change: number;
  rank: number;
  sparkline: string[];
  coinrankingUrl: string;
  '24hVolume': number;
}

export interface TableInfo {
  uuid: string;
  rank: number;
  iconUrl: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  marketCap: number;
  '24hVolume': number;
  sparkline: string[];
}

export type OrderBy = 'marketCap' | 'price' | 'change' | 'rank' | '24hVolume';

export interface CoinByUuids {
  [uuid: string]: Coin;
}

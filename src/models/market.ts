import {
  MarketInterface,
  MarketProps,
  MarketStats,
  Coin,
  OrderBy,
  CoinByUuids,
  TableInfo,
  OrderType,
} from '../interfaces';

export class Market implements MarketInterface {
  status: string;
  stats: MarketStats;
  coinByUuids: CoinByUuids;
  coinByOrder: (keyof CoinByUuids)[];

  constructor(props: MarketProps, orderBy?: OrderBy) {
    this.status = props.status;
    this.stats = props.data.stats;
    this.coinByUuids = props.data.coins.reduce((acc, coin) => {
      acc[coin.uuid] = coin;
      return acc;
    }, {} as CoinByUuids);
    this.coinByOrder = Object.keys(this.coinByUuids);
    if (orderBy) this.coinByOrder = this.getTopOrderBy(orderBy, this.coinByOrder.length);
  }

  /**
   * Get top coins by orderBy
   */
  getTopOrderBy(orderBy: OrderBy, top: number, orderType?: OrderType): (keyof CoinByUuids)[] {
    return [...this.coinByOrder]
      .sort((a, b) => {
        if (orderType === 'LOW_TO_HIGH') {
          return this.coinByUuids[a][orderBy] - this.coinByUuids[b][orderBy];
        } else {
          return this.coinByUuids[b][orderBy] - this.coinByUuids[a][orderBy];
        }
      })
      .slice(0, top);
  }

  /**
   * Get All coins by orderBy
   */
  getAllUuids() {
    return this.coinByUuids;
  }

  /**
   * Get coin data by uuid
   */
  getCoinByUuid(uuid: keyof CoinByUuids) {
    return this.coinByUuids[uuid] ?? ({} as Coin);
  }

  /**
   * Create data for table
   */
  createTableInfos(orderBy: OrderBy, orderType: OrderType, top?: number): TableInfo[] {
    const uuids = this.getTopOrderBy(orderBy, top || this.coinByOrder.length, orderType);
    return uuids.map((uuid) => {
      const coin = this.getCoinByUuid(uuid);
      return {
        uuid: coin.uuid,
        rank: coin.rank,
        iconUrl: coin.iconUrl,
        name: coin.name,
        symbol: coin.symbol,
        price: coin.price,
        change: coin.change,
        marketCap: coin.marketCap,
        '24hVolume': coin['24hVolume'],
        sparkline: coin.sparkline,
      };
    });
  }

  /**
   * Get market stats
   */
  getMarketStats() {
    return this.stats;
  }
}

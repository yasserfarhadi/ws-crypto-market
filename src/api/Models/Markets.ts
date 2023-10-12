export interface RootObject {
  count: number;
  next?: any;
  previous?: any;
  results: Market[];
}

export interface Market {
  id: number;
  currency1: Currency;
  currency2: Currency;
  tradable: boolean;
  for_test: boolean;
  otc_sell_percent: string;
  otc_buy_percent: string;
  otc_max_buy_amount: string;
  otc_max_sell_amount: string;
  order_book_info: Orderbookinfo;
  internal_price_info: Internalpriceinfo;
  price_info: Internalpriceinfo;
  price: string;
  title: string;
  code: string;
  title_fa: string;
  trading_view_source: string;
  trading_view_symbol: string;
  otc_market: boolean;
  text: string;
  volume_24h: string;
  market_cap: string;
  circulating_supply: string;
  all_time_high: string;
  change?: number;
}

export interface Internalpriceinfo {
  created_at: number;
  price: string;
  change: number;
  min: string;
  max: string;
  time?: any;
  mean?: any;
  value?: any;
  amount?: any;
}

export interface Orderbookinfo {
  created_at?: any;
  price: string;
  change: number;
  min: string;
  max: string;
  time: string;
  mean: string;
  value: string;
  amount: string;
}

export interface Currency {
  id: number;
  title: string;
  title_fa: string;
  code: string;
  tradable: boolean;
  for_test: boolean;
  image: string;
  decimal: number;
  decimal_amount: number;
  decimal_irt: number;
  color: string;
  high_risk: boolean;
  show_high_risk: boolean;
  withdraw_commission: string;
  tags: any[];
  etf: boolean;
  for_binvest: boolean;
}

export interface MarketPriceUpdate {
  created_at: number;
  price: string;
  change: number;
  min: string;
  max: string;
}

export interface MarkketUpdateList {
  [key: string]: MarketPriceUpdate;
}

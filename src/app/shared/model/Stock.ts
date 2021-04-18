import {StockQuote} from "./StockQuote";
import {StockStats} from "./StockStats";
import {StockDividend} from "./StockDividend";

export class Stock {
  symbol : string;
  name : string;
  currency : string;
  stockExchange : string;
  quote: StockQuote;
  stats: StockStats;
  dividend: StockDividend;
}

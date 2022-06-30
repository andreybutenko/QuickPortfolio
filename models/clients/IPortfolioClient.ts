import { IPortfolio } from 'models/data/IPortfolio';

/** Interface for portfolio clients */
export interface IPortfolioClient {
  /** Get portfolio with an ID */
  get(id: string): Promise<IPortfolio | undefined>;

  /** List portfolios */
  list(paginationToken?: string): Promise<{
    portfolios: IPortfolio[];
    paginationToken: string | undefined;
  }>;

  /** Put portfolio */
  put(portfolio: Partial<IPortfolio>): Promise<IPortfolio>;
}

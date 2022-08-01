import { IPortfolioClient } from 'models/clients';
import { IPortfolio } from 'models/data';
import { constants, isUndefined } from 'utils';

/** Client to interact with portfolio API */
export class PortfolioApiClient implements IPortfolioClient {
  /** Get portfolio with an ID */
  async get(id: string) {
    const response = await fetch(`/api/portfolio/${id}`);
    const json = await response.json();

    return json.portfolio as IPortfolio;
  }

  /** List portfolios */
  async list(paginationToken?: string) {
    const queryParams = !isUndefined(paginationToken)
      ? `?paginationToken=${paginationToken}`
      : '';
    const response = await fetch(`/api/portfolio/list${queryParams}`);
    const json = await response.json();

    return json as {
      portfolios: IPortfolio[];
      paginationToken: string | undefined;
    };
  }

  /** Put portfolio */
  async put(portfolio: Partial<IPortfolio>) {
    const response = await fetch('/api/portfolio/create', {
      method: constants.PUT,
      body: JSON.stringify(portfolio),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    return json.portfolio as IPortfolio;
  }
}

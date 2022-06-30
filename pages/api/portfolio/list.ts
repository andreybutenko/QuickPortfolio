import { IPortfolio } from 'models/data';
import { IApiErrorResponse } from 'models/data/IApiErrorResponse';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PortfolioDbClient } from 'utils/clients';
import { constants } from 'utils';

interface IListPortfoliosResponse {
  portfolios: IPortfolio[];
  paginationToken: string | undefined;
}

/** List portfolios */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IListPortfoliosResponse | IApiErrorResponse>
) {
  if (req.method !== constants.GET) {
    return res.status(405).send({ message: constants.METHOD_NOT_ALLOWED });
  }

  try {
    const portfolioClient = new PortfolioDbClient();
    const { portfolios, paginationToken } = await portfolioClient.list();

    return res.status(200).json({ portfolios, paginationToken });
  } catch (err) {
    console.error(err);

    return res.status(500).send({ message: constants.INTERNAL_SERVER_ERROR });
  }
}

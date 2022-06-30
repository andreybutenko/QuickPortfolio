import { IPortfolio } from 'models/data';
import { IApiErrorResponse } from 'models/data';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PortfolioDbClient } from 'utils/clients';
import { constants, isUndefined } from 'utils';

interface IGetPortfolioResponse {
  portfolio: IPortfolio;
}

/** Get portfolios */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IGetPortfolioResponse | IApiErrorResponse>
) {
  if (req.method !== constants.GET) {
    return res.status(405).send({ message: constants.METHOD_NOT_ALLOWED });
  }

  const { id } = req.query;

  try {
    const portfolioClient = new PortfolioDbClient();
    const portfolio = await portfolioClient.get(id as string);

    if (isUndefined(portfolio)) {
      return res.status(404).send({ message: constants.NOT_FOUND });
    }

    return res.status(200).json({ portfolio: portfolio as IPortfolio });
  } catch (err) {
    console.error(err);

    return res.status(500).send({ message: constants.INTERNAL_SERVER_ERROR });
  }
}

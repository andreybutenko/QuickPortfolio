import { IPortfolio } from 'models/data';
import { IApiErrorResponse } from 'models/data/IApiErrorResponse';
import type { NextApiRequest, NextApiResponse } from 'next';
import { constants, isUndefined } from 'utils';
import { PortfolioDbClient } from 'utils/clients';
import { v4 as generateUuid } from 'uuid';

interface ICreatePortfoliosResponse {
  portfolio: IPortfolio;
}

/** List portfolios */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICreatePortfoliosResponse | IApiErrorResponse>
) {
  if (req.method !== constants.PUT) {
    return res.status(405).send({ message: constants.METHOD_NOT_ALLOWED });
  }

  try {
    // Check if the user input is valid
    const params = req.body as IPortfolio;
    const isValidRequest = !isUndefined(params?.content?.title);
    if (!isValidRequest) {
      return res.status(400).send({ message: constants.BAD_REQUEST });
    }

    // Construct portfolio object
    const currentTime = new Date().toISOString();
    const portfolio: IPortfolio = {
      id: generateUuid(),
      meta: {
        createTime: currentTime,
        modifyTime: currentTime,
      },
      content: {
        title: params.content.title,
      },
    };

    // Store portfolio object in DynamoDB
    const portfolioClient = new PortfolioDbClient();
    await portfolioClient.put(portfolio);

    return res.status(200).json({ portfolio: portfolio });
  } catch (err) {
    console.error(err);

    return res.status(500).send({ message: constants.INTERNAL_SERVER_ERROR });
  }
}

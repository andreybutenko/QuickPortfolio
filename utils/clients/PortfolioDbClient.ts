import {
  AttributeMap,
  ItemList,
  PutItemInputAttributeMap,
} from 'aws-sdk/clients/dynamodb';
import { DynamoDbTable } from 'enums';
import { IPortfolioClient } from 'models/clients';
import { IPortfolio } from 'models/data';
import { getDynamoDbClient } from 'utils/api';
import { isUndefined } from 'utils';

/** Client to interact with portfolio DynamoDB */
export class PortfolioDbClient implements IPortfolioClient {
  ddbClient: AWS.DynamoDB;

  constructor() {
    this.ddbClient = getDynamoDbClient();
  }

  /** Get portfolio with an ID */
  async get(id: string) {
    const getData = await this.ddbClient
      .getItem({
        TableName: DynamoDbTable.PORTFOLIO_DEV,
        Key: {
          id: {
            S: id as string,
          },
        },
      })
      .promise();

    return unmarshalPortfolio(getData.Item);
  }

  /** List portfolios */
  async list(paginationToken?: string) {
    // TODO handle pagination

    const scanData = await this.ddbClient
      .scan({
        TableName: DynamoDbTable.PORTFOLIO_DEV,
      })
      .promise();

    return {
      portfolios: unmarshalPortfolios(scanData.Items),
      paginationToken: undefined,
    };
  }

  /** Put portfolio */
  async put(portfolio: IPortfolio) {
    await this.ddbClient
      .putItem({
        TableName: DynamoDbTable.PORTFOLIO_DEV,
        Item: marshalPortfolio(portfolio),
      })
      .promise();

    return portfolio;
  }
}

/** Unmarshal portfolios from DynamoDB */
function unmarshalPortfolios(portfolios?: ItemList): IPortfolio[] {
  return (
    (portfolios?.map((portfolio) =>
      unmarshalPortfolio(portfolio)
    ) as IPortfolio[]) || []
  );
}

/** Unmarshal portfolio from DynamoDB */
function unmarshalPortfolio(portfolio?: AttributeMap): IPortfolio | undefined {
  if (isUndefined(portfolio)) {
    return;
  }

  return {
    id: portfolio?.id?.S as string,
    meta: {
      createTime: portfolio?.meta?.M?.createTime?.S as string,
      modifyTime: portfolio?.meta?.M?.modifyTime?.S as string,
    },
    content: {
      title: portfolio?.content?.M?.title?.S as string,
    },
  };
}

/** Marshal portfolio for DynamoDB */
function marshalPortfolio(portfolio: IPortfolio): PutItemInputAttributeMap {
  return {
    id: { S: portfolio.id },
    meta: {
      M: {
        createTime: { S: portfolio.meta.createTime },
        modifyTime: { S: portfolio.meta.modifyTime },
      },
    },
    content: {
      M: {
        title: { S: portfolio.content.title },
      },
    },
  };
}

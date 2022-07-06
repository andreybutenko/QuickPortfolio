import {
  AttributeMap,
  ItemList,
  PutItemInputAttributeMap,
} from 'aws-sdk/clients/dynamodb';
import { DynamoDbTable } from 'enums';
import { IPortfolioClient } from 'models/clients';
import {
  IPortfolio,
  WorkHistory,
  Projects,
  Skills,
  Contact,
  Message,
} from 'models/data';
import { getDynamoDbClient } from 'utils/api';
import { isUndefined } from 'utils';
import { CardContent } from '@mui/material';
import { workerData } from 'worker_threads';

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
function unmarshalPortfolio(
  portfolio: AttributeMap,
  work: WorkHistory,
  projects: AttributeMap,
  skills: AttributeMap,
  contact: AttributeMap,
  message: AttributeMap
): IPortfolio | undefined {
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
      name: portfolio?.content?.M?.name?.S as string,
      headshot: portfolio?.content?.M?.name?.S as string,
      about: portfolio?.content?.M?.name?.S as string,
    },
  };
}

/** Marshal portfolio for DynamoDB */
function marshalPortfolio(
  portfolio: IPortfolio,
  work: WorkHistory,
  projects: Projects,
  skills: Skills,
  contact: Contact,
  message: Message
): PutItemInputAttributeMap {
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
        name: { S: portfolio.content.name },
        headshot: { S: portfolio.content.headshot },
        about: { S: portfolio.content.about },
        work: {
          M: {
            position: { S: work.position },
            company: { S: work.company },
            dateWorked: { S: work.dateWorked },
            description: { S: work.description },
          },
        },
        projects: {
          M: {
            title: { S: projects.title },
            picture: { S: projects.picture },
            summary: { S: projects.summary },
            viewCode: { S: projects.viewCode },
            liveDemo: { S: projects.liveDemo },
          },
        },
        skills: {
          M: {
            tech: { SS: skills.tech },
            soft: { SS: skills.soft },
          },
        },
        contact: {
          M: {
            codeRepoLink: { S: contact.codeRepoLink },
            linkedin: { S: contact.linkedin },
            email: { S: contact.email },
          },
        },
        message: {
          M: {
            firstName: { S: message.firstName },
            lastName: { S: message.lastName },
            subject: { S: message.subject },
            messages: { S: message.messages },
          },
        },
      },
    },
  };
}

import {
  AttributeMap,
  ItemList,
  PutItemInputAttributeMap,
} from 'aws-sdk/clients/dynamodb';
import { DynamoDbTable } from 'enums';
import { IPortfolioClient } from 'models/clients';
import * as PortfolioDefinitions from 'models/data/IPortfolio';
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
  async put(portfolio: PortfolioDefinitions.IPortfolio) {
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
function unmarshalPortfolios(
  portfolios?: ItemList
): PortfolioDefinitions.IPortfolio[] {
  return (
    (portfolios?.map((portfolio) =>
      unmarshalPortfolio(portfolio)
    ) as PortfolioDefinitions.IPortfolio[]) || []
  );
}

/** Unmarshal portfolio from DynamoDB */
function unmarshalPortfolio(
  portfolio?: AttributeMap
): PortfolioDefinitions.IPortfolio | undefined {
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
      title: portfolio?.content?.M?.title?.S || '',
      name: portfolio?.content?.M?.name?.S || '',
      headshot: portfolio?.content?.M?.headshot?.S || '',
      about: portfolio?.content?.M?.about?.S || '',
      work: portfolio?.content?.M?.work?.L?.map((job) => ({
        position: job?.M?.position?.S || '',
        company: job?.M?.company?.S || '',
        dateWorked: job?.M?.dateWorked?.S || '',
        description: job?.M?.description?.S || '',
      })) as PortfolioDefinitions.IWorkHistory[],
      projects: portfolio?.content?.M?.projects?.L?.map((project) => ({
        title: project?.M?.title?.S || '',
        picture: project?.M?.picture?.S || '',
        summary: project?.M?.summary?.S || '',
        links: project?.M?.link?.L?.map((link) => ({
          label: link?.M?.label?.S || '',
          url: link?.M?.url?.S || '',
        })) as PortfolioDefinitions.ILink[],
      })) as PortfolioDefinitions.IProject[],
      skills: {
        tech: portfolio?.content?.M?.skills?.M?.tech || [],
        soft: portfolio?.content?.M?.skills?.M?.soft || [],
      } as PortfolioDefinitions.ISkills,
      contact: {
        codeRepoLink: portfolio?.content?.M?.contact?.M?.codeRepoLink || '',
        linkedin: portfolio?.content?.M?.contact?.M?.linkedin || '',
        email: portfolio?.content?.M?.contact?.M?.email || '',
      } as PortfolioDefinitions.IContact,
    },
  };
}

/** Marshal portfolio for DynamoDB */
function marshalPortfolio(
  portfolio: PortfolioDefinitions.IPortfolio
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
        title: { S: portfolio?.content?.title },
        name: { S: portfolio?.content?.name },
        headshot: { S: portfolio?.content?.headshot },
        about: { S: portfolio?.content?.about },

        work: {
          L: portfolio?.content?.work?.map((job) => ({
            M: {
              position: { S: job?.position },
              company: { S: job?.company },
              dateWorked: { S: job?.dateWorked },
              description: { S: job?.description },
            },
          })),
        },
        projects: {
          L: portfolio?.content?.projects?.map((project) => ({
            M: {
              title: { S: project?.title },
              picture: { S: project?.picture },
              summary: { S: project?.summary },
              link: {
                L: project?.links.map((link) => ({
                  M: {
                    label: { S: link?.label },
                    url: { S: link?.url },
                  },
                })),
              },
            },
          })),
        },
        skills: {
          M: {
            tech: { SS: portfolio?.content?.skills?.tech },
            soft: { SS: portfolio?.content?.skills?.soft },
          },
        },
        contact: {
          M: {
            codeRepoLink: { S: portfolio?.content?.contact?.codeRepoLink },
            linkedin: { S: portfolio?.content?.contact?.linkedin },
            email: { S: portfolio?.content?.contact?.email },
          },
        },
      },
    },
  };
}

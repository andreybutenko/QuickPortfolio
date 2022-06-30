import AWS from 'aws-sdk';

/** Gets DynamoDB client */
export function getDynamoDbClient(): AWS.DynamoDB {
  AWS.config.update({
    region: 'us-west-2',
    credentials: {
      accessKeyId: process.env['AWS_ACCESS_KEY'] as string,
      secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'] as string,
    },
  });

  const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

  return ddb;
}

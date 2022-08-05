import { Stage } from 'enums';
import { isUndefined } from './common';

export const getStage = (): Stage => {
  const vercelEnvironment = process.env['VERCEL_ENV'];
  switch (vercelEnvironment) {
    case 'production':
      return Stage.PRODUCTION;
    default:
      return Stage.DEVELOPMENT;
  }
};

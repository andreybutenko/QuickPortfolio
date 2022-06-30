import { CircularProgress, Typography } from '@mui/material';
import { IPortfolio } from 'models/data';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { isEmpty, isUndefined, useEffectAsync } from 'utils';
import { PortfolioApiClient } from 'utils/clients';

const PortfolioDetailPage: NextPage = () => {
  const portfolioClient = new PortfolioApiClient();
  const router = useRouter();
  const [portfolio, setPortfolio] = useState<IPortfolio>({} as IPortfolio);

  useEffectAsync(async () => {
    const id = router.query.id;
    if (!isUndefined(id)) {
      const result = await portfolioClient.get(router.query.id as string);
      setPortfolio(result);
    }
  }, [router.query]);

  if (isEmpty(portfolio)) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Typography variant="h1">{portfolio.content.title}</Typography>
      <Typography variant="subtitle1">
        Created {portfolio.meta.createTime}
      </Typography>
      <Typography variant="subtitle1">
        Last modified {portfolio.meta.modifyTime}
      </Typography>
    </div>
  );
};

export default PortfolioDetailPage;

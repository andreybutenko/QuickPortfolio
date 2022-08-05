import { Box, CircularProgress } from '@mui/material';
import PortfolioView from 'components/view/PortfolioView';
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
    <div style={{ backgroundColor: 'rgba(216, 219, 215, 0.5)' }}>
      <PortfolioView portfolio={portfolio} />
    </div>
  );
};

export default PortfolioDetailPage;

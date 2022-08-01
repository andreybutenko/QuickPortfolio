import { LoadingButton } from '@mui/lab';
import { Alert, Stack } from '@mui/material';
import { IPortfolio } from 'models/data';
import { useMemo, useState } from 'react';
import { isUndefined, useEffectAsync } from 'utils';
import { PortfolioApiClient } from 'utils/clients';
import PortfolioListingPreview from './PortfolioListingPreview';

const PortfolioListing = () => {
  const portfolioClient = new PortfolioApiClient();
  const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);
  const [lastPaginationToken, setLastPaginationToken] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isFullyLoaded = useMemo(
    () => !isLoading && isUndefined(lastPaginationToken),
    [isLoading, lastPaginationToken]
  );

  const loadNextPage = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    const result = await portfolioClient.list(lastPaginationToken);
    setPortfolios([...portfolios, ...result.portfolios]);
    setLastPaginationToken(result.paginationToken);
    setIsLoading(false);
  };

  useEffectAsync(loadNextPage, []);

  return (
    <Stack>
      {!isLoading && portfolios?.length === 0 && (
        <Alert severity="info">No Portfolios</Alert>
      )}

      <Stack spacing={2}>
        {portfolios?.map((portfolio) => (
          <PortfolioListingPreview key={portfolio.id} portfolio={portfolio} />
        ))}
      </Stack>

      {!isFullyLoaded ? (
        <LoadingButton
          variant="contained"
          loading={isLoading}
          onClick={loadNextPage}
          disabled={isLoading}
        >
          Load Portfolios
        </LoadingButton>
      ) : (
        <Alert severity="success">All portfolios are loaded</Alert>
      )}
    </Stack>
  );
};

export default PortfolioListing;

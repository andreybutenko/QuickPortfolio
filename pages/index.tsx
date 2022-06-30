import { Alert, Button, CardActions, Stack, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IPortfolio } from 'models/data';
import type { NextPage } from 'next';
import { useState } from 'react';
import { useEffectAsync } from 'utils';
import { PortfolioApiClient } from 'utils/clients';

const Home: NextPage = () => {
  const portfolioClient = new PortfolioApiClient();
  const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);

  useEffectAsync(async () => {
    const result = await portfolioClient.list();
    setPortfolios(result.portfolios);
  }, []);

  return (
    <div>
      <Typography variant="h1">Portfolio Listing</Typography>
      <Button variant="contained" href="/portfolio/create">
        Create Portfolio
      </Button>
      {portfolios.length === 0 && <Alert severity="info">No Portfolios</Alert>}
      <Stack spacing={2}>
        {portfolios.map((portfolio) => (
          <Card key={portfolio.id}>
            <CardContent>
              <Typography variant="h3">{portfolio.content.title}</Typography>
              <Typography variant="subtitle1">
                Last modified {portfolio.meta.modifyTime}
              </Typography>
              <CardActions>
                <Button size="small" href={`/portfolio/${portfolio.id}`}>
                  View Portfolio
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default Home;

import {
  Alert,
  CardActions,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IPortfolio } from 'models/data';
import type { NextPage } from 'next';
import IntroductionView from 'components/view/IntroductionView';
import { useState } from 'react';
import { useEffectAsync } from 'utils';
import { PortfolioApiClient } from 'utils/clients';
import ListingAppBar from 'components/listing/ListingAppBar';
import { ViewButton } from 'components/create/Styled';
import AboutProject from 'components/listing/AboutProject';

const Home: NextPage = () => {
  const portfolioClient = new PortfolioApiClient();
  const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);

  useEffectAsync(async () => {
    const result = await portfolioClient.list();
    setPortfolios(result.portfolios);
  }, []);

  return (
    <div>
      <Grid style={{ backgroundColor: 'rgba(216, 219, 215, 0.5)' }}>
        <Grid marginRight={3} marginLeft={3} style={{ padding: '2em' }}>
          <ListingAppBar />
          <AboutProject />
          <Paper
            elevation={12}
            style={{
              padding: '2em',
              backgroundColor: 'rgba(255, 255,255, 0.6)',
            }}
            square={false}
          >
            <Typography variant="h1">Portfolio Listing</Typography>
            <ViewButton href="/portfolio/create">Create Portfolio</ViewButton>
            {portfolios?.length === 0 && (
              <Alert severity="info">No Portfolios</Alert>
            )}
            <Stack spacing={2}>
              {portfolios?.map((portfolio) => (
                <Card
                  sx={{
                    borderRadius: 7,
                    marginTop: 3,
                  }}
                  key={portfolio.id}
                >
                  <CardContent>
                    <IntroductionView portfolio={portfolio} />
                    <CardActions>
                      <ViewButton href={`/portfolio/${portfolio.id}`}>
                        View Portfolio
                      </ViewButton>
                    </CardActions>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

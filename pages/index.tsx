import {
  Alert,
  CardActions,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { IPortfolio } from 'models/data';
import type { NextPage } from 'next';
import IntroductionView from 'components/view/IntroductionView';
import { useState } from 'react';
import { useEffectAsync } from 'utils';
import { PortfolioApiClient } from 'utils/clients';
import { StyledCard, ViewButton } from 'components/create/Styled';
import AboutProject from 'components/listing/AboutProject';
import NavBarView from 'components/view/NavBarView';

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
          <NavBarView pageTitle={[]} />
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
                <StyledCard key={portfolio.id}>
                  <CardContent>
                    <IntroductionView portfolio={portfolio} />
                    <CardActions>
                      <ViewButton href={`/portfolio/${portfolio.id}`}>
                        View Portfolio
                      </ViewButton>
                    </CardActions>
                  </CardContent>
                </StyledCard>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

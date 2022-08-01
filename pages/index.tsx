import { Button, Typography } from '@mui/material';
import PortfolioListing from 'components/listing/PortfolioListing';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Typography variant="h1">Portfolio Listing</Typography>
      <Button variant="contained" href="/portfolio/create">
        Create Portfolio
      </Button>
      <PortfolioListing />
    </div>
  );
};

export default Home;

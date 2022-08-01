import { Button, CardActions, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IPortfolio } from 'models/data';

type PortfolioListingPreviewProps = {
  portfolio: IPortfolio;
};

const PortfolioListingPreview = (props: PortfolioListingPreviewProps) => {
  const { portfolio } = props;

  return (
    <Card data-testid={`portfolio-preview-${portfolio.id}`}>
      <CardContent>
        <Typography variant="h3">
          {portfolio.content.title || 'Untitled Portfolio'}
        </Typography>
        <Typography variant="subtitle1">
          Last modified {portfolio.meta.modifyTime}
        </Typography>
        <CardActions>
          <Button
            href={`/portfolio/${portfolio.id}`}
            size="small"
            variant="outlined"
          >
            View Portfolio
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PortfolioListingPreview;

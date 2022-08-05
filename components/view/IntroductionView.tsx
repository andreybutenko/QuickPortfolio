import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Avatar, Typography, Grid, Divider } from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';

type IntroductionViewProps = {
  portfolio: IPortfolio;
};

const IntroductionView = (props: IntroductionViewProps) => {
  const { portfolio } = props;

  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container direction="row">
        <Stack direction="row">
          <Grid item>
            <Avatar
              variant="rounded"
              alt={portfolio.content.name}
              src={portfolio.content.headshot}
              sx={{
                width: 300,
                height: 300,
              }}
            />
          </Grid>

          <Grid item padding={1}>
            <Typography variant="h3" fontWeight={600}>
              {portfolio.content.title}
            </Typography>
            <Typography style={{ fontWeight: 'bold' }}>
              {portfolio.content.name}
            </Typography>
            <Typography>{portfolio.content.about}</Typography>
          </Grid>
          <Divider sx={{ paddingBottom: 5, borderBottom: 0.5 }} />
        </Stack>
      </Grid>
    </div>
  );
};
export default IntroductionView;

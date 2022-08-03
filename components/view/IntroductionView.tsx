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
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item>
          <Avatar
            variant="rounded"
            alt={portfolio.content.name}
            src={portfolio.content.headshot}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        <Grid item padding={1}>
          <Stack direction="column">
            <Typography variant="h3">{portfolio.content.title}</Typography>
            <Typography>{portfolio.content.name}</Typography>
            <Typography>{portfolio.content.about}</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ padding: 1 }} />
    </div>
  );
};
export default IntroductionView;

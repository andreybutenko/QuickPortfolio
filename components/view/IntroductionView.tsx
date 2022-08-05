import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Typography, Grid } from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';
import { StyledAvatar, ViewSectionTypography } from 'components/create/Styled';

type IntroductionViewProps = {
  portfolio: IPortfolio;
};

const IntroductionView = (props: IntroductionViewProps) => {
  const { portfolio } = props;

  return (
    <Grid sx={{ flexGrow: 1 }} container direction="row">
      <Stack direction="row">
        <Grid item>
          <StyledAvatar
            variant="rounded"
            alt={`Profile picture of:${portfolio.content.name}`}
            src={portfolio.content.headshot}
          />
        </Grid>

        <Grid item padding={1}>
          <ViewSectionTypography variant="h3">
            {portfolio.content.title}
          </ViewSectionTypography>
          <Typography variant="subtitle1" fontWeight={'bold'}>
            {portfolio.content.name}
          </Typography>
          <Typography>{portfolio.content.about}</Typography>
        </Grid>
      </Stack>
    </Grid>
  );
};
export default IntroductionView;

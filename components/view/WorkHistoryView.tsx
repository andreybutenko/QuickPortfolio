import * as React from 'react';
import { Typography, CardContent, Grid, ListItem } from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';
import { StyledCard, ViewSectionTypography } from 'components/create/Styled';
type WorkHistoryViewProps = {
  portfolio: IPortfolio;
};

const WorkHistoryView = (props: WorkHistoryViewProps) => {
  const { portfolio } = props;
  return (
    <div>
      <ViewSectionTypography variant="h3">Work History</ViewSectionTypography>

      {portfolio.content.work?.map((job, index: number) => (
        <StyledCard key={index}>
          <CardContent>
            <Grid item xs={10} key={index}>
              <Typography variant="h4" fontWeight={'bold'}>
                {job.position}
              </Typography>
              <Typography variant="subtitle1">
                {job.company}, {job.dateWorked}
              </Typography>
              <Typography>
                <ListItem sx={{ display: 'list-item' }}>
                  {job.description}
                </ListItem>
              </Typography>
            </Grid>
          </CardContent>
        </StyledCard>
      ))}
    </div>
  );
};
export default WorkHistoryView;

import * as React from 'react';
import Stack from '@mui/material/Stack';
import {
  Typography,
  Card,
  CardContent,
  Grid,
  ListItem,
  Divider,
} from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';
type WorkHistoryViewProps = {
  portfolio: IPortfolio;
};

const WorkHistoryView = (props: WorkHistoryViewProps) => {
  const { portfolio } = props;
  return (
    <div>
      <Typography variant="h3">Work History</Typography>

      {portfolio.content.work?.map((job, index: number) => (
        <Card
          sx={{
            borderRadius: 7,
            marginTop: 3,
          }}
          key={index}
        >
          <CardContent>
            <Grid item xs={10} key={index}>
              <Typography variant="h4" fontWeight={600}>
                {job.position}
              </Typography>
              <Typography variant="body1">
                {job.company}, {job.dateWorked}
              </Typography>
              <Typography>
                <ListItem sx={{ display: 'list-item' }}>
                  {job.description}
                </ListItem>
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default WorkHistoryView;

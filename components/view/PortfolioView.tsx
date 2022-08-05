import * as React from 'react';
import { IPortfolio } from 'models/data/IPortfolio';
import IntroductionView from 'components/view/IntroductionView';
import SkillsView from 'components/view/SkillsView';
import WorkHistoryView from './WorkHistoryView';
import ContactView from './ContactView';
import ProjectsView from './ProjectsView';
import NavBarView from './NavBarView';
import { Grid, Paper } from '@mui/material';

type PortfolioViewProps = {
  portfolio: IPortfolio;
};

const PortfolioView = (props: PortfolioViewProps) => {
  const { portfolio } = props;

  return (
    <Grid marginRight={3} marginLeft={3} style={{ padding: '2em' }}>
      <NavBarView portfolio={portfolio} />
      <Paper
        elevation={24}
        style={{
          padding: '2em',
          backgroundColor: 'rgba(255, 255,255, 0.6)',
        }}
        square={false}
      >
        <Grid item marginRight={3} marginLeft={3}>
          <IntroductionView portfolio={portfolio} />
          <WorkHistoryView portfolio={portfolio} />
          <SkillsView portfolio={portfolio} />
          <ProjectsView portfolio={portfolio} />
          <ContactView portfolio={portfolio} />
        </Grid>
      </Paper>
    </Grid>
  );
};
export default PortfolioView;

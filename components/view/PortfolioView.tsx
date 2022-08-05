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
  pageTitle: string[];
};

const PortfolioView = (props: PortfolioViewProps) => {
  const { portfolio } = props;
  const PAGE_TITLES = [
    'About',
    'Work History',
    'Projects',
    'Skills',
    'Contact',
  ];

  return (
    <Grid marginRight={3} marginLeft={3} style={{ padding: '2em' }}>
      <NavBarView pageTitle={PAGE_TITLES} />
      <Paper
        elevation={24}
        style={{
          padding: '2em',
          backgroundColor: 'rgba(255, 255,255, 0.6)',
        }}
        square={false}
      >
        <Grid item marginRight={3} marginLeft={3}>
          <div id="About">
            <IntroductionView portfolio={portfolio} />
          </div>
          <div id="Work History">
            <WorkHistoryView portfolio={portfolio} />
          </div>
          <div id="Skills">
            <SkillsView portfolio={portfolio} />
          </div>
          <div id="Projects">
            <ProjectsView portfolio={portfolio} />
          </div>
          <div id="Contact">
            <ContactView portfolio={portfolio} />
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default PortfolioView;

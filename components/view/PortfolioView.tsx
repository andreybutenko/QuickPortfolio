import * as React from 'react';
import { IPortfolio } from 'models/data/IPortfolio';
import IntroductionView from 'components/view/IntroductionView';
import SkillsView from 'components/view/SkillsView';
import WorkHistoryView from './WorkHistoryView';
import ContactView from './ContactView';
import ProjectsView from './ProjectsView';

type PortfolioViewProps = {
  portfolio: IPortfolio;
};

const PortfolioView = (props: PortfolioViewProps) => {
  const { portfolio } = props;

  return (
    <div>
      <IntroductionView portfolio={portfolio} />
      <WorkHistoryView portfolio={portfolio} />
      {/* <SkillsView portfolio={portfolio} /> */}
      <ProjectsView portfolio={portfolio} />
      <ContactView portfolio={portfolio} />
    </div>
  );
};
export default PortfolioView;

import * as React from 'react';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { useContext } from 'react';
import { IPortfolio } from 'models/data/IPortfolio';
import PortfolioView from 'components/view/PortfolioView';

const Review = () => {
  const { title, name, headshot, about, work, skills, projects, contact } =
    useContext(CreatePortfolioContext);
  const portfolio = {
    content: { title, name, headshot, about, work, skills, projects, contact },
  } as IPortfolio;

  return <PortfolioView portfolio={portfolio} />;
};
export default Review;

import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';

type NavBarViewProps = {
  portfolio: IPortfolio;
};

const NavBarView = (props: NavBarViewProps) => {
  const { portfolio } = props;
  //Skeleton for navbar component
  return <div></div>;
};
export default NavBarView;

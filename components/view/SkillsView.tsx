import * as React from 'react';
import { Typography, Divider } from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';
import Chip from '@mui/material/Chip';

type SkillsViewProps = {
  portfolio: IPortfolio;
};

const SkillsView = (props: SkillsViewProps) => {
  const { portfolio } = props;

  return (
    <div>
      <Typography variant="h3">Skills</Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Typography variant="subtitle1" fontWeight={600}>
        Tech Skills
      </Typography>
      {portfolio.content.skills.tech?.map((tech, index: number) => (
        <Chip key={index} label={tech} />
      ))}

      <Typography paddingTop={2} variant="subtitle1" fontWeight={600}>
        Soft Skills
      </Typography>
      {portfolio.content.skills.soft?.map((soft, index: number) => (
        <Chip key={index} label={soft} />
      ))}
    </div>
  );
};
export default SkillsView;

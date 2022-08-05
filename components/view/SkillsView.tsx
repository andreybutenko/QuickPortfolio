import * as React from 'react';
import { Typography, CardContent } from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';
import Chip from '@mui/material/Chip';
import { ViewSectionTypography, StyledCard } from 'components/create/Styled';

type SkillsViewProps = {
  portfolio: IPortfolio;
};

const SkillsView = (props: SkillsViewProps) => {
  const { portfolio } = props;

  return (
    <div>
      <ViewSectionTypography variant="h3">Skills</ViewSectionTypography>
      <StyledCard>
        <CardContent>
          <Typography variant="subtitle1" fontWeight={'bold'}>
            Tech Skills
          </Typography>
          {portfolio.content.skills.tech?.map((tech, index: number) => (
            <Chip key={index} label={tech} size={'medium'} />
          ))}

          <Typography paddingTop={2} variant="subtitle1" fontWeight={'bold'}>
            Soft Skills
          </Typography>
          {portfolio.content.skills.soft?.map((soft, index: number) => (
            <Chip key={index} label={soft} />
          ))}
        </CardContent>
      </StyledCard>
    </div>
  );
};
export default SkillsView;

import * as React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';
import Chip from '@mui/material/Chip';
import { ViewSectionTypography } from 'components/create/Styled';

type SkillsViewProps = {
  portfolio: IPortfolio;
};

const SkillsView = (props: SkillsViewProps) => {
  const { portfolio } = props;

  return (
    <div>
      <ViewSectionTypography variant="h3">Skills</ViewSectionTypography>
      <Card
        sx={{
          borderRadius: 7,
          marginTop: 3,
        }}
      >
        <CardContent>
          <Typography variant="subtitle1" fontWeight={600}>
            Tech Skills
          </Typography>
          {portfolio.content.skills.tech?.map((tech, index: number) => (
            <Chip key={index} label={tech} size={'medium'} />
          ))}

          <Typography paddingTop={2} variant="subtitle1" fontWeight={600}>
            Soft Skills
          </Typography>
          {portfolio.content.skills.soft?.map((soft, index: number) => (
            <Chip key={index} label={soft} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
export default SkillsView;

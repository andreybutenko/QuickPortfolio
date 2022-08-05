import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Typography, Avatar, Grid, Card, CardContent } from '@mui/material';
import {
  ViewButton,
  ViewSectionTypography,
  StyledCard,
  StyledCardContent,
} from 'components/create/Styled';

import { IPortfolio } from 'models/data/IPortfolio';

type ProjectsViewProps = {
  portfolio: IPortfolio;
};

const ProjectsView = (props: ProjectsViewProps) => {
  const { portfolio } = props;

  return (
    <div>
      <ViewSectionTypography variant="h3">Projects</ViewSectionTypography>

      {portfolio.content.projects?.map((project, index: number) => (
        <Card
          sx={{
            borderRadius: 7,
            marginTop: 3,
          }}
          key={index}
        >
          <CardContent>
            <Stack
              key={index}
              spacing={1}
              sx={{ paddingBottom: 2 }}
              direction="row"
            >
              <Grid sx={{ flexGrow: 1 }} container direction="row">
                <Stack direction="row">
                  <Avatar
                    variant="rounded"
                    alt={project.title}
                    sizes="big"
                    src={project.picture}
                    sx={{
                      width: '100%',
                      height: '100%',
                      maxWidth: 300,
                      maxHeight: 300,
                    }}
                  />

                  <Grid item padding={1}>
                    <Stack direction="column">
                      <Typography variant="h3">{project.title}</Typography>
                      <Typography>{project.summary}</Typography>
                    </Stack>
                  </Grid>
                </Stack>
              </Grid>
              <Grid container direction="column" spacing={2} paddingTop={2}>
                {project.links?.map((link, index: number) => (
                  <Stack
                    direction="column"
                    key={index}
                    spacing={2}
                    sx={{ paddingBottom: 2 }}
                  >
                    <ViewButton href={link.url}>{link.label}</ViewButton>
                  </Stack>
                ))}
              </Grid>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default ProjectsView;

import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Typography, Avatar, Divider, Grid } from '@mui/material';

import { IPortfolio } from 'models/data/IPortfolio';

type ProjectsViewProps = {
  portfolio: IPortfolio;
};

const ProjectsView = (props: ProjectsViewProps) => {
  const { portfolio } = props;

  return (
    <div>
      <Typography variant="h3">Projects</Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />

      {portfolio.content.projects?.map((project, index: number) => (
        <Stack key={index} spacing={1} sx={{ paddingBottom: 2 }}>
          <Grid sx={{ flexGrow: 1 }} container>
            <Grid item>
              <Avatar
                variant="rounded"
                alt={project.title}
                src={project.picture}
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item padding={1}>
              <Stack direction="column">
                <Typography variant="h3">{project.title}</Typography>
                <Typography>{project.summary}</Typography>
              </Stack>
            </Grid>
          </Grid>
          {/* <Typography>Title: {project.title}</Typography>
          <Typography>Picture: {project.picture}</Typography>
          <Typography>Summary: {project.summary}</Typography> */}
          {project.links?.map((link, index: number) => (
            <Stack key={index}>
              <Typography>{link.label}</Typography>
              <Typography>{link.url}</Typography>
            </Stack>
          ))}
        </Stack>
      ))}
    </div>
  );
};
export default ProjectsView;

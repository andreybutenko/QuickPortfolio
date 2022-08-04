import * as React from 'react';
import Stack from '@mui/material/Stack';
import {
  Typography,
  Avatar,
  Divider,
  Grid,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { StyledTextField, StyledButton } from 'components/create/Styled';

import { IPortfolio } from 'models/data/IPortfolio';

type ProjectsViewProps = {
  portfolio: IPortfolio;
};

const ProjectsView = (props: ProjectsViewProps) => {
  const { portfolio } = props;

  return (
    <div>
      <Typography variant="h3">Projects</Typography>

      {portfolio.content.projects?.map((project, index: number) => (
        <Card
          sx={{
            borderRadius: 7,
            marginTop: 3,
          }}
          key={index}
        >
          <CardContent>
            <Stack key={index} spacing={1} sx={{ paddingBottom: 2 }}>
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
                  <Grid item></Grid>
                  <Grid item padding={1}>
                    <Stack direction="column">
                      <Typography variant="h3">{project.title}</Typography>
                      <Typography>{project.summary}</Typography>
                    </Stack>
                  </Grid>
                </Stack>
              </Grid>
              <Grid container direction="row" spacing={2} paddingTop={2}>
                {project.links?.map((link, index: number) => (
                  <Stack direction="row" key={index} spacing={2}>
                    <Button
                      variant="contained"
                      href={link.url}
                      target="_blank"
                      style={{
                        width: 150,
                        backgroundColor: 'rgba(73, 97,175, 0.8)',
                        color: 'white',
                      }}
                    >
                      {link.label}
                    </Button>
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

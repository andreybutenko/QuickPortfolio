import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';

type PortfolioViewProps = {
  portfolio: IPortfolio;
};

const PortfolioView = (props: PortfolioViewProps) => {
  const { portfolio } = props;

  return (
    <div>
      <Typography variant="h3">Personal Information</Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Stack direction="column">
        <Typography>Title: {portfolio.content.title}</Typography>
        <Typography>Name: {portfolio.content.name}</Typography>
        <Typography>Photo: {portfolio.content.headshot}</Typography>
        <Typography>Summary: {portfolio.content.about}</Typography>
      </Stack>
      <Typography variant="h3">Work History</Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Stack direction="column">
        {portfolio.content.work?.map((job, index: number) => (
          <Stack key={index} spacing={1} sx={{ paddingBottom: 2 }}>
            <Typography>Position: {job.position}</Typography>
            <Typography>Company: {job.company}</Typography>
            <Typography>Dates Worked: {job.dateWorked}</Typography>
            <Typography>What you did: {job.description}</Typography>
          </Stack>
        ))}
      </Stack>
      <Typography variant="h3">Skills</Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Typography>Tech Skills</Typography>
      {portfolio.content.skills.tech?.map((tech, index: number) => (
        <Chip key={index} label={tech} />
      ))}

      <Typography paddingTop={2}>Soft Skills</Typography>
      {portfolio.content.skills.soft?.map((soft, index: number) => (
        <Chip key={index} label={soft} />
      ))}
      <Typography variant="h3">Projects</Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      {portfolio.content.projects?.map((project, index: number) => (
        <Stack key={index} spacing={1} sx={{ paddingBottom: 2 }}>
          <Typography>Title: {project.title}</Typography>
          <Typography>Picture: {project.picture}</Typography>
          <Typography>Summary: {project.summary}</Typography>
          {project.links?.map((link, index: number) => (
            <Stack key={index}>
              <Typography>{link.label}</Typography>
              <Typography>{link.url}</Typography>
            </Stack>
          ))}
        </Stack>
      ))}
      <Typography variant="h3">Contact Information</Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Stack direction="column">
        <Typography>Email: {portfolio.content.contact.email}</Typography>
        {portfolio.content.contact.links?.map((link, index: number) => (
          <Typography key={index}>
            {link.label}: {link.url}
          </Typography>
        ))}
      </Stack>
    </div>
  );
};
export default PortfolioView;

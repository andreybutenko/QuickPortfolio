import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { Typography } from '@mui/material';
import { useState, useContext, useRef, RefObject } from 'react';
import { Divider } from '@mui/material';

const Review = () => {
  const { title, name, headshot, about, work, skills, projects, contact } =
    useContext(CreatePortfolioContext);
  return (
    <div>
      <Typography variant="h3">Personal Information</Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Stack direction="column">
        <Typography>Title: {title}</Typography>
        <Typography>Name: {name}</Typography>
        <Typography>Photo: {headshot}</Typography>
        <Typography>Summary: {about}</Typography>
      </Stack>
      <Typography variant="h3">Work History</Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Stack direction="column">
        {work?.map((job, index: number) => (
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
      {skills.tech?.map((tech, index: number) => (
        <Chip key={index} label={tech} />
      ))}

      <Typography paddingTop={2}>Soft Skills</Typography>
      {skills.soft?.map((soft, index: number) => (
        <Chip key={index} label={soft} />
      ))}
      <Typography variant="h3">Projects</Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      {projects?.map((project, index: number) => (
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
        <Typography>Email: {contact.email}</Typography>
        {contact.links?.map((link, index: number) => (
          <Typography key={index}>
            {link.label}: {link.url}
          </Typography>
        ))}
      </Stack>
    </div>
  );
};
export default Review;

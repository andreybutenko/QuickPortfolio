import * as React from 'react';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { Stack, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { IProject, ILink } from 'models/data/';
import {
  StyledTextField,
  StyledButton,
  StyledPaper,
} from 'components/create/Styled';
import LinksEditor from './common/LinksEditor';

const Project = () => {
  const [draftEntry, setDraftEntry] = useState<IProject>({
    title: '',
    picture: '',
    summary: '',
    links: [],
  });
  const { projects, setProjects } = useContext(CreatePortfolioContext);
  const setLinks = (links: ILink[]) => {
    setDraftEntry({
      ...draftEntry,
      links,
    });
  };
  const onSubmit = () => {
    setProjects([...projects, draftEntry]);
    setDraftEntry({
      title: '',
      picture: '',
      summary: '',
      links: [],
    });
  };
  return (
    <StyledPaper elevation={12}>
      <form>
        <Stack direction="column" spacing={1}>
          <StyledTextField
            label="Title"
            onChange={(element) => {
              setDraftEntry({
                ...draftEntry,
                title: element.target.value,
              });
            }}
            value={draftEntry.title}
          />
          <StyledTextField
            label="Picture"
            onChange={(element) => {
              setDraftEntry({
                ...draftEntry,
                picture: element.target.value,
              });
            }}
            value={draftEntry.picture}
          />
          <StyledTextField
            label="Summary"
            multiline
            rows={4}
            onChange={(element) => {
              setDraftEntry({
                ...draftEntry,
                summary: element.target.value,
              });
            }}
            value={draftEntry.summary}
          />
          <LinksEditor links={draftEntry.links || []} setLinks={setLinks} />
          <StyledButton variant="outlined" onClick={onSubmit}>
            Add Project
          </StyledButton>
          <Typography>Your projects</Typography>
          <Typography>
            <ul>
              {projects.map((project, index) => (
                <li key={index}>{project.title}</li>
              ))}
            </ul>
          </Typography>
        </Stack>
      </form>
    </StyledPaper>
  );
};

export default Project;

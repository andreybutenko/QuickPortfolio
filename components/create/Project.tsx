import * as React from 'react';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { Stack } from '@mui/material';
import { useContext, useRef, RefObject } from 'react';
import { IProject, ILink } from 'models/data/';
import { StyledTextField, StyledButton } from 'components/create/Styled';

const Project = () => {
  const formRef = useRef() as RefObject<HTMLFormElement>;
  const draftEntry: IProject = {
    title: '',
    picture: '',
    summary: '',
    links: [],
  };
  const draftSource: ILink = {
    label: '',
    url: '',
  };
  const draftDemo: ILink = {
    label: '',
    url: '',
  };
  const { projects, setProjects } = useContext(CreatePortfolioContext);
  const onSubmit = () => {
    draftEntry.links?.push(draftSource);
    draftEntry.links?.push(draftDemo);
    projects.push(draftEntry);
    setProjects([...projects]);
    formRef.current?.reset();
  };
  return (
    <form ref={formRef}>
      <Stack direction="column" spacing={1}>
        <StyledTextField
          label="Title"
          onChange={(element) => {
            draftEntry.title = element.target.value;
          }}
        />
        <StyledTextField
          label="Picture"
          onChange={(element) => {
            draftEntry.picture = element.target.value;
          }}
        />
        <StyledTextField
          label="Summary"
          multiline
          rows={4}
          onChange={(element) => {
            draftEntry.summary = element.target.value;
          }}
        />
        <StyledTextField
          label="Link to Source Code"
          onChange={(element) => {
            draftSource.label = 'source';
            draftSource.url = element.target.value;
          }}
        />
        <StyledTextField
          label="Link to Live Demo"
          onChange={(element) => {
            draftDemo.label = 'demo';
            draftDemo.url = element.target.value;
          }}
        />
        <StyledButton variant="outlined" onClick={onSubmit}>
          Add Project
        </StyledButton>
      </Stack>
    </form>
  );
};

export default Project;

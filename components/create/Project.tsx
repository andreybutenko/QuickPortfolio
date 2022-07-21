import * as React from 'react';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { TextField, Stack, Button } from '@mui/material';
import { useContext, useRef, RefObject } from 'react';
import { IProject, ILink } from 'models/data/';
import { StyledTextField, StyledButton } from 'components/create/Styled';

const Project = () => {
  const formRef = useRef() as RefObject<HTMLFormElement>;
  const entry: IProject = {
    title: '',
    picture: '',
    summary: '',
    links: [],
  };
  const source: ILink = {
    label: '',
    url: '',
  };
  const demo: ILink = {
    label: '',
    url: '',
  };
  const { projects, setProjects } = useContext(CreatePortfolioContext);
  const onSubmit = async () => {
    entry.links?.push(source);
    entry.links?.push(demo);
    projects.push(entry);
    setProjects([...projects]);
    formRef.current?.reset();
  };
  return (
    <form ref={formRef}>
      <Stack direction="column" spacing={1}>
        <StyledTextField
          label={'Title'}
          onChange={(element) => {
            entry.title = element.target.value;
          }}
        />
        <StyledTextField
          label={'Picture'}
          onChange={(element) => {
            entry.picture = element.target.value;
          }}
        />
        <StyledTextField
          label={'Summary'}
          multiline
          rows={4}
          onChange={(element) => {
            entry.summary = element.target.value;
          }}
        />
        <StyledTextField
          label={'Link to Source Code'}
          onChange={(element) => {
            source.label = 'source';
            source.url = element.target.value;
          }}
        />
        <StyledTextField
          label={'Link to Live Demo'}
          onChange={(element) => {
            demo.label = 'demo';
            demo.url = element.target.value;
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

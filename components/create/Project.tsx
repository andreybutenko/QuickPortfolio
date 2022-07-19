import * as React from 'react';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { TextField, Input, Stack, Button, Typography } from '@mui/material';
import { useCallback, useState, useContext, useRef, RefObject } from 'react';
import { IProject, ILink } from 'models/data/';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import { linkSync } from 'fs';

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
  // const [position, setPosition] = useState('');
  // const [company, setCompany] = useState('');
  // const [dateWorked, setDateWorked] = useState('');
  // const [description, setDescription] = useState('');
  const onSubmit = async () => {
    entry.links?.push(source);
    entry.links?.push(demo);
    projects.push(entry);
    setProjects([...projects]);
    formRef.current?.reset();
  };
  // const selectLinkIcon = (link: ILink) => {
  //   switch (link.label.toLowerCase()) {
  //     case 'source':
  //       link.label = 'source';
  //       return <CodeIcon />;

  //     default:
  //       return <LanguageIcon />;
  //   }
  // };
  return (
    <form ref={formRef}>
      <Stack direction="column" spacing={1}>
        <TextField
          label={'Title'}
          variant="standard"
          onChange={(element) => {
            entry.title = element.target.value;
          }}
        />
        <TextField
          label={'Picture'}
          variant="standard"
          onChange={(element) => {
            entry.picture = element.target.value;
          }}
        />
        <TextField
          label={'Summary'}
          variant="standard"
          onChange={(element) => {
            entry.summary = element.target.value;
          }}
        />

        <TextField
          label={'Link to Source Code'}
          variant="standard"
          onChange={(element) => {
            source.label = 'source';
            source.url = element.target.value;
          }}
        />
        <TextField
          label={'Link to Live Demo'}
          variant="standard"
          onChange={(element) => {
            demo.label = 'demo';
            demo.url = element.target.value;
          }}
        />
        <Button variant="outlined" onClick={onSubmit}>
          Add Project
        </Button>
      </Stack>
    </form>
  );
};

export default Project;

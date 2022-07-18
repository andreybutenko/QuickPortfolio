import * as React from 'react';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { TextField, Input, Stack, Button } from '@mui/material';
import { useCallback, useState, useContext, useRef, RefObject } from 'react';
import { IWorkHistory } from 'models/data/';

const WorkHistory = () => {
  const formRef = useRef() as RefObject<HTMLFormElement>;
  const entry = {
    position: '',
    company: '',
    dateWorked: '',
    description: '',
  };
  const { work, setWork } = useContext(CreatePortfolioContext);
  // const [position, setPosition] = useState('');
  // const [company, setCompany] = useState('');
  // const [dateWorked, setDateWorked] = useState('');
  // const [description, setDescription] = useState('');
  const onSubmit = async () => {
    work.push(entry);
    setWork([...work]);
    formRef.current?.reset();
  };
  return (
    <form ref={formRef}>
      <Stack direction="column" spacing={1}>
        <TextField
          label={'Position'}
          variant="standard"
          onChange={(element) => {
            entry.position = element.target.value;
          }}
        />
        <TextField
          label={'Company'}
          variant="standard"
          onChange={(element) => {
            entry.company = element.target.value;
          }}
        />
        <TextField
          label={'Interval of employement'}
          variant="standard"
          onChange={(element) => {
            entry.dateWorked = element.target.value;
          }}
        />
        <TextField
          label={'Job Description'}
          variant="standard"
          onChange={(element) => {
            entry.description = element.target.value;
          }}
        />
        <Button variant="outlined" onClick={onSubmit}>
          Add Work History
        </Button>
      </Stack>
    </form>
  );
};

export default WorkHistory;

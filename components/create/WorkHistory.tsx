import * as React from 'react';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { Stack } from '@mui/material';
import { useContext, useRef, RefObject } from 'react';
import { StyledTextField, StyledButton } from 'components/create/Styled';
const WorkHistory = () => {
  const formRef = useRef() as RefObject<HTMLFormElement>;
  const entry = {
    position: '',
    company: '',
    dateWorked: '',
    description: '',
  };
  const { work, setWork } = useContext(CreatePortfolioContext);
  const onSubmit = async () => {
    work.push(entry);
    setWork([...work]);
    formRef.current?.reset();
  };
  return (
    <form ref={formRef}>
      <Stack direction="column" spacing={1}>
        <StyledTextField
          label={'Position'}
          onChange={(element) => {
            entry.position = element.target.value;
          }}
        />
        <StyledTextField
          label={'Company'}
          onChange={(element) => {
            entry.company = element.target.value;
          }}
        />
        <StyledTextField
          label={'Interval of employement'}
          onChange={(element) => {
            entry.dateWorked = element.target.value;
          }}
        />
        <StyledTextField
          label={'Summary of what you did'}
          multiline
          rows={4}
          onChange={(element) => {
            entry.description = element.target.value;
          }}
        />
        <StyledButton variant="outlined" onClick={onSubmit}>
          Add Work History
        </StyledButton>
      </Stack>
    </form>
  );
};

export default WorkHistory;

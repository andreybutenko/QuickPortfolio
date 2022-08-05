import * as React from 'react';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { Paper, Stack, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import {
  StyledTextField,
  StyledButton,
  StyledPaper,
} from 'components/create/Styled';
import { IWorkHistory } from 'models/data/';
const WorkHistory = () => {
  const [draftEntry, setDraftEntry] = useState<IWorkHistory>({
    position: '',
    company: '',
    dateWorked: '',
    description: '',
  });
  const { work, setWork } = useContext(CreatePortfolioContext);
  const onSubmit = () => {
    setWork([...work, draftEntry]);
    setDraftEntry({
      position: '',
      company: '',
      dateWorked: '',
      description: '',
    });
  };
  return (
    <StyledPaper elevation={12}>
      <Stack direction="column" spacing={1}>
        <StyledTextField
          label="Position"
          onChange={(element) => {
            setDraftEntry({
              ...draftEntry,
              position: element.target.value,
            });
          }}
          value={draftEntry.position}
        />
        <StyledTextField
          label="Company"
          onChange={(element) => {
            setDraftEntry({
              ...draftEntry,
              company: element.target.value,
            });
          }}
          value={draftEntry.company}
        />
        <StyledTextField
          label="Interval of employement"
          onChange={(element) => {
            setDraftEntry({
              ...draftEntry,
              dateWorked: element.target.value,
            });
          }}
          value={draftEntry.dateWorked}
        />
        <StyledTextField
          label="Summary of what you did"
          multiline
          rows={4}
          onChange={(element) => {
            setDraftEntry({
              ...draftEntry,
              description: element.target.value,
            });
          }}
          value={draftEntry.description}
        />
        <StyledButton variant="outlined" onClick={onSubmit}>
          Add Work History
        </StyledButton>
        <Typography>Your Work History</Typography>
        <Typography>
          <ul>
            {work.map((job, index) => (
              <li key={index}>{job.position}</li>
            ))}
          </ul>
        </Typography>
      </Stack>
    </StyledPaper>
  );
};

export default WorkHistory;

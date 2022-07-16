import * as React from 'react';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { TextField, Input, Stack } from '@mui/material';
import { useCallback, useState, useContext } from 'react';
import { IWorkHistory } from 'models/data/';

const WorkHistory = () => {
  const { work, setWork } = useContext(CreatePortfolioContext);
  return (
    <div>
      {work.map((entry: any, index: number) => (
        <Stack direction="row" spacing={1} key={-1}>
          <TextField
            label={'Position'}
            variant="standard"
            onKeyPress={(e: any) => {
              if (e.key === 'Enter') {
                entry.position = e.target.value;
              }
            }}
          />
          <TextField
            label={'Company'}
            variant="standard"
            onKeyPress={(e: any) => {
              if (e.key === 'Enter') {
                entry.company = e.target.value;
              }
            }}
          />
          <TextField
            label={'Interval of employement'}
            variant="standard"
            onKeyPress={(e: any) => {
              if (e.key === 'Enter') {
                entry.dateWorked = e.target.value;
              }
            }}
          />
          <TextField
            label={'Job Description'}
            variant="standard"
            onKeyPress={(e: any) => {
              if (e.key === 'Enter') {
                entry.description = e.target.value;
                setWork([...work]);
              }
            }}
          />
        </Stack>
      ))}
    </div>
  );
};

export default WorkHistory;

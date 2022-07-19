import React, { useCallback, useContext } from 'react';
import { TextField } from '@mui/material';

import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
const Introduction = () => {
  const {
    title,
    setTitle,
    name,
    setName,
    headshot,
    setHeadShot,
    about,
    setAbout,
  } = useContext(CreatePortfolioContext);
  return (
    <div>
      <TextField
        label={'title'}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        variant="standard"
      />
      <TextField
        label={'name'}
        onChange={(event) => {
          setName(event.target.value);
        }}
        variant="standard"
      />

      <TextField
        label={'headshot'}
        onChange={(event) => {
          setHeadShot(event.target.value);
        }}
        variant="standard"
      />
      <TextField
        label={'about'}
        onChange={(event) => {
          setAbout(event.target.value);
        }}
        variant="standard"
      />
    </div>
  );
};
export default Introduction;

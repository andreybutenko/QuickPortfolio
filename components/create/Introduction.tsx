import React, { useContext } from 'react';
import { Stack } from '@mui/material';
import {
  StyledTextField,
  StyledParagraphTextField,
} from 'components/create/Styled';

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
      <Stack direction="column" spacing={1}>
        <StyledTextField
          label="Title your portfolio"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <StyledTextField
          label="Full Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <StyledTextField
          label="Upload Picture"
          onChange={(event) => {
            setHeadShot(event.target.value);
          }}
        />
        <StyledParagraphTextField
          label="About Yourself"
          multiline
          rows={4}
          onChange={(event) => {
            setAbout(event.target.value);
          }}
        />
      </Stack>
    </div>
  );
};
export default Introduction;

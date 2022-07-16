import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { TextField, Input } from '@mui/material';
import { useCallback, useState, useContext } from 'react';
import { ISkills } from 'models/data/';
import { prepareDataForValidation } from 'formik';
const Skills = () => {
  const { skills, setSkills } = useContext(CreatePortfolioContext);
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  return (
    <div>
      <TextField
        label={'Tech Skills'}
        variant="standard"
        onKeyPress={(e: any) => {
          if (e.key === 'Enter') {
            skills.tech?.push(e.target.value);
            setSkills({ ...skills });
          }
        }}
      />
      <Stack direction="row" spacing={1}>
        {skills.tech?.map((tech, index: number) => (
          <Chip
            key={index}
            label={tech}
            onClick={handleClick}
            onDelete={handleDelete}
          />
        ))}
      </Stack>
      <TextField
        label={'Soft Skills'}
        variant="standard"
        onKeyPress={(e: any) => {
          if (e.key === 'Enter') {
            skills.soft?.push(e.target.value);
            setSkills({ ...skills });
          }
        }}
      />
      <Stack direction="row" spacing={1}>
        {skills.soft?.map((soft, index: number) => (
          <Chip
            key={index}
            label={soft}
            onClick={handleClick}
            onDelete={handleDelete}
          />
        ))}
      </Stack>
    </div>
  );
};

export default Skills;

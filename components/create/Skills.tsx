import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import {
  StyledTextField,
  StyledParagraphTextField,
} from 'components/create/Styled';
import { useState, useContext, useRef, RefObject } from 'react';
const Skills = () => {
  const { skills, setSkills } = useContext(CreatePortfolioContext);
  const [techSkill, setTechSkill] = useState('');
  const [softSkill, setSoftSkill] = useState('');
  const formRef = useRef() as RefObject<HTMLFormElement>;
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  return (
    <div>
      <StyledTextField
        label={'Tech Skills'}
        value={techSkill}
        onChange={(event) => {
          setTechSkill(event.target.value);
        }}
        onKeyPress={(e: any) => {
          if (e.key === 'Enter') {
            skills.tech?.push(e.target.value);
            setSkills({ ...skills });
            setTechSkill('');
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
      <StyledTextField
        label={'Soft Skills'}
        value={softSkill}
        onChange={(event) => {
          setSoftSkill(event.target.value);
        }}
        onKeyPress={(e: any) => {
          if (e.key === 'Enter') {
            skills.soft?.push(e.target.value);
            setSkills({ ...skills });
            setSoftSkill('');
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

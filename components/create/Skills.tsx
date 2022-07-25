import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { StyledTextField } from 'components/create/Styled';
import { useState, useContext } from 'react';
const Skills = () => {
  const { skills, setSkills } = useContext(CreatePortfolioContext);
  const [techSkill, setTechSkill] = useState('');
  const [softSkill, setSoftSkill] = useState('');

  return (
    <div>
      <StyledTextField
        label="Tech Skills"
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
          <Chip key={index} label={tech} />
        ))}
      </Stack>
      <StyledTextField
        label="Soft Skills"
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
          <Chip key={index} label={soft} />
        ))}
      </Stack>
    </div>
  );
};

export default Skills;

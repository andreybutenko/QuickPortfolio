import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import {
  StyledTextField,
  StyledPaper,
  CreateTitleTypography,
} from 'components/create/Styled';
import { useState, useContext } from 'react';
import { isUndefined } from 'utils';
import NavBarView from 'components/view/NavBarView';
const Skills = () => {
  const { skills, setSkills } = useContext(CreatePortfolioContext);
  const [draftTechSkill, setDraftTechSkill] = useState('');
  const [draftSoftSkill, setDraftSoftSkill] = useState('');

  return (
    <div>
      <NavBarView pageTitle={[]} />
      <StyledPaper elevation={12}>
        <CreateTitleTypography variant="h3">Skills</CreateTitleTypography>
        <StyledTextField
          label="Tech Skills"
          value={draftTechSkill}
          onChange={(event) => {
            setDraftTechSkill(event.target.value);
          }}
          onKeyPress={(e: any) => {
            if (e.key === 'Enter') {
              const newSkill = e.target.value;
              setSkills({
                ...skills,
                tech: isUndefined(skills.tech)
                  ? [newSkill]
                  : [...(skills.tech as string[]), newSkill],
              });
              setDraftTechSkill('');
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
          value={draftSoftSkill}
          onChange={(event) => {
            setDraftSoftSkill(event.target.value);
          }}
          onKeyPress={(e: any) => {
            if (e.key === 'Enter') {
              const newSkill = e.target.value;
              setSkills({
                ...skills,
                soft: isUndefined(skills.soft)
                  ? [newSkill]
                  : [...(skills.soft as string[]), newSkill],
              });
              setDraftSoftSkill('');
            }
          }}
        />
        <Stack direction="row" spacing={1}>
          {skills.soft?.map((soft, index: number) => (
            <Chip key={index} label={soft} />
          ))}
        </Stack>
      </StyledPaper>
    </div>
  );
};

export default Skills;

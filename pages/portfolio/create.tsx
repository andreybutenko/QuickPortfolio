import { Button, CircularProgress, Typography, Grid } from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { PortfolioApiClient } from 'utils/clients';
import Introduction from 'components/create/Introduction';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { IWorkHistory, ISkills, IProject, IContact } from 'models/data/';
import Skills from 'components/create/Skills';
import WorkHistory from 'components/create/WorkHistory';
import Contact from 'components/create/Contact';
//import {Skills, Introduction, WorkHistory, Contact, Project} from 'components/create';
import Project from 'components/create/Project';
import { stringify } from 'querystring';
const CreatePortfolioPage: NextPage = () => {
  const portfolioClient = new PortfolioApiClient();
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [headshot, setHeadShot] = useState('');
  const [about, setAbout] = useState('');
  const [work, setWork] = useState<IWorkHistory[]>([]);
  const [skills, setSkills] = useState<ISkills>({ tech: [], soft: [] });
  const [projects, setProjects] = useState<IProject[]>([]);
  const [contact, setContact] = useState<IContact>({ email: '', links: [] });
  const [isSubmitting, setIsSubmitting] = useState(false);
  if (isSubmitting) {
    return <CircularProgress />;
  }
  //
  const onSubmit = async () => {
    setIsSubmitting(true);
    const portfolio = await portfolioClient.put({
      content: {
        title,
        name,
        headshot,
        about,
        work,
        skills,
        projects,
        contact,
      },
      //
    });
    router.push(`/portfolio/${portfolio?.id}`);
    console.log(portfolio);
  };
  const pageTitles = [
    'Personal Information',
    'Work History',
    'Skills',
    'Projects',
    'Contact Information',
  ];
  const PageDisplay = () => {
    if (page === 0) {
      return <Introduction />;
    } else if (page === 1) {
      return <WorkHistory />;
    } else if (page === 2) {
      return <Skills />;
    } else if (page === 3) {
      return <Project />;
    } else {
      return <Contact />;
    }
  };
  return (
    <CreatePortfolioContext.Provider
      value={{
        title,
        setTitle,
        name,
        setName,
        headshot,
        setHeadShot,
        about,
        setAbout,
        work,
        setWork,
        skills,
        setSkills,
        projects,
        setProjects,
        contact,
        setContact,
      }}
    >
      <div>
        <Typography>{pageTitles[page]}</Typography>
      </div>
      {/* <Introduction />
      <WorkHistory />
      <Skills />
      <Project />
      <Contact /> */}
      <div>{PageDisplay()}</div>
      <button
        disabled={page == 0}
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      >
        Prev
      </button>
      <button
        disabled={page == 4}
        onClick={() => {
          setPage((currPage) => currPage + 1);
        }}
      >
        Next
      </button>
      <Button variant="outlined" disabled={isSubmitting} onClick={onSubmit}>
        {isSubmitting ? 'Submitting...' : 'Create'}
      </Button>
    </CreatePortfolioContext.Provider>
  );
};

export default CreatePortfolioPage;

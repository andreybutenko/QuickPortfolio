import { Button, CircularProgress, Grid } from '@mui/material';
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
import Project from 'components/create/Project';
import Review from 'components/create/Review';
import { ViewButton } from 'components/create/Styled';
const PAGE_TITLES = [
  'Personal Information',
  'Work History',
  'Skills',
  'Projects',
  'Contact Information',
];
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
    });
    router.push(`/portfolio/${portfolio?.id}`);
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <Introduction />;
    } else if (page === 1) {
      return <WorkHistory />;
    } else if (page === 2) {
      return <Skills />;
    } else if (page === 3) {
      return <Project />;
    } else if (page === 4) {
      return <Contact />;
    } else {
      return (
        <div>
          <Review />
          <Grid container justifyContent={'center'}>
            <ViewButton disabled={isSubmitting} onClick={onSubmit}>
              {isSubmitting ? 'Submitting...' : 'Create'}
            </ViewButton>
          </Grid>
        </div>
      );
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
      <div
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      ></div>
      <div>{PageDisplay()}</div>
      <Grid
        container
        justifyContent={'center'}
        paddingTop={3}
        paddingBottom={5}
      >
        <Button
          variant="outlined"
          color="secondary"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disabled={page === PAGE_TITLES.length}
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          Next
        </Button>
      </Grid>
    </CreatePortfolioContext.Provider>
  );
};

export default CreatePortfolioPage;

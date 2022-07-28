import { IWorkHistory, ISkills, IProject, IContact } from 'models/data/';
import { createContext } from 'react';

const CreatePortfolioContext = createContext({
  title: '',
  setTitle: (title: string) => {},
  name: '',
  setName: (name: string) => {},
  headshot: '',
  setHeadShot: (headshot: string) => {},
  about: '',
  setAbout: (about: string) => {},
  work: [] as IWorkHistory[],
  setWork: (work: IWorkHistory[]) => {},
  skills: {} as ISkills,
  setSkills: (skills: ISkills) => {},
  projects: [] as IProject[],
  setProjects: (projects: IProject[]) => {},
  contact: {} as IContact,
  setContact: (contact: IContact) => {},
});
export default CreatePortfolioContext;

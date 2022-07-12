/** Portfolio data */
export interface IWorkHistory {
  position: string;
  company: string;
  dateWorked?: string;
  description?: string;
}
export interface ILink {
  label: string;
  url: string;
}
export interface IProject {
  title: string;
  picture?: string;
  summary?: string;
  links?: ILink[];
}
export interface ISkills {
  tech?: string[];
  soft?: string[];
}

export interface IContact {
  links?: ILink[];
  email?: string;
}

export interface IPortfolio {
  /** Unique ID */
  id: string;

  /** Metadata */
  meta: {
    createTime: string;
    modifyTime: string;
  };

  /** User-provided content */
  content: {
    title: string;
    name: string;
    headshot: string;
    about: string;
    work: IWorkHistory[];
    skills: ISkills;
    projects: IProject[];
    contact: IContact;
  };
}

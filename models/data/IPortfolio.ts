/** Portfolio data */
export interface IWorkHistory {
  position?: string;
  company?: string;
  dateWorked?: string;
  description?: string;
}
export interface IProjects {
  title?: string;
  picture?: string;
  summary?: string;
  viewCode?: string;
  liveDemo?: string;
}

export interface ISkills {
  tech?: string[];
  soft?: string[];
}

export interface IContact {
  codeRepoLink?: string;
  linkedin?: string;
  email?: string;
}

export interface IMessage {
  firstName?: string;
  lastName?: string;
  senderEmail?: string;
  subject?: string;
  messages?: string;
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
    projects: IProjects[];
    contact: IContact;
    message: IMessage[];
  };
}

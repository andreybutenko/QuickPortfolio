/** Portfolio data */
export interface WorkHistory {
  position: string;
  company: string;
  dateWorked: string;
  description: string;
}
export interface Projects {
  title: string;
  picture: string;
  summary: string;
  viewCode: string;
  liveDemo: string;
}

export interface Skills {
  tech: string[];
  soft: string[];
}

export interface Contact {
  codeRepoLink: string;
  linkedin: string;
  email: string;
}

export interface Message {
  firstName: string;
  lastName: string;
  senderEmail: string;
  subject: string;
  messages: string;
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
    work: WorkHistory[];
    skills: Skills[];
    projects: Projects[];
    contact: Contact;
    message: Message[];
  };
}

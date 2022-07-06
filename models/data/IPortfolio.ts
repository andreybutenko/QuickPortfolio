/** Portfolio data */
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
    work: string[][];
    techskills: string[];
    softskills: string[];
    //  [skills: string]: string[];
    projects: string[][];
    contact: string[];
    message: string;
  };
}

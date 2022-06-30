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
  };
}

import * as React from 'react';

import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';
type ContactViewProps = {
  portfolio: IPortfolio;
};

const ContactView = (props: ContactViewProps) => {
  const { portfolio } = props;
  return (
    <div>
      <Typography variant="h3">Contact Information</Typography>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Stack direction="column">
        <Typography>Email: {portfolio.content.contact.email}</Typography>
        {portfolio.content.contact.links?.map((link, index: number) => (
          <Typography key={index}>
            {link.label}: {link.url}
          </Typography>
        ))}
      </Stack>
    </div>
  );
};

export default ContactView;

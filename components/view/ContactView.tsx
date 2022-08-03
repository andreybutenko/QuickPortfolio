import * as React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <EmailIcon />
          <span>
            <Typography>{portfolio.content.contact.email}</Typography>
          </span>
        </div>
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

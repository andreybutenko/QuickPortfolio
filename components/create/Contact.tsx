import * as React from 'react';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { Stack, Typography, Link } from '@mui/material';
import { useContext } from 'react';
import { ILink } from 'models/data/';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { StyledTextField } from 'components/create/Styled';
import LinksEditor from './common/LinksEditor';
const Contact = () => {
  const { contact, setContact } = useContext(CreatePortfolioContext);
  const setLinks = (links: ILink[]) => {
    setContact({
      ...contact,
      links,
    });
  };
  const selectLinkIcon = (link: ILink) => {
    switch (true) {
      case link.url.includes('linkedin.com'):
        link.label = 'LinkedIn';
        return <LinkedInIcon />;
      case link.url.includes('github.com'):
        link.label = 'GitHub';
        return <GitHubIcon />;

      default:
        return <LanguageIcon />;
    }
  };
  return (
    <div>
      <Stack direction="column">
        <StyledTextField
          label="Email Address"
          onChange={(element) => {
            setContact({
              ...contact,
              email: element.target.value,
            });
          }}
          value={contact.email}
        />
        <LinksEditor links={contact.links || []} setLinks={setLinks} />
      </Stack>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <EmailIcon />
        <span>
          <Typography>{contact.email}</Typography>
        </span>
      </div>
      <Typography>Your links</Typography>
      {contact.links?.map((link, index: number) => (
        <Stack key={index}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {selectLinkIcon(link)}
            <span>
              <Typography>
                <Link href={link.url} target="_blank" rel="noreferrer noopener">
                  {link.label}
                </Link>
              </Typography>
            </span>
          </div>
        </Stack>
      ))}
    </div>
  );
};

export default Contact;

import * as React from 'react';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { Stack, Button, Typography, Link } from '@mui/material';
import { useContext, useRef, RefObject } from 'react';
import { ILink } from 'models/data/';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { StyledTextField } from 'components/create/Styled';
import LinksEditor from './common/LinksEditor';
const Contact = () => {
  const { contact, setContact } = useContext(CreatePortfolioContext);
  const onSubmit = () => {
    setContact({ ...contact });
  };
  const setLinks = (links: ILink[]) => {
    setContact({
      ...contact,
      links,
    });
  };
  const selectLinkIcon = (link: ILink) => {
    switch (link.label.toLowerCase()) {
      case 'linkedin':
        link.label = 'LinkedIn';
        return <LinkedInIcon />;
      case 'github':
        link.label = 'GitHub';
        return <GitHubIcon />;

      default:
        return <LanguageIcon />;
    }
  };
  const openInNewTab = (url: string | URL | undefined) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div>
      <Stack direction="column">
        <StyledTextField
          label={'Email Address'}
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
                <Link href="#" onClick={() => openInNewTab(link.url)}>
                  {link.label}
                </Link>
              </Typography>
            </span>
          </div>
        </Stack>
      ))}
      <Button variant="outlined" onClick={onSubmit}>
        Review Your Information
      </Button>
    </div>
  );
};

export default Contact;

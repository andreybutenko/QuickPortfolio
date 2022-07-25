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
const Contact = () => {
  const formRef = useRef() as RefObject<HTMLFormElement>;
  const draftLink: ILink = {
    label: '',
    url: '',
  };
  const { contact, setContact } = useContext(CreatePortfolioContext);
  const onAddLink = () => {
    contact.links?.push(draftLink);

    setContact({ ...contact });
    formRef.current?.reset();
  };
  const onSubmit = () => {
    setContact({ ...contact });
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
            contact.email = element.target.value;
          }}
        />
        <form ref={formRef}>
          <Stack direction="column">
            <StyledTextField
              label="Label"
              onChange={(element) => {
                draftLink.label = element.target.value;
              }}
            />
            <StyledTextField
              label="URL"
              onChange={(element) => {
                draftLink.url = element.target.value;
              }}
            />
          </Stack>
        </form>
      </Stack>
      <Button variant="outlined" onClick={onAddLink}>
        Add Link
      </Button>
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
      <Button variant="outlined" onClick={onSubmit}>
        Review Your Information
      </Button>
    </div>
  );
};

export default Contact;

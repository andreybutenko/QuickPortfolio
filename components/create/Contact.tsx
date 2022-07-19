import * as React from 'react';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import {
  TextField,
  Input,
  Stack,
  Button,
  Typography,
  Grid,
} from '@mui/material';
import { useCallback, useState, useContext, useRef, RefObject } from 'react';
import { IContact, ILink } from 'models/data/';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const Contact = () => {
  const formRef = useRef() as RefObject<HTMLFormElement>;
  const link: ILink = {
    label: '',
    url: '',
  };
  const { contact, setContact } = useContext(CreatePortfolioContext);
  const onAddLink = () => {
    contact.links?.push(link);
    console.log(contact.links);
    setContact({ ...contact });
    formRef.current?.reset();
  };
  const onSubmit = () => {
    // console.log(contact.links);
    setContact({ ...contact });
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

  return (
    <div>
      <Stack direction="column" spacing={1}>
        <TextField
          label={'Email Address'}
          variant="standard"
          onChange={(element) => {
            contact.email = element.target.value;
          }}
        />
        <form ref={formRef}>
          <TextField
            label={'Label'}
            variant="standard"
            onChange={(element) => {
              link.label = element.target.value;
            }}
          />
          <TextField
            label={'URL'}
            variant="standard"
            onChange={(element) => {
              link.url = element.target.value;
            }}
          />
        </form>
      </Stack>
      {/* <Grid container sx={{ color: 'text.primary' }}> */}
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
              <Typography>{link.label}</Typography>
            </span>
          </div>
        </Stack>
      ))}
      <Button variant="outlined" onClick={onAddLink}>
        Add Link
      </Button>
      <Button variant="outlined" onClick={onSubmit}>
        Review your information
      </Button>
    </div>
  );
};

export default Contact;

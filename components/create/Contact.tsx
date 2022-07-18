import * as React from 'react';
import CreatePortfolioContext from 'components/create/CreatePorfolioContext';
import { TextField, Input, Stack, Button } from '@mui/material';
import { useCallback, useState, useContext, useRef, RefObject } from 'react';
import { IContact, ILink } from 'models/data/';

const Contact = () => {
  const formRef = useRef() as RefObject<HTMLFormElement>;
  const link: ILink = {
    label: '',
    url: '',
  };
  const { contact, setContact } = useContext(CreatePortfolioContext);
  const onAddLink = () => {
    contact.links?.push(link);
    formRef.current?.reset();
  };
  const onSubmit = () => {
    // console.log(contact.links);
    setContact({ ...contact });
  };
  return (
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
      <Button variant="outlined" onClick={onAddLink}>
        Add Link
      </Button>
      <Button variant="outlined" onClick={onSubmit}>
        Review your information
      </Button>
    </Stack>
  );
};

export default Contact;

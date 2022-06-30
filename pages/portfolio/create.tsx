import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { PortfolioApiClient } from 'utils/clients';

const CreatePortfolioPage: NextPage = () => {
  const portfolioClient = new PortfolioApiClient();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isSubmitting) {
    return <CircularProgress />;
  }

  const onSubmit = async () => {
    setIsSubmitting(true);
    const portfolio = await portfolioClient.put({
      content: {
        title,
      },
    });
    router.push(`/portfolio/${portfolio.id}`);
  };

  return (
    <div>
      <Typography variant="h1">Create Portfolio</Typography>
      <Stack spacing={2}>
        <TextField
          label="Title"
          variant="standard"
          onChange={(event) => setTitle(event.target.value)}
        />
        <Button variant="outlined" disabled={isSubmitting} onClick={onSubmit}>
          {isSubmitting ? 'Submitting...' : 'Create'}
        </Button>
      </Stack>
    </div>
  );
};

export default CreatePortfolioPage;

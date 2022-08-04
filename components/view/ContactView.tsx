import * as React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import Stack from '@mui/material/Stack';
import {
  Typography,
  Link,
  CardContent,
  Card,
  Avatar,
  Grid,
} from '@mui/material';
import { Divider } from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';
import { selectLinkIcon } from 'components/create/Contact';

type ContactViewProps = {
  portfolio: IPortfolio;
};

const ContactView = (props: ContactViewProps) => {
  const { portfolio } = props;
  return (
    <div>
      <Card
        sx={{
          borderRadius: 7,
          marginTop: 3,
        }}
      >
        <CardContent>
          <Typography variant="h3">Contact Me</Typography>
          <Stack direction="column" spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Grid>
              <Avatar
                variant="rounded"
                alt={portfolio.content.name}
                src={portfolio.content.headshot}
                sx={{
                  width: 300,
                  height: 300,
                }}
              />
            </Grid>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <EmailIcon sx={{ fontSize: 60 }} />
              <span>
                <Typography variant="h4">
                  <Link href={`mailto:${portfolio.content.contact.email}`}>
                    {portfolio.content.contact.email}
                  </Link>
                </Typography>
              </span>
            </div>
            {portfolio.content.contact.links?.map((link, index: number) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                {selectLinkIcon(link)}
                <span>
                  <Typography variant="h4">
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.label}
                    </Link>
                  </Typography>
                </span>
              </div>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactView;

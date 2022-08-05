import * as React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import Stack from '@mui/material/Stack';
import { Typography, Link, CardContent, Grid } from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';
import { selectLinkIcon } from 'components/create/Contact';
import {
  ViewSectionTypography,
  StyledAvatar,
  StyledCard,
} from 'components/create/Styled';

type ContactViewProps = {
  portfolio: IPortfolio;
};

const ContactView = (props: ContactViewProps) => {
  const { portfolio } = props;
  return (
    <div>
      <ViewSectionTypography variant="h3">Contact Me</ViewSectionTypography>
      <StyledCard>
        <CardContent>
          <Stack direction="row" spacing={{ xs: 4, sm: 4, md: 4 }}>
            <Grid>
              <StyledAvatar
                variant="rounded"
                alt={`Profile picture of:${portfolio.content.name}`}
                src={portfolio.content.headshot}
              />
            </Grid>
            <Stack direction="column">
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
          </Stack>
        </CardContent>
      </StyledCard>
    </div>
  );
};

export default ContactView;

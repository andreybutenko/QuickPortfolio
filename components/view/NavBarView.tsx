import * as React from 'react';
import { AppBar, Typography } from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { NavBarViewTypography, StyledAppBar } from 'components/create/Styled';
type NavBarViewProps = {
  pageTitle: string[];
};

const NavBarView = (props: NavBarViewProps) => {
  function scrollTo(hash: string) {
    location.hash = '#' + hash;
  }
  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: 5,
        marginTop: 3,
        marginBottom: 5,
        backgroundColor: 'rgba(73, 97,175, 0.8)',
        color: 'white',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: { xs: 'flex' },
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <WorkHistoryIcon
            sx={{ display: { xs: 'none', md: 'flex', color: 'white' }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            QUICKPORTFOLIO
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {props.pageTitle.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => {
                  scrollTo(page);
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBarView;

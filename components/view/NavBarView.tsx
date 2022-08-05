import * as React from 'react';
import { AppBar, Typography } from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
type NavBarViewProps = {
  portfolio: IPortfolio;
};

const NavBarView = (props: NavBarViewProps) => {
  const pages = ['About', 'Work History', 'Projects', 'Skills', 'Contact'];

  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: 7,
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
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            QUICK PORTFOLIO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
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

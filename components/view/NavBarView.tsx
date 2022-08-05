import * as React from 'react';
import { Link } from '@mui/material';
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
    <StyledAppBar position="static">
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
          <Link href="/" style={{ textDecoration: 'none' }}>
            <NavBarViewTypography variant="h6">
              QUICKPORTFOLIO
            </NavBarViewTypography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              margin: 'auto',
              paddingLeft: 10,
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
    </StyledAppBar>
  );
};
export default NavBarView;

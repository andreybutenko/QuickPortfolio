import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const ListingAppBar = () => {
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
        <Toolbar disableGutters>
          <WorkHistoryIcon
            sx={{
              display: { xs: 'none', md: 'flex', color: 'white' },
              mr: 1,
            }}
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ListingAppBar;

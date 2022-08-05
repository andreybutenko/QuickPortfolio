import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';

const ListingAppBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: 5,
        marginBottom: 5,
        backgroundColor: 'rgba(73, 97,175, 0.8)',
        color: 'white',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <WorkHistoryOutlinedIcon
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
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            QUICK PORTFOLIO
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ListingAppBar;

import * as React from 'react';
import Stack from '@mui/material/Stack';
import { AppBar, Typography } from '@mui/material';
import { IPortfolio } from 'models/data/IPortfolio';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import AdbIcon from '@mui/icons-material/Adb';
type NavBarViewProps = {
  portfolio: IPortfolio;
};

const NavBarView = (props: NavBarViewProps) => {
  const { portfolio } = props;
  const pages = ['About', 'Work History', 'Projects', 'Skills', 'Contact'];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: 7,
        marginTop: 3,
        backgroundColor: 'rgba(73, 97,175, 0.8)',
        color: 'white',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <WorkHistoryOutlinedIcon
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
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            QUICK PORTFOLIO
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
                onClick={handleCloseNavMenu}
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

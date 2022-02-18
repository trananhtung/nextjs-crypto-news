import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Container,
  Hidden,
  Button,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from '@mui/icons-material';

import icon from '/public/btg.svg';
import { useMedia, useDictionary } from '../../hooks';
import { Branch, LinkContainer, MenuItemLink, NavLink } from './Style';
import { SwitchLanguage } from '..';

export const Navbar = () => {
  const { data: session } = useSession();
  const auth = session ? true : false;
  const dictionary = useDictionary();
  const { mdUp } = useMedia();

  const [accountMenu, setAccountMenu] = useState<null | HTMLElement>(null);
  const [sideBar, setSideBar] = useState<null | HTMLElement>(null);

  const handleLogout = () => {
    signOut({ redirect: false });
  };

  const handleSideBar = (event: React.MouseEvent<HTMLElement>) => {
    if (sideBar) {
      setSideBar(null);
    } else {
      setSideBar(event.currentTarget);
    }
  };

  const handleAccountMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (accountMenu) {
      setAccountMenu(null);
    } else {
      setAccountMenu(event.currentTarget);
    }
  };

  return (
    <AppBar position="relative" color="default" sx={{ mb: '2rem' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Hidden smUp>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-controls="sidebar"
              aria-haspopup="true"
              sx={{ mr: 2 }}
              onClick={handleSideBar}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="sidebar"
              anchorEl={sideBar}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(sideBar)}
              onClick={handleSideBar}
              onClose={handleSideBar}
            >
              <MenuItem>
                <Link href="/" passHref prefetch={false}>
                  <MenuItemLink>{dictionary.home}</MenuItemLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/market" passHref prefetch={false}>
                  <MenuItemLink>{dictionary.market}</MenuItemLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/watch-list" passHref prefetch={false}>
                  <MenuItemLink>{dictionary.watchList}</MenuItemLink>
                </Link>
              </MenuItem>
            </Menu>
          </Hidden>
          <Typography
            variant="subtitle2"
            component="div"
            sx={{ flexGrow: 1, display: 'flex', gap: 2 }}
          >
            <Hidden smDown implementation="css">
              <LinkContainer>
                <Link href="/" passHref prefetch={false}>
                  <Branch>
                    <Image src={icon} alt="Picture of the author" width={40} height={40} />
                  </Branch>
                </Link>
                <Link href="/" passHref prefetch={false}>
                  <NavLink>{dictionary.home}</NavLink>
                </Link>
                <Link href="/market" passHref prefetch={false}>
                  <NavLink>{dictionary.market}</NavLink>
                </Link>
                <Link href="/watch-list" passHref prefetch={false}>
                  <NavLink>{dictionary.watchList}</NavLink>
                </Link>
              </LinkContainer>
            </Hidden>
          </Typography>
          <SwitchLanguage />
          {auth ? (
            <Box>
              <Typography variant="body2" component="span" onClick={handleAccountMenu}>
                {mdUp && session?.user?.name}
                <IconButton
                  size="large"
                  aria-controls="menu-account"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Typography>
              <Menu
                id="menu-account"
                anchorEl={accountMenu}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(accountMenu)}
                onClose={handleAccountMenu}
                onClick={handleAccountMenu}
              >
                <MenuItem>
                  <Link href="/watch-list" passHref prefetch={false}>
                    <MenuItemLink>{dictionary.watchList}</MenuItemLink>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleLogout}>{dictionary.logout}</MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box>
              <Button
                variant="outlined"
                color="warning"
                size="small"
                onClick={() => {
                  Router.push('/auth');
                }}
              >
                {dictionary.login}
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

import Logo from '@app/assets/logo.png';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

// clicking on this material-ui link reloads the page
// TODO fix this

export function Header({ sections, title }: HeaderProps) {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Link
          color="inherit"
          noWrap
          key="home"
          variant="body2"
          href="/"
          sx={{ p: 1, flexShrink: 0 }}
        >
          <img src={Logo} width="30" height="30" alt="Logo" />
        </Link>

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Login
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'flex-start', overflowX: 'auto' }}
      >
        {sections.map(({ title: sectionTitle, url }) => (
          <Link
            color="inherit"
            noWrap
            key={sectionTitle}
            variant="body2"
            href={url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {sectionTitle}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

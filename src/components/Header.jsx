import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Header = ({ isCompact }) => (
  <Grid container>
    <header style={{ width: '100%', background: 'black', color: 'white' }}>
      <Link to="/home">
        <h1
          id="header-title"
          style={{ fontSize: isCompact ? '36px' : '56px', textAlign: 'center', textShadow: '2px 2px orange' }}
        >
          SPORTSBOT5000
        </h1>
      </Link>
      <nav id="header-links" style={{ textAlign: 'center' }}>
        <Link to="/home" style={{ display: 'inline-block', padding: '10px', color: 'white' }}>My Games</Link>
        <Link to="/home" style={{ display: 'inline-block', padding: '10px', color: 'white' }}>Popular Games</Link>
        <Link to="/my/teams" style={{ display: 'inline-block', padding: '10px', color: 'white' }}>My Teams</Link>
        <Link to="/home" style={{ display: 'inline-block', padding: '10px', color: 'white' }}>Account</Link>
        <Link to="/home" style={{ display: 'inline-block', padding: '10px', color: 'white' }}>Sign Out</Link>
      </nav>
    </header>
  </Grid>
);

export default Header;

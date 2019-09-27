import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import MyTeams from './MyTeams';
import './App.scss';

const App = () => {
  const [isCompact, setIsCompact] = useState(window.innerWidth < 960);
  useEffect(() => {
    window.addEventListener('resize', () => setIsCompact(window.innerWidth < 960));
    return () => window.removeEventListener('resize', setIsCompact);
  });

  const createData = (date, time, game, tv, premium, free, highlights) => ({
    date, time, game, tv, premium, free, highlights,
  });

  const columns = [
    { name: 'date', label: 'Date' },
    { name: 'time', label: 'Time' },
    { name: 'game', label: 'Game' },
    { name: 'tv', label: 'TV' },
    { name: 'premium', label: 'Premium Streams' },
    { name: 'free', label: 'Free Streams' },
    { name: 'highlights', label: 'Highlights' },
  ];

  const convertToIcons = (text) => {
    const matchup = text.includes('@') ? text.split('@') : [text];
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={require(`../images/${matchup[0].trim().toLowerCase()}.png`)} height="25px" alt={matchup[0]} />
        {matchup.length > 1 && (
          <Fragment>
            <span style={{ padding: '0px 10px' }}>@</span>
            <img src={require(`../images/${matchup[1].trim().toLowerCase()}.png`)} height="25px" alt={matchup[1]} />
          </Fragment>
        )}
      </div>
    );
  };

  const rows = [
    createData('Sept 18', '9:55am', isCompact ? convertToIcons('Tottenham @ Chelsea') : 'Tottenham @ Chelsea', 'TNT', <a href="/">TNT</a>, <a href="/">Reddit</a>, ''),
    createData('Sept 19', '9:55am', isCompact ? convertToIcons('Dbacks @ Padres') : 'Dbacks @ Padres', 'FOX Sports AZ', <a href="/">ABC</a>, <a href="/">Reddit</a>, <a href="/">ESPN</a>),
    createData('Sept 20', '9:55am', isCompact ? convertToIcons('Suns @ Kings') : 'Suns @ Kings', 'FOX Sports AZ', <a href="/">CBS</a>, <a href="/">Reddit</a>, ''),
    createData('Sept 21', '9:55am', isCompact ? convertToIcons('Coyotes @ Sharks') : 'Coyotes @ Sharks', 'FOX Sports AZ', <a href="/">FOX</a>, <a href="/">Reddit</a>, ''),
    createData('Sept 22', '9:55am', isCompact ? convertToIcons('Cardinals @ Panthers') : 'Cardinals @ Panthers', 'FOX', <a href="/">NBC</a>, <a href="/">Reddit</a>, ''),
    createData('Sept 23', '9:55am', isCompact ? convertToIcons('Masters') : 'Masters', 'NBC', <a href="/">ESPN2</a>, <a href="/">Reddit</a>, ''),
  ];

  return (
    <Router>
      <Route path="/" render={props => <Header {...props} isCompact={isCompact} />} />
      <Route path="/home" render={props => <Home {...props} isCompact={isCompact} columns={columns} rows={rows} />} />
      <Route path="/my/teams" render={props => <MyTeams {...props} />} />
    </Router>
  );
};

export default App;

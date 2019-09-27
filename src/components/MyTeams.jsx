import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const MyTeams = () => {
  const [team, setTeam] = useState('');
  const [league, setLeague] = useState('');
  const [favorites, setFavorites] = useState(['Dbacks', 'Suns', 'Coyotes']);
  const [duplicateTeamError, setDuplicateTeamError] = useState('');
  const [duplicateLeagueError, setDuplicateLeagueError] = useState('');
  const recommendedTeams = ['Dodgers', 'Lakers', 'Sharks'];
  const recommendedLeagues = ['National League West (MLB)', 'Pacific Division (NHL)', 'NFC West (NFL)'];

  function onChange(value, key) {
    switch (key) {
      case 'team':
        setTeam(value);
        setDuplicateTeamError('');
        break;
      case 'league':
        setLeague(value);
        setDuplicateLeagueError('');
        break;
      default:
        break;
    }
  }

  function onEnter({ key, target: { value } }, stateKey) {
    if (key === 'Enter' && !favorites.includes(value)) {
      setFavorites(prevFaves => [...prevFaves, value]);
    }
    if (key === 'Enter' && favorites.includes(value)) {
      switch (stateKey) {
        case 'team':
          setDuplicateTeamError('Already in my favorites');
          break;
        case 'league':
          setDuplicateLeagueError('Already in my favorites');
          break;
        default:
          break;
      }
    }
  }
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>My Favorites</h2>
      <Grid container>
        <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
          <input
            id="pick-team"
            type="text"
            value={team}
            onChange={e => onChange(e.target.value, 'team')}
            placeholder="Pick your teams"
            onKeyPress={e => onEnter(e, 'team')}
          />
          {duplicateTeamError && <div>{duplicateTeamError}</div>}
          <h3>Recommended</h3>
          <ul style={{ padding: '0' }}>
            {recommendedTeams.map(team => (
              <li style={{ listStyleType: 'none' }} key={team}>
                <Button onClick={() => setFavorites(prevFaves => [...prevFaves, team])}>
                  <span>{`${team} `}</span>
                  <img src={require(`../images/${team.toLowerCase()}.png`)} alt={team} height="25px" />
                </Button>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
          <input
            id="pick-league"
            type="text"
            value={league}
            onChange={e => onChange(e.target.value, 'league')}
            placeholder="Pick your leagues"
            onKeyPress={e => onEnter(e, 'league')}
          />
          {duplicateLeagueError && <div>{duplicateLeagueError}</div>}
          <h3>Recommended</h3>
          <ul style={{ padding: '0' }}>
            {recommendedLeagues.map(league => (
              <li style={{ listStyleType: 'none' }}>
                <Button onClick={() => setFavorites(prevFaves => [...prevFaves, league])}>
                  <span>{`${league} `}</span>
                  {/*<img src={require('../images/${league}.png')} alt={league} height="25px" />*/}
                </Button>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
      <section style={{ textAlign: 'center' }}>
        <h3>My Favorites</h3>
        <ul style={{ padding: '0' }}>
          {favorites.map((favorite) => {
            return (
              <li key={favorite} style={{ listStyleType: 'none' }}>
                <Button onClick={() => setFavorites(prevFaves => prevFaves.filter(fave => fave !== favorite))}>
                  {favorite}
                  {/*<img src={imageSrc} alt={favorite} height="25px" />*/}
                </Button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default MyTeams;

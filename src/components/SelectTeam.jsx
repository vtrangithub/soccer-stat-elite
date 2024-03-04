// src/components/SelectTeam.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { BASE_URL, headers } from '../apiConfig';
import { useNavigate } from 'react-router-dom';

const SelectTeam = ({ season, leagueId }) => {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (season && leagueId) {
      const url = `${BASE_URL}teams?league=${leagueId}&season=${season}`;
      fetch(url, { headers })
        .then(response => response.json())
        .then(data => {
          if (data.response) {
            setTeams(data.response);
          } else {
            throw new Error('No teams data in response');
          }
        })
        .catch(error => console.error('Error fetching teams:', error));
    }
  }, [season, leagueId]);

  const handleTeamSelect = (event) => {
    const teamId = event.target.value;
    if (teamId) navigate(`/team-statistics/${leagueId}/${teamId}/${season}`);
  };

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="team-select-label">Select a Team</InputLabel>
      <Select
        labelId="team-select-label"
        id="team-select"
        onChange={handleTeamSelect}
        defaultValue=""
        label="Select a Team"
      >
        {teams.map(team => (
          <MenuItem key={team.team.id} value={team.team.id}>
            {team.team.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectTeam.propTypes = {
  season: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  leagueId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default SelectTeam;

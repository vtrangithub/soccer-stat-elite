// src/components/SelectSeason.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { BASE_URL, headers } from '../apiConfig';

const SelectSeason = ({ onSeasonSelect }) => {
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}leagues/seasons`, { headers })
      .then(response => response.json())
      .then(data => {
        if (data.response) {
          setSeasons(data.response);
        } else {
          throw new Error('Failed to load seasons');
        }
      })
      .catch(err => console.error(err));
  }, []);

  const handleChange = (event) => {
    onSeasonSelect(event.target.value);
  };

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="season-select-label">Season</InputLabel>
      <Select
        labelId="season-select-label"
        id="season-select"
        onChange={handleChange}
        defaultValue=""
        label="Season"
      >
        {seasons.map((season) => (
          <MenuItem key={season} value={season}>
            {season}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectSeason.propTypes = {
  onSeasonSelect: PropTypes.func.isRequired,
};

export default SelectSeason;

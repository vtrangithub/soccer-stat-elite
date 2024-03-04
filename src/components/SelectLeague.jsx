// src/components/SelectLeague.jsx
import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const leagues = [
  { id: 39, name: "English Premier League (EPL)" },
  { id: 140, name: "Primera División-LaLiga (Spain)" },
  { id: 78, name: "Bundesliga (Germany)" },
  { id: 61, name: "Ligue 1 (France)" },
  { id: 135, name: "Serie A (Italy)" },
  { id: 909, name: "MLS (Major League Soccer-US)" },
];

const SelectLeague = ({ onLeagueSelect }) => {
  const handleChange = (event) => {
    onLeagueSelect(event.target.value);
  };

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="league-select-label">League</InputLabel>
      <Select
        labelId="league-select-label"
        id="league-select"
        onChange={handleChange}
        defaultValue=""
        label="League"
      >
        {leagues.map((league) => (
          <MenuItem key={league.id} value={league.id}>
            {league.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectLeague.propTypes = {
  onLeagueSelect: PropTypes.func.isRequired,
};

export { leagues };
export default SelectLeague;

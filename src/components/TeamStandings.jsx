// src/components/TeamStandings.jsx
import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../apiConfig";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

const leagues = [
  { id: 39, name: "English Premier League (EPL)" },
  { id: 140, name: "Primera División-LaLiga (Spain)" },
  { id: 78, name: "Bundesliga (Germany)" },
  { id: 135, name: "Serie A (Italy)" },
];

const TeamStandings = () => {
  const [season, setSeason] = useState("");
  const [selectedLeague, setSelectedLeague] = useState(leagues[1].id); // Default to LaLiga
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    if (season !== "" && selectedLeague) {
      fetch(`${BASE_URL}standings?league=${selectedLeague}&season=${season}`, {
        headers,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.response && data.response.length > 0) {
            setStandings(data.response[0].league.standings[0]);
          } else {
            setStandings([]);
          }
        })
        .catch((error) => console.error("Error fetching standings:", error));
    }
  }, [season, selectedLeague]);

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
  };

  const handleLeagueChange = (event) => {
    setSelectedLeague(event.target.value);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Team Standings
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel id="league-select-label">Select a League</InputLabel>
        <Select
          labelId="league-select-label"
          id="league-select"
          value={selectedLeague}
          onChange={handleLeagueChange}
        >
          {leagues.map((league) => (
            <MenuItem key={league.id} value={league.id}>
              {league.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="season-select-label">Select a Season</InputLabel>
        <Select
          labelId="season-select-label"
          id="season-select"
          value={season}
          onChange={handleSeasonChange}
        >
          {Array.from(
            { length: 10 },
            (_, i) => new Date().getFullYear() - i
          ).map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table aria-label="team standings">
          <TableHead>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell>Team</TableCell>
              <TableCell align="right">Played</TableCell>
              <TableCell align="right">Won</TableCell>
              <TableCell align="right">Drawn</TableCell>
              <TableCell align="right">Lost</TableCell>
              <TableCell align="right">Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {standings.length > 0 &&
              standings.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.rank}
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Box
                        component="img"
                        src={row.team.logo}
                        alt={`${row.team.name} Logo`}
                        sx={{ width: 25, height: "auto", marginRight: 1 }}
                      />
                      {row.team.name}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{row.all.played}</TableCell>
                  <TableCell align="right">{row.all.win}</TableCell>
                  <TableCell align="right">{row.all.draw}</TableCell>
                  <TableCell align="right">{row.all.lose}</TableCell>
                  <TableCell align="right">{row.points}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TeamStandings;

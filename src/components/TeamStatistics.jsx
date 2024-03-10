// src/components/TeamStandings.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../apiConfig";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

const TeamStatistics = () => {
  const { leagueId, teamId, season } = useParams();
  const [teamStats, setTeamStats] = useState(null);

  useEffect(() => {
    const fetchTeamStatistics = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}teams/statistics?league=${leagueId}&season=${season}&team=${teamId}`,
          { headers }
        );
        const data = await response.json();
        if (data.response) {
          setTeamStats(data.response);
        } else {
          throw new Error("No team statistics data in response");
        }
      } catch (error) {
        console.error("Error fetching team statistics:", error);
      }
    };

    fetchTeamStatistics();
  }, [leagueId, teamId, season]);

  if (!teamStats) {
    return <Typography>Loading...</Typography>;
  }

  const totalPoints =
    teamStats.fixtures.wins.total * 3 + teamStats.fixtures.draws.total;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom component="div">
        {teamStats.team.name} Statistics
      </Typography>
      <Box
        component="img"
        src={teamStats.team.logo}
        alt={`${teamStats.team.name} Logo`}
        sx={{ width: 100, height: "auto", mb: 2 }}
      />
      <TableContainer component={Paper}>
        <Table aria-label="team statistics">
          <TableHead>
            <TableRow>
              <TableCell>Statistic</TableCell>
              <TableCell align="right">Home</TableCell>
              <TableCell align="right">Away</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Games Played</TableCell>
              <TableCell align="right">
                {teamStats.fixtures.played.home}
              </TableCell>
              <TableCell align="right">
                {teamStats.fixtures.played.away}
              </TableCell>
              <TableCell align="right">
                {teamStats.fixtures.played.total}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Wins</TableCell>
              <TableCell align="right">
                {teamStats.fixtures.wins.home}
              </TableCell>
              <TableCell align="right">
                {teamStats.fixtures.wins.away}
              </TableCell>
              <TableCell align="right">
                {teamStats.fixtures.wins.total}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Draws</TableCell>
              <TableCell align="right">
                {teamStats.fixtures.draws.home}
              </TableCell>
              <TableCell align="right">
                {teamStats.fixtures.draws.away}
              </TableCell>
              <TableCell align="right">
                {teamStats.fixtures.draws.total}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Losses</TableCell>
              <TableCell align="right">
                {teamStats.fixtures.loses.home}
              </TableCell>
              <TableCell align="right">
                {teamStats.fixtures.loses.away}
              </TableCell>
              <TableCell align="right">
                {teamStats.fixtures.loses.total}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Goals For</TableCell>
              <TableCell align="right">
                {teamStats.goals.for.total.home}
              </TableCell>
              <TableCell align="right">
                {teamStats.goals.for.total.away}
              </TableCell>
              <TableCell align="right">
                {teamStats.goals.for.total.total}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Goals Against</TableCell>
              <TableCell align="right">
                {teamStats.goals.against.total.home}
              </TableCell>
              <TableCell align="right">
                {teamStats.goals.against.total.away}
              </TableCell>
              <TableCell align="right">
                {teamStats.goals.against.total.total}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Points</TableCell>
              <TableCell align="right" colSpan={3}>
                {totalPoints}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TeamStatistics;

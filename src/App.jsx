// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link as RouterLink,
} from "react-router-dom";
import SelectSeason from "./components/SelectSeason";
import TeamStatistics from "./components/TeamStatistics";
import SelectLeague from "./components/SelectLeague";
import TeamStandings from "./components/TeamStandings";
import SelectTeam from "./components/SelectTeam";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565c0",
    },
    background: {
      default: "#f4f4f4",
    },
  },
});

const App = () => {
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedLeague, setSelectedLeague] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              SoccerStat Elite
            </Typography>
            <Button color="inherit" component={RouterLink} to="/">
              Team Statistics
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/team-standings"
            >
              Major League Standings
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SelectLeague onLeagueSelect={setSelectedLeague} />
                  {selectedLeague && (
                    <SelectSeason onSeasonSelect={setSelectedSeason} />
                  )}
                  {selectedSeason && (
                    <SelectTeam
                      season={selectedSeason}
                      leagueId={selectedLeague}
                    />
                  )}
                </>
              }
            />
            <Route
              path="/team-statistics/:leagueId/:teamId/:season"
              element={<TeamStatistics />}
            />
            <Route path="/team-standings" element={<TeamStandings />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;

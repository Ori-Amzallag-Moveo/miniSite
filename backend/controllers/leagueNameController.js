import axios from "axios";

async function getLeagueTeams(leagueName) {
  try {
    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${leagueName}`);
    return response.data.teams;
  } catch (error) {
    throw error;
  }
}

export { getLeagueTeams };

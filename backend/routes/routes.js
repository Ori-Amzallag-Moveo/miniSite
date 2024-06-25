import express from "express";
import { getLeagueTeams } from "../controllers/leagueNameController.js";

const router = express.Router();

router.get("/:leagueName", async (req, res) => {
  try {
    const { leagueName } = req.params;
    const teamsList = await getLeagueTeams(leagueName);
    res.send(teamsList);
  } catch (error) {
    console.error(`Error fetching teams for ${leagueName}:`, error);
    res.status(500).send(`Error fetching teams for ${leagueName}`);
  }
});

export default router;

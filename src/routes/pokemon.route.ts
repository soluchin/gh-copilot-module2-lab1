import express from "express";
import { pokemons } from "../data";

const pokemonRoutes = express.Router();

// List all Pokemon
pokemonRoutes.get("/", (req, res) => {
  // Filter by type (e.g., /api/pokemon?type=Fire)
  const type = req.query.type?.toString();
  if (type) {
    // TODO Objective 3. Ask Copilot to explain the difference between find and filter methods
    // TODO Objective 4. Ask Copilot to edit, code below should ignore case when filtering by type
    const filtered = pokemons.filter(p => p.type.includes(type));
    res.json(filtered);
  } else {
    res.json(pokemons);
  }
});

// Get a Pokemon by ID
pokemonRoutes.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // TODO Objective 3. Ask Copilot to explain the difference between find and filter methods
  const found = pokemons.find(p => p.id === id);
  if (found) {
    res.json(found);
  } else {
    res.status(404).json({ message: "Pokémon not found" });
  }
});


// Get pokemon basic stats by pokemon ID
pokemonRoutes.get("/:id/stats", (req, res) => {
  const id = parseInt(req.params.id);
  const found = pokemons.find(p => p.id === id);
  // TODO Objective 2. This should return exception if the pokemon is not found (modify it using copilot)
  res.json(found?.baseStats);
});

// TODO Objective 1. Add another api endpoint to create pokemon, prompt it using copilot

export default pokemonRoutes;
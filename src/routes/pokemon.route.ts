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
    // Melakukan filter Pokemon berdasarkan tipe, mengabaikan huruf besar/kecil (created by copilot)
    const filtered = pokemons.filter(p => 
      p.type.some(t => t.toLowerCase() === type.toLowerCase())
    );
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
  // Mengecek apakah Pokemon ditemukan, jika tidak, kembalikan error 404 (created by copilot)
  if (!found) {
    res.status(404).json({ message: "Pokémon tidak ditemukan" });
  }
  res.json(found?.baseStats);
});

// TODO Objective 1. Add another api endpoint to create pokemon, prompt it using copilot
/**
 * Endpoint untuk membuat Pokemon baru (created by copilot)
 */
pokemonRoutes.post("/", (req, res) => {
  // Mengambil data Pokemon baru dari body request (created by copilot)
  const newPokemon = req.body;
  console.log(newPokemon);
  // Menambahkan id unik untuk Pokemon baru (created by copilot)
  newPokemon.id = pokemons.length > 0 ? pokemons[pokemons.length - 1].id + 1 : 1;
  // Menambahkan Pokemon baru ke array pokemons (created by copilot)
  pokemons.push(newPokemon);
  // Mengembalikan Pokemon yang baru dibuat sebagai response (created by copilot)
  res.status(201).json(newPokemon);
});

export default pokemonRoutes;
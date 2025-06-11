import express from "express";
import pokemonRoutes from "./routes/pokemon.routes";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Pokémon!");
});

app.use("/api/pokemon", pokemonRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  description: string;
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
  // TODO Objective 5. Add another property to the Pokemon interface, prompt it using copilot
  region?: string; // Optional property to indicate the region of the Pokemon
  // more properties
  evolution?: string[]; // Properti opsional untuk menyimpan evolusi Pokemon, created by copilot
  abilities?: string[]; // Properti opsional untuk menyimpan kemampuan khusus Pokemon, created by copilot
  isLegendary?: boolean; // Properti opsional untuk menandai apakah Pokemon ini legendary, created by copilot
}

// TODO Objective 6. Ask Copilot to adjust the pokemons array to include the new property in each Pokemon object
export const pokemons: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    description: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
    baseStats: {
      hp: 45,
      attack: 49,
      defense: 49,
      speed: 45
    },
    // Properti baru ditambahkan ke Bulbasaur (created by copilot)
    region: "Kanto",
    evolution: ["Bulbasaur", "Ivysaur", "Venusaur"],
    abilities: ["Overgrow", "Chlorophyll"],
    isLegendary: false
  },
  {
    id: 2,
    name: "Charmander",
    type: ["Fire"],
    description: "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
    baseStats: {
      hp: 39,
      attack: 52,
      defense: 43,
      speed: 65
    },
    // Properti baru ditambahkan ke Charmander (created by copilot)
    region: "Kanto",
    evolution: ["Charmander", "Charmeleon", "Charizard"],
    abilities: ["Blaze", "Solar Power"],
    isLegendary: false
  },
  {
    id: 3,
    name: "Squirtle",
    type: ["Water"],
    description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    baseStats: {
      hp: 44,
      attack: 48,
      defense: 65,
      speed: 43
    },
    // Properti baru ditambahkan ke Squirtle (created by copilot)
    region: "Kanto",
    evolution: ["Squirtle", "Wartortle", "Blastoise"],
    abilities: ["Torrent", "Rain Dish"],
    isLegendary: false
  }
];
import React from 'react';

interface Pokemon {
  name: string;
  url: string;
  results: Pokemon[];
}

async function getPokemonData(): Promise<Pokemon[]> {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data.results;
}

export default async function Home() {
  const pokemons = await getPokemonData();
  console.log("pokemons: ", pokemons);
  
  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {pokemons.map((pokemon, index) => (
        <div key={index} className="p-4 border rounded">
          <h2 className="text-xl font-bold">{pokemon.name}</h2>
        </div>
      ))}
    </div>
  );
}

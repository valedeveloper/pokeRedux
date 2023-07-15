import React from "react";
import Card from "./Card";
function ListCards({ pokemons }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemons?.map((pokemon) => (
        <Card key={pokemon.species.name} name={pokemon.species.name} image={pokemon.sprites.front_shiny} ability={pokemon.abilities.map((ability=>ability.ability.name)).join("-")} />
      ))}
    </section>
  );
}

export default ListCards;

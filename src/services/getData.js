export const getData = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => {
      if (!res.ok) throw new Error("Error en la respuesta");
      return res.json();
    })
    .catch((e) => console.log(e));
};

export const getDetailsPokemon = (pokemon) => {
  return fetch(pokemon.url)
    .then((res) => {
      if (!res.ok) throw new Error("Error en la respuesta");
      return res.json();
    })
    .catch((e) => console.log(e));
};

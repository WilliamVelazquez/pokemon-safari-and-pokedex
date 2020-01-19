export const addPokemons = payload => ({
  type: 'ADD_POKEMONS',
  payload,
});

export const selectPokemon = payload => ({
  type: 'SELECT_POKEMON',
  payload,
});

export const removeSelectedPokemon = payload => ({
  type: 'REMOVE_SELECTED_POKEMON',
  payload,
});

export const releasePokemon = payload => ({
  type: 'RELEASE_POKEMON',
  payload,
});


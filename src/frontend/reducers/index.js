const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMONS':
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload.pokes],
        initialPokemon: action.payload.initial
      };
    case 'ADD_POKEMON':
      return {
        ...state,
        myPokemon: [...state.myPokemon, action.payload],
      };
  }
  return state;
};

export default reducer;

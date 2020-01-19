const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMONS':
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload.pokes],
        initialPokemon: action.payload.initial
      };
    case 'SELECT_POKEMON':
      return {
        ...state,
        selectedPokemon: { ...action.payload }
      };
    case 'REMOVE_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: {}
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

const reducer = (state, action) => {
  switch (action.type){
    case 'ADD_POKEMON':
      return {
        ...state,
        myPokemon: [...state.myPokemon, action.payload]
      }
  }
  return state;
}

export default reducer;
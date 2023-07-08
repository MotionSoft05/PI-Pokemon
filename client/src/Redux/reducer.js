const initialState = {
  allPokemons: [],
  pokemons: [],
  pokemonsById: [],
  postpokemons: [],
  filteredPokemons: [],
  types: [],
  selectedType: "", // Added selectedType property to store the selected type
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default rootReducer;

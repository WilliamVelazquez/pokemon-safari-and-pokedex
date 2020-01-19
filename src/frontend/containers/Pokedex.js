import React from 'react';

import MainLayout from '../components/MainLayout/MainLayout';
import Screen from '../components/Screen/Screen';
// import PokemonCardList from '../components/PokemonCardList/PokemonCardList';
import PokemonCardList from '../containers/PokemonCardList';

const Pokedex = () => {
  return (
    <MainLayout>
      <Screen>
        <PokemonCardList />
      </Screen>
    </MainLayout>
  );
};

export default Pokedex;

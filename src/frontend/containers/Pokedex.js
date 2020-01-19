import React from 'react';
import { connect } from 'react-redux';

import { isEmptyObject } from 'Utils/functions';
import { removeSelectedPokemon } from '../actions';

import MainLayout from '../components/MainLayout/MainLayout';
import Screen from '../components/Screen/Screen';
import PokemonInfoCard from '../components/PokemonInfoCard/PokemonInfoCard';
import PokemonCardList from '../containers/PokemonCardList';

const Pokedex = (props) => {
  const { selectedPokemon, removeSelectedPokemon } = props;
  return (
    <MainLayout>
      <Screen>
        {
          !isEmptyObject(selectedPokemon) &&
          <PokemonInfoCard pokemon={selectedPokemon} handleClose={removeSelectedPokemon} />
        }
        <PokemonCardList modalOpened={!isEmptyObject(selectedPokemon)} />
      </Screen>
    </MainLayout>
  );
};

const mapStateToProps = state => {
	const { selectedPokemon } = state;
  return {
		selectedPokemon,
  };
};

const mapDispatchToProps = {
	removeSelectedPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);

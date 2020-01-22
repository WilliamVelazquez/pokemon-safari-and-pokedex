import React from 'react';
import { connect } from 'react-redux';
import { releasePokemon } from '../actions';

import MainLayout from '../components/MainLayout/MainLayout';
import UnderConstruction from '../components/UnderConstruction/UnderConstruction';
import EllipsisLoader from '../components/EllipsisLoader/EllipsisLoader';

const PC = ({ myPokemons }) => {
  return (
    <MainLayout backgroundColor='white'>
      <UnderConstruction />
    </MainLayout>
  );
  // return myPokemons.length === 0 ?
  //   (
  //     <MainLayout backgroundColor='gray'>
  //       <div style={{ display: 'flex', justifyContent: 'center' }}><EllipsisLoader /></div>
  //     </MainLayout>
  //   ) :
  //   (
  //     <MainLayout backgroundColor='gray'>
  //       <div style={{ display: 'flex', justifyContent: 'center' }}><EllipsisLoader /></div>
  //     </MainLayout>
  //   );
};

const mapStateToProps = state => {
  return {
    myPokemons: state.myPokemons,
  };
};

const mapDispatchToProps = {
  releasePokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(PC);

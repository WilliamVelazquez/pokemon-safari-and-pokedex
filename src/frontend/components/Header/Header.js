import React from 'react';
import { useTranslation } from 'react-i18next';

import CircleLed from '../CircleLed/CircleLed';
import HamburguerIcon from '../HamburguerIcon/HamburguerIcon';

// import PokemonLogo from '../../assets/images/logo.png';
import PokeballNav from '../../assets/images/pokeball-nav.png';

import './styles.css';

const Header = () => {
  const { t } = useTranslation();
  return(
    <>
      <header className='header'>
        <div className='header__logo_container'>
          {/* <img className='header__img' src={PokemonLogo} alt='Pokémon Logo' />
          <span className='header__title'>Pokédex</span> */}
        </div>
        <div className='header__menu'>
          <div className='header__menu--profile'>
            <img src={PokeballNav} alt='Nav Icon' />
            <div style={{width: 40}}><HamburguerIcon /></div>
          </div>
          <ul>
            <li><a href='/'>{t('menu.my_pc')}</a></li>
            <li><a href='/'>Safari</a></li>
            <li><a href='/'>Pokédex</a></li>
          </ul>
        </div>
      </header>
      <CircleLed color='blue' size='big' main />
      <div className='header__leds'>
        <CircleLed color='red' size='small' />
        <CircleLed color='yellow' size='small' />
        <CircleLed color='green' size='small' />
      </div>
    </>
  );
}


export default Header;

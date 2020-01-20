import React from 'react';
import { useTranslation } from 'react-i18next';

import './styles.css';

const PokemonCard = (props) => {
	const { t } = useTranslation();

	return (
    <div className='error-message'>{t('pokemonNotFound')}</div>
  );
};

export default PokemonCard;

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './styles.css';

const PokemonCard = (props) => {
	const { handleSearch } = props;
	const { t } = useTranslation();
	const [query, setQuery] = useState('');

	const handleChangeQuery = event => {
		setQuery(event.target.value);
	}

	return (
		<div className='searchBox__container'>
			<form onSubmit={handleSearch ? (event) => { event.preventDefault(); handleSearch(query)} : null} className='searchBox__form'>
				<div className='searchBox__form__table'>
					<div className='searchBox__box'>
						<input
							type='text'
							value={query}
							onChange={handleChangeQuery}
							placeholder={t('searchPlaceHolder')}
						/>
					</div>
					<div className='searchBox__box btn__container'>
						<button type='submit'> 
							<div className='btn__image'></div>
							<span className='btn__complement'></span>
						</button>
					</div>
				</div>
			</form>
		</div>
  );
};

export default PokemonCard;

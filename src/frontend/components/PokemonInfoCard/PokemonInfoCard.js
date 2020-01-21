import React from 'react';
import { useTranslation } from 'react-i18next';
import { isEmptyObject } from 'Utils/functions';
import { TYPES_COLORS } from 'Constants/app';

import PokeballNav from '../../assets/images/pokeball-nav.png';

import './styles.css';

const PokemonInfoCard = (props) => {
	const { t } = useTranslation();
	const { pokemon, handleClose } = props;
	// console.log(pokemon);
  return (
    <div className='infoCard__container animation'>
			<div className='infoCard__sprite'>
				{ 
					isEmptyObject(pokemon.baseData.sprites.front_default) ?
					<img className='rotating' src={PokeballNav} alt={`${pokemon.name} image`} />
					:
					<img src={pokemon.baseData.sprites.front_default} alt={`${pokemon.name} image`} />
				}
			</div>
			<div className='infoCard__data'>
				<div className='infoCard__data__title'>
					<h2>
						{ 
							pokemon.names.find((options) => 
							options.language.name === (localStorage.getItem('language') || 'en')
							).name
						}
					</h2>
					<h3>N.° {pokemon.id.toString().length>2?'':pokemon.id.toString().length>1?'0':'00'}{pokemon.id}</h3>
				</div>
				<div className='infoCard__data__types'>
					{
						pokemon.baseData.types.map((type) => (
							<span key={type.slot} className='infoCard__data__types--name' style={{backgroundColor: `#${TYPES_COLORS[type.type.name]}`}}>
								{type.type.name}
							</span>
						))
					}
				</div>
				<div className='infoCard__data__description'>
					{
						<span>
							{ 
								pokemon.flavor_text_entries.find((flavor) => 
									flavor.language.name === (localStorage.getItem('language') || 'en')
								).flavor_text
							}
						</span>
					}
				</div>
				<div className='infoCard__data__measurement'>
					<div>
						<span>{t('weight')}:</span>
						<span>
							{pokemon.baseData.weight}
						</span>
					</div>
					<div>
						<span>{t('height')}:</span>
						<span>
						{pokemon.baseData.height}
						</span>
					</div>
					<div className='more-data'>
						{/* <span>{t('moreInfo')}:</span> */}
						<span>
							{ 
								pokemon.genera.find((genera) => 
									genera.language.name === (localStorage.getItem('language') || 'en')
								).genus
							}
						</span>
					</div>
				</div>
			</div>
			<div className='infoCard__close-btn' onClick={handleClose}>x</div>
		</div>
  );
};

export default PokemonInfoCard;

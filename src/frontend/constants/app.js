export const API_BASE_URL = 'https://pokemon-simple-api.now.sh/api/pokemons/';
export const INITIAL_POKEMON_NUMBER = 1;
export const LAST_POKEMON_NUMBER = 151;
export const POKEMON_QUANTITY_TO_LOAD = 10;

export const TYPES_COLORS = {
	bug: 'B1C12E',
	dark: '4F3A2D',
	dragon: '755EDF',
	electric: 'FCBC17',
	fairy: 'F4B1F4',
	fighting: 'BB5B00',
	// fighting: '823551D',
	fire: 'E73B0C',
	flying: 'A3B3F7',
	ghost: '6060B2',
	grass: '74C236',
	ground: 'D3B357',
	ice: 'A3E7FD',
	normal: 'C8C4BC',
	poison: '934594',
	psychic: 'ED4882',
	rock: 'B9A156',
	steel: 'B5B5C3',
	water: '3295F6',
};

export const REQUEST_CONFIG = {
	method: ('GET'),
	headers: {
		Accept: ('application/json'),
		'Content-Type': ('application/json'),
		'Access-Control-Allow-Origin:': '*'
	}
};

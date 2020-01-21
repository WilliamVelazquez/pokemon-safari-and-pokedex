import Pokedex from '../containers/Pokedex';
import PC from '../containers/PC';
import NotFound from '../containers/NotFound';

const serverRoutes = [
  {
    path: '/',
    component: Pokedex,
    exact: true,
  },
  {
    path: '/pc',
    component: PC,
    exact: true,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default serverRoutes;

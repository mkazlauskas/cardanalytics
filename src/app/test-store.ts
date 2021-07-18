import { createStore } from 'redux';
import { State } from './reducers';
import { GeneralStats } from './types';

export const generalStats: GeneralStats = {
  blocks: 5995095,
  transactions: 9787836,
  stakePools: 2877,
  adaStake: 23.24*1000000000,
  assets: 43751,
  era: 'Shelley',
  epoch: 278,
  slot: 300948,
}; 

const store = createStore(
  (): State => ({
    generalStats
  }),
);

export default store;

// Simulating load time.
setTimeout(() => {
	document.getElementById('preloader')?.remove();
}, 1000);
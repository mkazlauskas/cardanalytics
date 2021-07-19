import { createStore } from 'redux';
import { State } from './reducers';
import { CardanoStats } from './types';

export const testCardanoData: CardanoStats = {
  blocks: 5995095,
  transactions: 9787836,
  assets: 43751,
  epoch: 278,
  slot: 300948,
}; 

const store = createStore(
  (): State => ({
    cardanoData: testCardanoData
  }),
);

export default store;

// Simulating load time.
setTimeout(() => {
	document.getElementById('preloader')?.remove();
}, 1000);
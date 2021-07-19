import { createStore } from 'redux';
import { State } from './reducers';
import { CardanoStats } from './types';

export const mockCardanoData: CardanoStats = {
  blocks: 5995095,
  transactions: 9787836,
  assets: 43751,
  epoch: 278,
  slot: 300948,
}; 

const store = createStore(
  (): State => ({
    cardanoData: mockCardanoData
  }),
);

export default store;

// Simulating load time.
// Not loading epics, so have to remove the preloader here.
// It is a race condition with loading app/, but 1s should be enough.
setTimeout(() => {
	document.getElementById('preloader')?.remove();
}, 1000);
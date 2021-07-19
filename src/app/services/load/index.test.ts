import services from '.';
import { CardanoStats } from '../../types';

describe('services', () => {
  describe('load', () => {
    it('Fetches and remaps data', async () => {
      expect(await services.load()).toEqual({
        blocks: 5998809,
        transactions: 9807838,
        assets: 334447,
        epoch: 278,
        slot: 35109155,
        currentFees: {
          min: 160000,
          max: 260000,
          average: 200000,
        },
      } as CardanoStats);
    });
  });
});
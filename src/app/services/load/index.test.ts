import services from '.';

describe('services', () => {
  describe('load', () => {
    it('Fetches and remaps data', async () => {
      expect(await services.load()).toEqual({
        blocks: 5998809,
        transactions: 9807838,
        assets: 334447,
        epoch: 278,
        slot: 35109155,
      });
    });
  });
});
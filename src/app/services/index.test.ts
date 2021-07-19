import { services } from '.';

jest.mock('graphql-request', () => ({
  GraphQLClient: jest.fn().mockImplementation(() => ({
    request: jest.fn().mockReturnValue(Promise.resolve({
      'transactions_aggregate': {
        'aggregate': {
          'count': '9807838'
        }
      },
      'cardano': {
        'tip': {
          'epochNo': 278,
          'number': 5998809,
          'slotNo': 35109155
        }
      },
      'assets_aggregate': {
        'aggregate': {
          'count': '334447'
        }
      }
    })),
  })),
}));

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
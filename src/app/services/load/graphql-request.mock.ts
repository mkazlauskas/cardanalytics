export class GraphQLClient {
  // eslint-disable-next-line class-methods-use-this
  request() { 
    return Promise.resolve({
      'transactions_aggregate': {
        'aggregate': {
          'count': '9807838'
        }
      },
      'cardano': {
        'tip': {
          'epochNo': 278,
          'number': 5998809,
          'slotNo': 35109155,
          'transactions': [
            {
              'fee': 260000
            }
          ],
          'previousBlock': {
            'transactions': [
              {
                'fee': 160000
              },
              {
                'fee': 180000
              },
            ]
          }
        }
      },
      'assets_aggregate': {
        'aggregate': {
          'count': '334447'
        }
      }
    });
  }
}

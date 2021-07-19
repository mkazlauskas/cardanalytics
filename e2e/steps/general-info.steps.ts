import { loadFeature, defineFeature } from 'jest-cucumber';
import { expectPageContainsAll, givenIOpenCardanalytics, whenItFinishesToLoadData } from './helpers';

defineFeature(loadFeature('e2e/features/general-info.feature'), test => {
  test('Dashboard shows general blockchain information', ({ given, when, then }) => {
    givenIOpenCardanalytics(given);

    whenItFinishesToLoadData(when);

    then('I should see totals of blocks, transactions, assets, as well as current era, epoch and slot', async () => {
      await expectPageContainsAll([
        'Block: 5,998,809',
        'Total transactions: 9,807,838',
        'Total assets: 334,447',
        'Epoch: 278',
        'Slot: 35,109,155',
      ]);
    });
  }, JEST_TIMEOUT);
});
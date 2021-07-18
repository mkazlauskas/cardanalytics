import { loadFeature, defineFeature } from 'jest-cucumber';
import { givenIOpenCardanalytics, whenItFinishesToLoadData } from './helpers';

defineFeature(loadFeature('e2e/features/general-stats.feature'), test => {
  test('Dashboard shows general blockchain stats', ({ given, when, then }) => {
    givenIOpenCardanalytics(given);

    whenItFinishesToLoadData(when);

    then('I should see totals of blocks, transactions, stake pools, ADA stake amount, assets, as well as current era, epoch and slot', async () => {
      const text = await page.evaluate(() => document.body.textContent);
      [
        'Total blocks: 5,995,095',
        'Total transactions: 9,787,836',
        'Total stake pools: 2,877',
        'Total ADA stake: 23,240,000,000',
        'Total assets: 43,751',
        'Era: Shelley',
        'Epoch: 278',
        'Slot: 300,948',
      ].forEach(stat => expect(text).toContain(stat));
    });
  }, JEST_TIMEOUT);
});
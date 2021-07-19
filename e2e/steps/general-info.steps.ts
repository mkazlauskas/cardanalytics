import { loadFeature, defineFeature } from 'jest-cucumber';
import { givenIOpenCardanalytics, whenItFinishesToLoadData } from './helpers';

defineFeature(loadFeature('e2e/features/general-info.feature'), test => {
  test('Dashboard shows general blockchain information', ({ given, when, then }) => {
    givenIOpenCardanalytics(given);

    whenItFinishesToLoadData(when);

    then('I should see totals of blocks, transactions, assets, as well as current era, epoch and slot', async () => {
      const text = await page.evaluate(() => document.body.textContent);
      [
        'Block: 5,995,095',
        'Total transactions: 9,787,836',
        'Total assets: 43,751',
        'Epoch: 278',
        'Slot: 300,948',
      ].forEach(stat => expect(text).toContain(stat));
    });
  }, JEST_TIMEOUT);
});
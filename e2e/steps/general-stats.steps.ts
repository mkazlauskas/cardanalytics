import { loadFeature, defineFeature } from 'jest-cucumber';
import { givenIOpenCardanalytics, whenItFinishesToLoadData } from './helpers';

defineFeature(loadFeature('e2e/features/general-stats.feature'), test => {
  test('Dashboard shows # of blocks, # of transactions, current era, current epoch and current slot', ({ given, when, then }) => {
    givenIOpenCardanalytics(given);

    whenItFinishesToLoadData(when);

    then('I should see # of blocks, # of transactions, current era, current epoch and current slot', async () => {
      // expect(true).toBe(false);
    });
  }, JEST_TIMEOUT);
});
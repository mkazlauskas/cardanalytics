import { loadFeature, defineFeature } from 'jest-cucumber';
import { expectPageContainsAll, givenIOpenCardanalytics, whenItFinishesToLoadData } from './helpers';

defineFeature(loadFeature('e2e/features/current-fees.feature'), test => {
  test('Dashboard shows current Cardano fees aggregate', ({ given, when, then }) => {
    givenIOpenCardanalytics(given);

    whenItFinishesToLoadData(when);

    then('I should see current fees aggregate: max, min and average amount', async () => {
      await expectPageContainsAll([
        'Min Fee: 0.16 ADA',
        'Max Fee: 0.26 ADA',
        'Average Fee: 0.20 ADA',
      ]);
    });
  }, JEST_TIMEOUT);
});
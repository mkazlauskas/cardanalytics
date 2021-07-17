import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('e2e/features/first/first.feature');

defineFeature(feature, test => {
  test('Entering a correct password', ({ given, when, then }) => {
    given('I have previously created a password', async () => {
      await page.goto(SERVER_URL, { waitUntil: 'domcontentloaded' });
    });

    when('I enter my password correctly', () => {
      expect(true).toBe(false);
    });

    then('I should be granted access', async () => {
      await expect(page).toMatch('Edit');
    });
  });
});
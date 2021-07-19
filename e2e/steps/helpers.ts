import { DefineStepFunction } from 'jest-cucumber';

export const givenIOpenCardanalytics = (given: DefineStepFunction) => given('I open cardanalytics', async () => {
  await page.goto(SERVER_URL, { waitUntil: 'domcontentloaded' });
});

export const whenItFinishesToLoadData = (when: DefineStepFunction) => when('it finishes to load data', async () => {
  await page.waitForFunction(() => !document.getElementById('preloader'));
});

export const expectPageContainsAll = async (texts: string[]) => {
  const text = await page.evaluate(() => document.body.textContent);
  texts.forEach(stat => expect(text).toContain(stat));
};
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cardanoData } from '.';
import { loadCardanoData } from '../actions';

describe('reducers', () => {
  describe('CardanoStats', () => {
    const someStats: any = 'doesnt-matter';
    it('sets state to action payload on loadCardanoData action', () => {
      expect(cardanoData(null, loadCardanoData(someStats))).toBe(someStats);
    });
    it('returns current state on other actions', () => {
      expect(cardanoData(someStats, { type: 'OTHER_ACTION' } as any)).toBe(someStats);
    });
  });
});
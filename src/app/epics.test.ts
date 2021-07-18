/* eslint-disable @typescript-eslint/no-explicit-any */
import { TestScheduler } from 'rxjs/testing';
import { getType } from 'typesafe-actions';
import { loadGeneralStats } from './actions';
import { removePreloader$ } from './epics';

describe('epics', () => {
  describe('removePreloader$', () => {
    it('removes preloader after all load actions are dispatched', () => {
      const preloader = document.createElement('div');
      preloader.id = 'preloader';
      document.body.appendChild(preloader);

      const scheduler = new TestScheduler(assertDeepEqual);
      scheduler.run((helpers) => {
        const source$ = helpers.hot('--(a|)', { a: { type: getType(loadGeneralStats) } });
        const target$ = removePreloader$(source$ as any, {} as any, {} as any);
        helpers.expectObservable(target$).toBe('--|', {});
        helpers.flush();
        expect(document.getElementById('preloader')).toBeFalsy();
      });
    });
  });
});

const assertDeepEqual = (actual: unknown, expected: unknown) => {
  expect(actual).toEqual(expected);
};
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TestScheduler } from 'rxjs/testing';
import { getType } from 'typesafe-actions';
import { loadCardanoData } from '../../actions';
import { removePreloader$ } from '.';
import { assertDeepEqual } from '../test-helpers';

describe('epics', () => {
  describe('removePreloader$', () => {
    it('removes preloader after all load actions are dispatched', () => {
      // Create preloader element similar to public/index.html
      const preloader = document.createElement('div');
      preloader.id = 'preloader';
      document.body.appendChild(preloader);

      const scheduler = new TestScheduler(assertDeepEqual);
      scheduler.run((helpers) => {
        // action$ parameter emits a single loadCardanoData after a few ticks
        const action$ = helpers.hot('--a--a', { a: { type: getType(loadCardanoData) } });
        const target$ = removePreloader$(action$ as any, {} as any, {} as any);
        // Assert the epic doesn't emit anything and completes after first emission
        helpers.expectObservable(target$).toBe('--|', {});
        helpers.flush();
        // Assert preloader element is removed
        expect(document.getElementById('preloader')).toBeFalsy();
      });
    });
  });
});
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TestScheduler } from 'rxjs/testing';
import { getType } from 'typesafe-actions';
import { loadCardanoData } from '../actions';
import { updateData$, removePreloader$, FETCH_INTERVAL } from '.';

describe('epics', () => {
  let scheduler: TestScheduler;
  beforeEach(() => {
    scheduler = new TestScheduler(assertDeepEqual);
  });
  describe('updateData$', () => {
    it('dispatches loadCardanoData every 10s and ignores service errors', () => {
      scheduler.run((helpers) => {
        const load$ = (() => {
          let call = 0;
          return jest.fn().mockImplementation(() => {
            const emit = call++ === 1 ? '--#' : '--a|'; // error only on 2nd call
            return helpers.cold(emit, { a: 'doesnt matter' });
          });
        })();
        const unsubscribe = `--------- ${FETCH_INTERVAL*3}ms !`;
        const target$ = updateData$({} as any, {} as any, { load$ } as any);
        const expected = `--a ${FETCH_INTERVAL*2-1}ms a ${FETCH_INTERVAL-1}ms a`;
        helpers.expectObservable(target$, unsubscribe).toBe(expected, {
          a: loadCardanoData('doesnt matter' as any),
        });
        helpers.flush();
        expect(load$).toBeCalledTimes(4);
      });
    });
    it('throttles requests if server is slower than fetch interval', () => {
      scheduler.run((helpers) => {
        const load$ = jest.fn().mockReturnValue(helpers.cold(`${FETCH_INTERVAL*1.5}ms a|`, { a: 'doesnt matter' }));
        const unsubscribe = `--------- ${FETCH_INTERVAL*4}ms !`;
        const target$ = updateData$({} as any, {} as any, { load$ } as any);
        // 2nd load$ is not called, because the 1st one hasn't finished yet
        // 2nd load$ emit would be at FETCH_INTERVAL+FETCH_INTERVAL*1.5
        const expected = `${FETCH_INTERVAL*1.5}ms a ${FETCH_INTERVAL*2-1}ms a`;
        helpers.expectObservable(target$, unsubscribe).toBe(expected, {
          a: loadCardanoData('doesnt matter' as any),
        });
        helpers.flush();
        expect(load$).toBeCalledTimes(3);
      });
    });
  });
  describe('removePreloader$', () => {
    it('removes preloader after all load actions are dispatched', () => {
      const preloader = document.createElement('div');
      preloader.id = 'preloader';
      document.body.appendChild(preloader);

      scheduler.run((helpers) => {
        const source$ = helpers.hot('--(a|)', { a: { type: getType(loadCardanoData) } });
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

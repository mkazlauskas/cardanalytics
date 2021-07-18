import { Epic } from 'redux-observable';
import { combineLatest, EMPTY, filter, mergeMap, of, take, tap } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import { Action, loadGeneralStats } from './actions';
import { State } from './reducers';
import { Services } from './services';
import { generalStats } from './test-store';

type CardanalyticsEpic = Epic<Action, Action, State, Services>;

// TODO: replace with loading actual stats, not test stats
const load$: CardanalyticsEpic = () => of(loadGeneralStats(generalStats));

export const removePreloader$: CardanalyticsEpic = (action$) => combineLatest([
  action$.pipe(filter(isActionOf(loadGeneralStats)))
]).pipe(
  take(1),
  tap(() => document.getElementById('preloader')?.remove()),
  mergeMap(() => EMPTY)
);

export default [load$];
import { warn } from 'loglevel';
import { Epic } from 'redux-observable';
import { catchError, combineLatest, EMPTY, exhaustMap, filter, map, mergeMap, take, tap, timer } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import { Action, loadCardanoData } from '../actions';
import { State } from '../reducers';
import { Services } from '../services';

type CardanalyticsEpic = Epic<Action, Action, State, Services>;
export const FETCH_INTERVAL = 10000;

export const updateData$: CardanalyticsEpic = (_$, __$, services) => 
  timer(0, FETCH_INTERVAL).pipe(exhaustMap(() =>
    services.load$().pipe(
      map((data) => loadCardanoData(data)),
      catchError((e) => {
        warn(`Failed to fetch data, retrying in ${FETCH_INTERVAL}ms`, e);
        return EMPTY;
      }),
    )
  ));

export const removePreloader$: CardanalyticsEpic = (action$) => combineLatest([
  action$.pipe(filter(isActionOf(loadCardanoData)))
]).pipe(
  take(1),
  tap(() => document.getElementById('preloader')?.remove()),
  mergeMap(() => EMPTY)
);

export default [updateData$, removePreloader$];
import { combineLatest, EMPTY, filter, mergeMap, take, tap } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import { CardanalyticsEpic } from '../types';
import { loadCardanoData } from '../../actions';

// Remove preloader animation when cardano data is first loaded. 
export const removePreloader$: CardanalyticsEpic = (action$) => combineLatest([
  action$.pipe(filter(isActionOf(loadCardanoData)))
]).pipe(
  take(1),
  tap(() => document.getElementById('preloader')?.remove()),
  mergeMap(() => EMPTY)
);
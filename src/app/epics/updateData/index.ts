import { warn } from 'loglevel';
import { catchError, EMPTY, exhaustMap, map, timer } from 'rxjs';
import { loadCardanoData } from '../../actions';
import { CardanalyticsEpic } from '../types';

export const FETCH_INTERVAL = 10000;

// Load data on page load and every FETCH_INTERVAL ms.
// Throttle requests if server is too slow to respond.
export const updateData$: CardanalyticsEpic = (_$, __$, services) => 
  timer(0, FETCH_INTERVAL).pipe(exhaustMap(() =>
    services.load$().pipe(
      map((data) => loadCardanoData(data)),
      catchError((e) => {
        warn(`Failed to fetch data, retrying in ${FETCH_INTERVAL}ms`, e);
        // Ignore the errors. Will retry in FETCH_INTERVAL.
        return EMPTY;
      }),
    )
  ));


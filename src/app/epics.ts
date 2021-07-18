import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { Action, loadGeneralStats } from './actions';
import { State } from './reducers';
import { Services } from './services';
import { generalStats } from './test-store';

type CardanalyticsEpic = Epic<Action, Action, State, Services>;

// TODO: replace with loading actual stats, not test stats
const load$: CardanalyticsEpic = () => of(loadGeneralStats(generalStats));

export default [load$];
import { Epic } from 'redux-observable';
import { Action } from '../actions';
import { State } from '../reducers';
import { Services } from '../services';

export type CardanalyticsEpic = Epic<Action, Action, State, Services>;


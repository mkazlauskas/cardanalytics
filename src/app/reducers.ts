import { combineReducers } from 'redux';
import { getType, StateType } from 'typesafe-actions';
import { Action, loadGeneralStats } from './actions';
import { GeneralStats } from './types';

const generalStats = (state: GeneralStats | null = null, action: Action) => {
  if (action.type === getType(loadGeneralStats)) {
    return action.payload;
  }
  return state;
};

export const rootReducer = combineReducers({ generalStats });

export type State = StateType<typeof rootReducer>;
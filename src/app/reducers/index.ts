import { combineReducers } from 'redux';
import { getType, StateType } from 'typesafe-actions';
import { Action, loadCardanoData } from '../actions';
import { CardanoStats } from '../types';

export const cardanoData = (state: CardanoStats | null = null, action: Action) => {
  if (action.type === getType(loadCardanoData)) {
    return action.payload;
  }
  return state;
};

export const rootReducer = combineReducers({ cardanoData });

export type State = StateType<typeof rootReducer>;
import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import cardanoData from './cardanoData';

export const rootReducer = combineReducers({ cardanoData });

export type State = StateType<typeof rootReducer>;
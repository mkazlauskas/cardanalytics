import { ActionType, createAction } from 'typesafe-actions';
import { GeneralStats } from './types';

export const loadGeneralStats = createAction('LOAD_GENERAL_STATS')<GeneralStats>();

export const actions = { loadGeneralStats };
export type Action = ActionType<typeof actions>;
import { ActionType, createAction } from 'typesafe-actions';
import { CardanoStats } from './types';

export const loadCardanoData = createAction('LOAD_CARDANO_DATA')<CardanoStats>();

export const actions = { loadCardanoData };
export type Action = ActionType<typeof actions>;
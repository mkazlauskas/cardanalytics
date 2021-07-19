import { getType } from 'typesafe-actions';
import { Action, loadCardanoData } from '../../actions';
import { CardanoStats } from '../../types';

export default (state: CardanoStats | null = null, action: Action) => {
  if (action.type === getType(loadCardanoData)) {
    return action.payload;
  }
  return state;
};
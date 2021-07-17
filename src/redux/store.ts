import { createStore, combineReducers } from 'redux';

const store = createStore(
  combineReducers({
    null: (state = null) => state,
  }),
);

export default store;

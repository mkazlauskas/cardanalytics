import { applyMiddleware, compose, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { Action } from './actions';
import epics from './epics';
import { rootReducer, State } from './reducers';
import { services, Services } from './services';

// Setup for Redux DevTools extension
// eslint-disable-next-line @typescript-eslint/naming-convention
declare let __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: <R>(a: R) => R;
const composeEnhancers =
  typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined' ? __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

// Setup redux-observable middleware
const epicMiddleware = createEpicMiddleware<Action, Action, State, Services>({ dependencies: services });
const middleware = composeEnhancers(applyMiddleware(epicMiddleware));

const store = createStore(rootReducer, middleware);

epicMiddleware.run(combineEpics(...epics));

export default store;

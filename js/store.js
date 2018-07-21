import { createStore } from 'redux';
import reducer from './reducers';

// If devToolExtension is not present, return en identity function
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

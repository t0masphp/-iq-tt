import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, thunk)
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer)
    });
  }

  return store;
}
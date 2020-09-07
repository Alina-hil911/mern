import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import FilmReducer from './Films/FilmReducer';
import { sagaWatcher } from './sagas';

const saga = createSagaMiddleware();

export const store = createStore(
    FilmReducer,
    compose(
      applyMiddleware(saga),
    )
  );

saga.run(sagaWatcher);
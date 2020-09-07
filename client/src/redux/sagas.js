import { takeEvery } from "redux-saga/effects";

import {FETCH_ALL_FILMS_START, POST_FILM_START, DELETE_FILM_START, GET_SORTED_FILMS_START, GET_FILMS_BY_TITLE_START, GET_FILMS_BY_ACTOR_START} from './Films/types';
import {fetchAllFilmsSagaWorker, getFilmsByTitleSagaWorker, postFilmSagaWorker, deleteFilmSagaWorker, getSortedFilmsSagaWorker, getFilmsByActorSagaWorker} from './Films/saga';

export function* sagaWatcher () {
    yield takeEvery(FETCH_ALL_FILMS_START, fetchAllFilmsSagaWorker);
    yield takeEvery(POST_FILM_START, postFilmSagaWorker);
    yield takeEvery(DELETE_FILM_START, deleteFilmSagaWorker)
    yield takeEvery(GET_SORTED_FILMS_START, getSortedFilmsSagaWorker);
    yield takeEvery(GET_FILMS_BY_TITLE_START, getFilmsByTitleSagaWorker);
    yield takeEvery(GET_FILMS_BY_ACTOR_START, getFilmsByActorSagaWorker)
}
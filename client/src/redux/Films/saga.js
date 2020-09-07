import { put, call } from 'redux-saga/effects';

import { fetchAllFilms, postFilm, deleteFilm, getSortedFilms, getFilmsByTitle, getFilmsByActor } from '../services/films';
import { fetchAllFilmsSuccess, getSortedFilmsSuccess, getSortedFilmsFailure, fetchAllFilmsFailure, postFilmSuccess, postFilmFailure, deleteFilmFailure, deleteFilmSuccess, getFilmsByTitleSuccess, getFilmsByActorSuccess } from './actions'

export function* fetchAllFilmsSagaWorker() {
    try {
        const data = yield call(fetchAllFilms)
        console.log('data from saga')
        yield put(fetchAllFilmsSuccess(data))
    }
    catch (e) {
        console.log('error', e.message);
        yield put(fetchAllFilmsFailure(e.message))
    }
};

export function* postFilmSagaWorker(action) {
    try {
        yield console.log(action.payload, 'action payload from saga');
        const data = yield call(postFilm, action.payload);
        console.log('data from saga', data);
        yield put(postFilmSuccess(data))

    }
    catch (e) {
        console.log(e.message);
        yield put(postFilmFailure(e.message))
    }
}


export function* deleteFilmSagaWorker(action) {
    console.log("DELETE FROM SAGA", action.payload)
    try {
        const status = yield call(deleteFilm, action.payload);
        if (status === 200) {
            yield put(deleteFilmSuccess(action.payload))
        }
        else {
            yield put(deleteFilmFailure('Something went wrong'))
        }
    }
    catch (e) {
        yield put(deleteFilmFailure(e.message))
    }
}

export function* getSortedFilmsSagaWorker() {
    console.log('sorting saga is working')
    try {
        const data = yield call(getSortedFilms)
        console.log('data from saga', data)
        yield put(getSortedFilmsSuccess(data))
    }
    catch (e) {
        console.log('error', e.message);
        yield put(getSortedFilmsFailure(e.message))
    }
};

export function* getFilmsByTitleSagaWorker(action) {
    try {
        const data = yield call(getFilmsByTitle, action.payload)
        console.log('data from saga')
        yield put(getFilmsByTitleSuccess(data))
    }
    catch (e) {
        console.log('error', e.message);
        yield put(getFilmsByTitleSuccess(e.message))
    }
};

export function* getFilmsByActorSagaWorker(action) {
    console.log('wokrs')
    try {
        const data = yield call(getFilmsByActor, action.payload)
        console.log('data from saga', 'get films by actor')
        yield put(getFilmsByActorSuccess(data))
    }
    catch (e) {
        console.log('error', e.message);
        yield put(getFilmsByActorSuccess(e.message))
    }
};
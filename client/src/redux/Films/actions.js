import {
    GET_SORTED_FILMS_START, GET_SORTED_FILMS_SUCCESS, GET_SORTED_FILMS_FAILURE,
    FETCH_ALL_FILMS_START, DELETE_FILM_START, DELETE_FILM_FAILURE, DELETE_FILM_SUCCESS,
    FETCH_ALL_FILMS_SUCCESS, FETCH_ALL_FILMS_FAILURE, POST_FILM_START, POST_FILM_SUCCESS,
    POST_FILM_FAILURE, GET_FILMS_BY_TITLE_FAILURE, GET_FILMS_BY_TITLE_START, GET_FILMS_BY_TITLE_SUCCESS,
    GET_FILMS_BY_ACTOR_FAILURE, GET_FILMS_BY_ACTOR_START, GET_FILMS_BY_ACTOR_SUCCESS,
    POST_FILE_START, POST_FIlE_FAILURE, POST_FILE_SUCCESS
} from './types';

export const fetchAllFilmsStart = () => ({
    type: FETCH_ALL_FILMS_START
});

export const fetchAllFilmsSuccess = payload => ({
    type: FETCH_ALL_FILMS_SUCCESS,
    payload
});

export const fetchAllFilmsFailure = payload => ({
    type: FETCH_ALL_FILMS_FAILURE,
    payload
})

export const postFilmStart = (payload) => ({
    type: POST_FILM_START,
    payload
});

export const postFilmSuccess = (payload) => ({
    type: POST_FILM_SUCCESS,
    payload
});

export const postFilmFailure = (payload) => ({
    type: POST_FILM_FAILURE,
    payload
})

export const deleteFilmStart = (payload) => ({
    type: DELETE_FILM_START,
    payload,
});

export const deleteFilmFailure = (payload) => ({
    type: DELETE_FILM_FAILURE,
    payload
})

export const deleteFilmSuccess = (payload) => ({
    type: DELETE_FILM_SUCCESS,
    payload
})

export const getSortedFilmsStart = () => ({
    type: GET_SORTED_FILMS_START
})

export const getSortedFilmsSuccess = (payload) => ({
    type: GET_SORTED_FILMS_SUCCESS,
    payload

})

export const getSortedFilmsFailure = () => ({
    type: GET_SORTED_FILMS_FAILURE
})

export const getFilmsByTitleStart = (payload) => ({
    type: GET_FILMS_BY_TITLE_START,
    payload
})

export const getFilmsByTitleSuccess = (payload) => ({
    type: GET_FILMS_BY_TITLE_SUCCESS,
    payload
})

export const getFilmsByTitleFailure = (payload) => ({
    type: GET_FILMS_BY_TITLE_FAILURE,
    payload
});




export const getFilmsByActorStart = (payload) => ({
    type: GET_FILMS_BY_ACTOR_START,
    payload
})

export const getFilmsByActorSuccess = (payload) => ({
    type: GET_FILMS_BY_ACTOR_SUCCESS,
    payload
})

export const getFilmsByActorFailure = (payload) => ({
    type: GET_FILMS_BY_ACTOR_FAILURE,
    payload
});

export const postFileStart = (payload) => ({
    type: POST_FILE_START,
    payload
});

export const postFileFailure = (payload) => ({
    type: POST_FIlE_FAILURE,
    payload
});

export const postFileSuccess = () => ({
    type: POST_FILE_SUCCESS,
    
});
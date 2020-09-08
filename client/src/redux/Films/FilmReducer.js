
import {
    DELETE_FILM_SUCCESS,
    GET_SORTED_FILMS_SUCCESS,
    FETCH_ALL_FILMS_START, FETCH_ALL_FILMS_SUCCESS,
    FETCH_ALL_FILMS_FAILURE, POST_FILM_START,
    POST_FILM_SUCCESS, POST_FILM_FAILURE, GET_FILMS_BY_TITLE_SUCCESS, GET_FILMS_BY_ACTOR_SUCCESS
} from './types';


const INITIAL_STATE = {
    films: [],
    isLoading: false,
    error: '',
    refetch: false,
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_FILMS_START: return {
            ...state,
            isLoading: true
        }
        case FETCH_ALL_FILMS_FAILURE:
            return {
                ...state,
                eror: action.payload,
                isLoading: false
            }
        case FETCH_ALL_FILMS_SUCCESS: return {
            ...state,
            isLoading: false,
            films: action.payload
        }
        case POST_FILM_START: return {
            ...state,
            isLoading: true
        }
        case POST_FILM_SUCCESS: return {
            ...state,
            isLoading: false,
            films: action.payload
        }
        case POST_FILM_FAILURE: return {
            ...state,
            isLoading: false,
            error: action.payload
        }
        case GET_SORTED_FILMS_SUCCESS:
            
            return {
                ...state,
                isLoading: false,
                films: action.payload
            }
        case GET_FILMS_BY_TITLE_SUCCESS:
            
            return {
                ...state,
                isLoading: false,
                films: action.payload

            }

        case GET_FILMS_BY_ACTOR_SUCCESS:
           
            return {
                ...state,
                isLoading: false,
                films: action.payload

            }
        case DELETE_FILM_SUCCESS:
            
            return {
                ...state,
                films: state.films.filter(item => item._id !== action.payload)
            }
        default: return state
    }
}
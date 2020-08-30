import { NOM_MOVIE, REMOVE_MOVIE } from '../actions';

const initialState = {
    nominatedMovies: [],
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case NOM_MOVIE:
            return {
                nominatedMovies: [...state.nominatedMovies, action.payload]
            };
        case REMOVE_MOVIE:
            return {
                nominatedMovies: state.nominatedMovies.filter(movie => movie !== action.payload)
            };
        default:
            return state;
    };
};
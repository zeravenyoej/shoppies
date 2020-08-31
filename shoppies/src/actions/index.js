export const NOM_MOVIE = 'NOM_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';

export function nominateMovie(movie) {
    return {
        type: NOM_MOVIE,
        payload: movie
    };
};

export function removeMovie(movie){
    return {
        type: REMOVE_MOVIE,
        payload: movie
    };
};
export const toggleCards = (shouldShow) => ({
    type: 'toggleCards',
    shouldShow,
});

export const setMostPopularMovies = (list) => ({
    type: 'setMostPopularMovies',
    list,
});

export const setGenres = (genreList) => ({
    type: 'setGenres',
    genreList,
});

export const likeFilm = (filmLiked) => ({
    type: 'likeFilm',
    filmLiked,
});
export const setMovieGenres = (list) => ({
    type: 'setMovieGenres',
    list,
});
export const likeMovie = (id) => ({
    type: 'likeMovie',
    id,
});
export const dislikeMovie = (id) => ({
    type: 'dislikeMovie',
    id,
});

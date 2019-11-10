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

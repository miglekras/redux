const initialStateOfCards = {
    mostPopular: [],
};

export const cards = (state = initialStateOfCards, action) => {
    switch (action.type) {
        case 'setMostPopularMovies':
            return {
                ...state,
                mostPopular: action.list,
            };
        case 'setMovieGenres':
            return {
                ...state,
                mostPopular: action.list,
            };
        default:
            return state;
    }
};


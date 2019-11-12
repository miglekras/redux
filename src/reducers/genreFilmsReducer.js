const initialStateOfGenres = {
    moviesGenres: [],
}

export const genreFilms = (state = initialStateOfGenres, action) => {
    switch (action.type) {
        case 'setGenres':
            return {
                ...state,
                moviesGenres: action.genreList,
            };
        default:
            return state;
    }
};

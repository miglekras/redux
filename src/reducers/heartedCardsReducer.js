const initialStateOfHeartedCards = {
    heartedMovies: [],
};

export const heartedCards = (state = initialStateOfHeartedCards, action) => {
    switch (action.type) {
        case 'likeMovie':
            return {
                ...state,
                heartedMovies: [...state.heartedMovies, action.id],
            };

        case 'dislikeMovie':
            return {
                ...state,
                heartedMovies: state.heartedMovies.filter(id => id !== action.id),
            };
        default:
            return state;
    }
};
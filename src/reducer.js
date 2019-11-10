import {combineReducers} from 'redux';

const initialState = {
    showCards: true,
    liked: false,
    moviesGenres: [],

};
const componentState = (state = initialState, action) => {
    switch (action.type) {
        case 'toggleCards':
            return {
                ...state,
                showCards: action.shouldShow,
            };
        default:
            return state;
    }
};
const genreFilms = (state = initialState, action) => {
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

const filmState = (state = initialState, action) => {
    switch (action.type) {
        case 'likeFilm':
            return {
                ...state,
                liked: action.filmLiked,
            };
        default:
            return state;
    }
};

const initialStateOfCards = {
    mostPopular: [],
};

const cards = (state = initialStateOfCards, action) => {
    switch (action.type) {
        case 'setMostPopularMovies':
            return {
                ...state,
                mostPopular: action.list,
            };
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    componentState,
    cards,
    filmState,
    genreFilms,
});

import {combineReducers} from 'redux';
import {genreFilms} from '../reducers/genreFilmsReducer';
import {heartedCards} from '../reducers/heartedCardsReducer';
import {cards} from '../reducers/cardsReducer';
import {componentState} from '../reducers/componentStateReducer';

export const rootReducer = combineReducers({
    componentState,
    cards,
    heartedCards,
    genreFilms,
});

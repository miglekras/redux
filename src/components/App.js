import React from 'react';
import GenreMenu from './GenreMenu';
import {connect} from 'react-redux';
import {toggleCards} from '../actions';
import {getGenreMovies, getMostPopularMovies} from '../thunks';
import Card from './Card';
import {getImageUrl} from '../config';

class App extends React.Component {

    componentDidMount() {
        this.props.onGetMostPopularMovies();
    }

    // filterFilms(genreId) {
    //    this.setState({
    //        filteredList: this.state.list
    //             .filter(film => film.genre_ids.includes(genreId)),
    //         filtered: true,
    //         filterId: genreId,
    //     });
    // }


    render() {
        console.log(this.props);
        // const cards = this.state.filtered ? this.state.filteredList : this.state.list;
        return (
            <div className="container">
                <header>
                    <button
                        style={{display: 'block', margin: '0 auto'}}
                        onClick={() => this.props.onToggleCards(!this.props.showCards)}
                    >
                        {this.props.showCards ? "Hide movies" : "Show movies"}

                    </button>
                </header>

                <GenreMenu
                    // filterFilms={this.filterFilms}
                    // selected={this.state.filterId}
                />

                {this.props.showCards
                    ? (
                        <div className="cards">
                            {this.props.mostPopularMovies.map((card) => (
                                <Card
                                    key={card.original_title}
                                    backgroundImage={getImageUrl(card.backdrop_path)}
                                    date={card.release_date}
                                    rating={card.vote_average}
                                    votes={card.vote_count}
                                    description={card.overview}
                                    title={card.original_title}
                                />
                            ))}
                        </div>
                    )
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    showCards: state.componentState.showCards,
    mostPopularMovies: state.cards.mostPopular,
    genres: state.genreFilms.moviesGenres,
    // liked: state.filmState.liked,

});
const mapDispatchToProps = (dispatch) => ({
    onToggleCards: (shouldShow) => dispatch(toggleCards(shouldShow)),
    onGetMostPopularMovies: () => dispatch(getMostPopularMovies()),
    onGetGenreMovies: () => dispatch(getGenreMovies()),
    // onLikeFilm: (filmLiked) => dispatch(likeFilm(filmLiked)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
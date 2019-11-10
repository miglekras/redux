import React from 'react';
import GenreLink from './GenreLink';
import {connect} from "react-redux";
import {getGenreMovies} from '../thunks';
import {setGenres} from '../actions';


class GenreMenu extends React.Component {
    componentDidMount() {
        this.props.onGetGenreMovies();

    }

    render() {
        return (
            <div>
                {this.props.genres.map((el) => (
                    <GenreLink
                        id={el.id}
                        key={el.id}
                        genre={el.name}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    genres: state.genreFilms.moviesGenres,
});

const mapDispatchToProps = (dispatch) => ({
    onGetGenreMovies: () => dispatch(getGenreMovies()),
    // onSetGenreMovies: (genreList) => dispatch(setGenreMovies(genreList)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GenreMenu);

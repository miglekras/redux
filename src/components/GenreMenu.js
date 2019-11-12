import React from 'react';
import GenreLink from './GenreLink';
import {connect} from "react-redux";
import {getGenres} from '../thunks';


class GenreMenu extends React.Component {
    componentDidMount() {
        this.props.onGetGenres();

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
    onGetGenres: () => dispatch(getGenres()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GenreMenu);

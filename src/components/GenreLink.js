import React from 'react';
import {connect} from "react-redux";
import {getMovieGenres} from "../thunks";


class GenreLink extends React.Component {


    render() {
        return (
            <button
                onClick={() => {
                    this.props.onGetMovieGenres(this.props.id)
                }}>
                {this.props.genre}
            </button>)
    }


}


const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    onGetMovieGenres: (id) => dispatch(getMovieGenres(id)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GenreLink);
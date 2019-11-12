import React from 'react';
import {dislikeMovie, likeMovie} from "../actions";
import {connect} from "react-redux";

class LikeButton extends React.Component {


    render() {
        const hearted = this.props.hearted.includes(this.props.id);
        return (
            <button>
                <i className={hearted ? 'fa fa-heart' : 'fa fa-heart-o'}
                   onClick={() => hearted ? this.props.onDislikeMovie(this.props.id) : this.props.onLikeMovie(this.props.id)}> </i>
            </button>
        )

    }
}

const mapStateToProps = (state) => ({
    hearted: state.heartedCards.heartedMovies,
});

const mapDispatchToProps = (dispatch) => ({
    onLikeMovie: (id) => dispatch(likeMovie(id)),
    onDislikeMovie: (id) => dispatch(dislikeMovie(id)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LikeButton);
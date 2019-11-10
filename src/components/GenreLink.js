import React from 'react';
import {getGenreMovies} from "../thunks";
import {connect} from "react-redux";


class GenreLink extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         // genreId: props.id,
    //         // title: props.genre,
    //         // filterFilms: props.filterFilms,
    //     };
    //     this.handleClick = this.handleClick.bind(this);
    // }
    //
    // handleClick() {
    //     this.state.filterFilms(this.state.genreId);
    // }


    render() {
        return (
            <button className={this.props.selected ? 'selected' : null} onClick={{/*this.handleClick*/}}>
                genre
            </button>)
    }


}



export default connect()(GenreLink);
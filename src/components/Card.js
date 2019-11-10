import React from 'react';
// import {toggleCards, likeFilm} from "../actions";
// import {getMostPopularMovies} from "../thunks";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: props.title,
      showDescription: true,
        liked: props.liked,
    };
  }
  
  render() {
    const { showDescription } = this.state;
    const { title, backgroundImage, date, rating, votes, description } = this.props;
    return (
      <div className="card">
          <div
            className="card__image"
            style={{
              backgroundImage: `url(${backgroundImage})`
            }}/>
      
          <div className="card__title">
              {title}
          </div>

          <div className='card__like'>
              <button>
                  <i className={this.props.liked ? 'fa fa-heart' : 'fa fa-heart-o'}
                     onClick={() => this.props.onLikeFilm(!this.props.liked)}> </i>
              </button>
          </div>
      
          <div className="card__subtitle">
              <span>{date}</span>
              <span>{rating} ({votes} votes)</span>
          </div>
      
          <div className="card-info">
            <div className="card-info__header">Summary</div>
            <button onClick={() => { this.setState({ showDescription: !showDescription })}}>Toggle</button>
            <div className="card-info__description">
              {showDescription ? description : null}
            </div>
          </div>
      </div>
    );
  }
}




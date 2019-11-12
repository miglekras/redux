import React from 'react';
import {connect} from "react-redux";
import LikeButton from "./LikeButton";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDescription: true,
        };
    }

    render() {
        const {showDescription} = this.state;
        const {title, backgroundImage, date, rating, votes, description} = this.props;
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
                    <LikeButton
                        id={this.props.id}/>
                </div>

                <div className="card__subtitle">
                    <span>{date}</span>
                    <span>{rating} ({votes} votes)</span>
                </div>

                <div className="card-info">
                    <div className="card-info__header">Summary</div>
                    <button onClick={() => {
                        this.setState({showDescription: !showDescription})
                    }}>Toggle
                    </button>
                    <div className="card-info__description">
                        {showDescription ? description : null}
                    </div>
                </div>
            </div>
        );
    }
}


export default connect()(Card);




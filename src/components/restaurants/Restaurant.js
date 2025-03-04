import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;
    console.log(this.props)
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.delete(this.props.restaurant)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

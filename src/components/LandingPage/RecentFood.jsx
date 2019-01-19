import React, { Component } from 'react';
import food1 from '../../../images/local_dishes/food 1.jpg';
import food2 from '../../../images/local_dishes/food 2.jpg';
import food3 from '../../../images/local_dishes/food 3.jpg';
import food4 from '../../../images/local_dishes/food 4.jpg';
/**
 * @class
 */
export class RecentFood extends Component {
  /**
   * @constructor
   */
  constructor (){
    super();
    this.state = {
      foods:[
        {
          id: 1,
          image: food1
        },
        {
          id: 2,
          image: food2
        },
        {
          id: 3,
          image: food3
        },
        {
          id: 4,
          image: food4
        }
      ]
    };
  }
  /**
   * @returns {JSX} - JSX
   */
  render() {
    const { foods } = this.state;
    const foodList = foods.map(food => {
      return (
        <div className="column" key={food.id}>
          <img src={food.image} className="recentImage" alt={food.name} />
        </div>
      );
    });
    return (
      <div className="gallery">
        <h1>Food Gallery</h1>
        <hr />
        <h3>
          Click &nbsp;
          <span className="order-hero">
            <a href="/order">
              here &nbsp;
            </a>
          to make your order
          </span>
        </h3>
        <div className="row">
          {foodList}
        </div>
      </div>
    );
  }
}

export default RecentFood;

import React, { Component } from 'react';
import Reviews from './Reviews.jsx';
import Prices from './Prices.jsx';

import ShoeStyles from '../styles/ShoeStyles.css';

class Shoe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(reviewsNum) {
    if (reviewsNum) {
      this.setState({
        isHovering: true
      });
    }
  }  

  handleMouseLeave() {
    this.setState({
      isHovering: false
    });
  }

  render() {

    const { order } = this.props;
    const { name, price, salePrice, shoeUrl, category, colors, reviewsNum, reviewsAvg } = this.props.data;

    const shoeLi = {
      marginRight: '20px',
      color: 'rgb(109, 109, 109)'
    };

    return (

      <li style={shoeLi} id="li" onMouseEnter={() => this.handleMouseEnter(reviewsNum)} onMouseLeave={() => this.handleMouseLeave()}>
        
        <img src={shoeUrl} /><br />
      
        <div className={ShoeStyles.shoeText} id="text">

          <div className={ShoeStyles.shoeDiv} id="shoeText">

            {reviewsNum && this.state.isHovering ? <Reviews reviewsNum={reviewsNum} reviewsAvg={reviewsAvg} /> : 
              <div className={ShoeStyles.colors}>{colors} {colors === 1 ? 'Color' : 'Colors'}</div>} 
            {name}

          </div>
          
          <div className={ShoeStyles.category}>
            {category}
          </div>

          <Prices id="shoePrices" origPrice={price} salePrice={salePrice} />

        </div>

      </li>

    );

  }
}

export default Shoe;
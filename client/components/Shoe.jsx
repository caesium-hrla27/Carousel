import React, { Component } from 'react';
import styled from 'styled-components';
import Reviews from './Reviews.jsx';
import Prices from './Prices.jsx';


import { Li, Text, Color, ShoeDiv, CategoryDiv } from './style.js';

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
      
  

    return (

      <Li id="li" order={order} onMouseEnter={() => this.handleMouseEnter(reviewsNum)} onMouseLeave={() => this.handleMouseLeave()}>
        
        <img src={shoeUrl} /><br />
      
        <Text id="text">

          <ShoeDiv id="shoeText">
            {reviewsNum && this.state.isHovering ? <Reviews reviewsNum={reviewsNum} reviewsAvg={reviewsAvg} /> : 
              <Color>{colors} {colors === 1 ? 'Color' : 'Colors'}<br /></Color>} 
            {name}<br />
          </ShoeDiv>
          
          <CategoryDiv>
            {category === 'men_athletic' ? 'Basketball Shoe' : category === 'men_lifestyle' ? 'Men\'s Shoe' : 
              category === 'women_athletic' ? 'Women\'s Running Shoe' : category === 'women_lifestyle' ? 'Women\'s Shoe' : 
                category === 'kids_boys' || category === 'kids_girls' ? 'Big Kids\' Shoe' : null}<br />
          </CategoryDiv>

          <Prices id="shoePrices" origPrice={price} salePrice={salePrice} />

        </Text>
      </Li>

    );

  }
}

export default Shoe;
import React, { Component } from 'react';
import styled from 'styled-components';
import Reviews from './Reviews.jsx';


import { Li, Text, Color, ShoeDiv, Prices, OrigPrice } from './style.js';

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
    
    return (

      <Li id="li" order={this.props.order} onMouseEnter={() => this.handleMouseEnter(this.props.reviewsNum)} onMouseLeave={() => this.handleMouseLeave()}>
        
        <img src={this.props.shoeUrl} /><br />
      
        <Text id="text">

          <ShoeDiv id="shoeText">
            {this.props.reviewsNum && this.state.isHovering ? <Reviews reviewsNum={this.props.reviewsNum} reviewsAvg={this.props.reviewsAvg} /> : 
              <Color>{this.props.colors} {this.props.colors === 1 ? 'Color' : 'Colors'}<br /></Color>} 
            {this.props.name}<br />
          </ShoeDiv>
          
          {this.props.category === 'men_athletic' ? 'Basketball Shoe' : this.props.category === 'men_lifestyle' ? 'Men\'s Shoe' : 
            this.props.category === 'women_athletic' ? 'Women\'s Running Shoe' : this.props.category === 'women_lifestyle' ? 'Women\'s Shoe' : 
              this.props.category === 'kids_boys' || this.props.category === 'kids_girls' ? 'Big Kids\' Shoe' : null}<br />
        
          <Prices id="shoePrices">
            <OrigPrice origPrice={this.props.price} salePrice={this.props.salePrice}>
              {`$${this.props.price}`}
            </OrigPrice>
            {this.props.salePrice ? `$${this.props.salePrice}` : null}<br />
          </Prices>

        </Text>
      </Li>

    );

  }
}

export default Shoe;
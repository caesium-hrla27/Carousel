import React, { Component } from 'react';
import styled from 'styled-components';
import Reviews from './Reviews.jsx';


import { Li, Text, Color, ShoeDiv } from './style.js';

const Div = styled.div`
  display: flex;
`;

const OrigPrice = styled.div`
  margin-right: 5px;
  text-decoration: ${(props) => {
    if (props.salePrice) {
      return 'line-through';   
    }
  }}

 `;


const Shoe = (props) => {

  let randomColor = props.color();

  return (
    <Li order={props.order} onMouseEnter={() => props.mouseEnter(props.reviewsNum)} onMouseLeave={() => props.mouseLeave()}>
      <img src={props.shoeUrl} /><br />
      <Text>
        <ShoeDiv>
          {props.reviewsNum && props.isHovering ? <Reviews reviewsNum={props.reviewsNum} reviewsAvg={props.reviewsAvg} /> : 
            <Color>{randomColor} {randomColor === 1 ? 'Color' : 'Colors'}<br /></Color>} 
          {props.name}<br />
        </ShoeDiv>
        {props.category === 'men_athletic' ? 'Basketball Shoe' : props.category}<br />
        <Div>
          <OrigPrice origPrice={props.price} salePrice={props.salePrice}>
            {`$${props.price}`}
          </OrigPrice>
          {props.salePrice ? `$${props.salePrice}` : null}<br />
        </Div>
      </Text>
    </Li>
  );
};

export default Shoe;
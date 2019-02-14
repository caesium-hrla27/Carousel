import React from 'react';
import styled from 'styled-components';
import Reviews from './Reviews.jsx';


import { Li, Text, Color, ShoeDiv } from './style.js';



const Shoe = (props) => {

  let randomColor = props.color();

  return (
    <Li order={props.order}>
      <img src={props.shoeUrl} /><br />
      <Text>
        <ShoeDiv>
          <Reviews />
          <Color>
            {randomColor} {randomColor === 1 ? 'Color' : 'Colors'}<br />
          </Color>
          {props.name}<br />
        </ShoeDiv>
        {props.category === 'men_athletic' ? 'Basketball Shoe' : props.category}<br />
        {`$${props.price}`}<br />
      </Text>
    </Li>
  );
};

export default Shoe;
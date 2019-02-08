import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  margin: 10px;
  height: 370px;
  width: 390px;
  `;

const Li = styled.li`
  color: rgb(109, 109, 109);
  `;

const Div = styled.li`
  color: black;
`;


const Shoe = (props) => {

  let randomColor = props.color();

  return (
    <Li>
      <Img src={props.shoe_url} /><br />
      <Div>
        {randomColor} {randomColor === 1 ? 'Color' : 'Colors'}<br />
        <hr />
        {props.name}<br />
      </Div>
      {props.category === 'men_athletic' ? 'Basketball Shoe' : props.category}<br />
      {`$${props.price}`}<br />
    </Li>
  )
}

export default Shoe;
import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  margin: 10px;
  height: 370px;
  width: 390px;
  `;

const Li = styled.li`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20%;
  order: ${(props) => props.order}
  color: rgb(109, 109, 109);
  `;

const Div = styled.div`
  color: black;
`;

const Shoe = (props) => {

  let randomColor = props.color();

  return (
    <Li order={props.order}>
      <Img src={props.shoeUrl} /><br />
      <Div>
        {randomColor} {randomColor === 1 ? 'Color' : 'Colors'} Order: {props.order}<br />
        <hr />
        {props.name}<br />
      </Div>
      {props.category === 'men_athletic' ? 'Basketball Shoe' : props.category}<br />
      {`$${props.price}`}<br />
    </Li>
  );
};

export default Shoe;
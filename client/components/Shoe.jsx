import React from 'react';
import styled from 'styled-components';


const Li = styled.li`
  flex: 1 0 30%;
  margin-right: 20px;
  order: ${(props) => props.order};
  color: rgb(109, 109, 109);
  `;

const Text = styled.div`
  font-size: 15px;
`;

const Color = styled.div`
  font-size: 13px;
  border-bottom: 1px solid rgba(109, 109, 109, 0.5);
  padding: 5px 0px;
  margin: 5px 0px 10px; 
`;

const Div = styled.div`
  color: black;
  margin-bottom: 
`;

const Shoe = (props) => {

  let randomColor = props.color();

  return (
    <Li order={props.order}>
      <img src={props.shoeUrl} /><br />
      <Text>
        <Div>
          <Color>
            {randomColor} {randomColor === 1 ? 'Color' : 'Colors'}<br />
          </Color>
          {props.name}<br />
        </Div>
        {props.category === 'men_athletic' ? 'Basketball Shoe' : props.category}<br />
        {`$${props.price}`}<br />
      </Text>
    </Li>
  );
};

export default Shoe;
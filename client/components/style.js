import styled, { createGlobalStyle } from 'styled-components';

// PARENT COMPONENT STYLES

export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Heebo');
    font-family: 'Heebo', sans-serif;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0 0 0 0;
  padding: 0px 40px;
  transition: ${(props) => props.sliding ? 'none' : 'transform 350ms ease-in-out 0s'};
  transform: ${(props) => {
    if (!props.sliding) {
      return 'translateX(calc(-30% - 20px))';
    }
    if (props.direction === 'prev') {
      return 'translateX(calc(2 * -30% - 20px))';
    }
    return 'translateX(0%)';
  }}
`;

export const Div = styled.div`
  width: 100%;
  padding: 0px 25px;
`;

export const ButtonLeft = styled.button`
  background-color: rgba(232, 232, 232, 0.3);
  transition: background-color 0.5s ease-in-out;
  border: black;
  color: rgb(109, 109, 109);
  padding: 15px 17px 10px 17px;
  border-radius: 50%;
  position: absolute;
  left: 35px;
  top: 330px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  } 

  -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);

`;

export const ButtonRight = styled.button`
  background-color: rgba(232, 232, 232, 0.3);
  transition: background-color 0.5s ease-in-out;
  border: black;
  color: rgb(109, 109, 109);
  padding: 15px 17px 10px 17px;
  border-radius: 50%;
  position: absolute;
  right: 35px;
  top: 330px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  } 
`;

export const Bar = styled.div`
  width: 28%;
  border-bottom: 2px solid black;
  z-index: 2;
  position: absolute;
  transition: ${(props) => props.clickPosition > 0 ? 'left 0.5s' : 'none'};

  left: ${(props) => {
    console.log('this is the rightclick', props.clickPosition);
    return props.clickPosition === 1 ? '111px' : props.clickPosition === 2 ? '222px' : props.clickPosition === 3 ? '333px' : 
      props.clickPosition === 4 ? '444px' : props.clickPosition === 5 ? '555px' : props.clickPosition === 6 ? '666px' : 
        props.clickPosition === 7 ? '777px' : props.clickPosition === 8 ? '890px' : props.clickPosition === 9 ? '1000px' : '0px';
  }
}}
`;


export const DivBar = styled.div`
  position: relative;
  width: 95%;
  margin: 40px 30px 40px 30px;  
  border-bottom: 2px solid rgba(109, 109, 109, 0.25);
  z-index: 1;
  border-radius: 2px;
`;

// CHILD COMPONENT STYLES

export const Li = styled.li`
  flex: 1 0 30%;
  margin-right: 20px;
  order: ${(props) => props.order};
  color: rgb(109, 109, 109);
  `;

export const Text = styled.div`
  font-size: 15px;
`;

export const Color = styled.div`
  font-size: 13px;
  border-bottom: 1px solid rgba(109, 109, 109, 0.5);
  padding: 5px 0px;
  margin: 5px 0px 10px; 
`;

export const ShoeDiv = styled.div`
  color: black;
  margin-bottom: 
`;


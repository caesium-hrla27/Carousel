import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: “Helvetica Neue”,Helvetica,Arial,sans-serif;
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

export const Img = styled.div`
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


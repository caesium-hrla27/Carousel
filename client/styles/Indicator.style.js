import styled from 'styled-components';

export const Track = styled.div`
  position: relative;
  width: 95%;
  margin: 40px 30px 40px 30px;  
  border-bottom: 2px solid rgba(109, 109, 109, 0.25);
  z-index: 1;
  border-radius: 2px;
`;

export const Slider = styled.div`
  width: 28%;
  border-bottom: 2px solid black;
  z-index: 2;
  position: absolute;
  transition: ${(props) => props.clickPosition > 0 ? 'left 0.5s' : 'none'};

  left: ${(props) => {
    return props.clickPosition === 1 ? '111px' : props.clickPosition === 2 ? '222px' : props.clickPosition === 3 ? '333px' : 
      props.clickPosition === 4 ? '444px' : props.clickPosition === 5 ? '555px' : props.clickPosition === 6 ? '666px' : 
        props.clickPosition === 7 ? '777px' : props.clickPosition === 8 ? '890px' : props.clickPosition === 9 ? '1000px' : '0px';
  }
}}
`;


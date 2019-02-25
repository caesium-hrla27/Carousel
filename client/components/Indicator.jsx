import React from 'react';

import IndicatorStyles from '../styles/IndicatorStyles.css';


const Indicator = (props) => {

  const carouselSlider = {
    width: '28%',
    borderBottom: '2px solid black',
    zIndex: '2',
    position: 'absolute',
    transition: `${props.clickPosition > 0 ? 'left 0.5s' : 'none'}`,

    left:  `${
      props.clickPosition === 1 ? '111px' : props.clickPosition === 2 ? '222px' : props.clickPosition === 3 ? '333px' : 
        props.clickPosition === 4 ? '444px' : props.clickPosition === 5 ? '555px' : props.clickPosition === 6 ? '666px' : 
          props.clickPosition === 7 ? '777px' : props.clickPosition === 8 ? '890px' : props.clickPosition === 9 ? '1000px' : '0px'
    }`
  };
  

  return (
    <div className={IndicatorStyles.indicatorWrapper} id="indicator">
      <div className={IndicatorStyles.carouselTrack}>
        <div style={carouselSlider}>
        </div>
      </div>
    </div>

  );

};

export default Indicator;


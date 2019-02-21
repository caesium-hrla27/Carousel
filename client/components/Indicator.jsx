import React from 'react';
import styled from 'styled-components';

import { Track, Slider } from '../styles/Indicator.style.js';

const Indicator = (props) => {

  return (
    <div id="indicator">
      <Track>
        <Slider clickPosition={props.clickPosition}>
        </Slider>
      </Track>
    </div>

  );

};

export default Indicator;


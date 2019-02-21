import React from 'react';
import styled from 'styled-components';

import { StylesDiv, StarRatingsTop, StarRatingsBottom } from '../styles/Reviews.style.js';

const Reviews = (props) => {

  return (
    <div>
      <StylesDiv id="stylesDiv">
        <StarRatingsTop id="grayStars">
          <StarRatingsBottom id="avgStars" reviewsAvg={props.reviewsAvg}></StarRatingsBottom> ({props.reviewsNum})
        </StarRatingsTop>
      </StylesDiv>
    </div>
  );
};

export default Reviews;
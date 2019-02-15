import React, { Component } from 'react';
import styled from 'styled-components';

import { StylesDiv, StarRatingsTop, StarRatingsBottom } from './style.js';

const Reviews = (props) => {

  return (
    <div>
      <StylesDiv>
        <StarRatingsTop>
          <StarRatingsBottom reviewsAvg={props.reviewsAvg}></StarRatingsBottom> ({props.reviewsNum})
        </StarRatingsTop>
      </StylesDiv>
    </div>
  );
};

export default Reviews;
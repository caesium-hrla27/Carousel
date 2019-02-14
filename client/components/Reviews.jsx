import React from 'react';
import styled from 'styled-components';

const Reviews = (props) => {


  return (
    <div>
      <div>Stars: {props.reviewsNum}   Number of Stars: {props.reviewsAvg}</div>
    </div>
  );
};

export default Reviews;
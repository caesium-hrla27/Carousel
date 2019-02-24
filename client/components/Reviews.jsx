import React from 'react';

import CarouselReviewsStyles from '../styles/CarouselReviewsStyles.css';

const Reviews = (props) => {

  const getStarPercent = () => {
    let starsNum =  ((props.reviewsAvg / 5) * 100) - 10;
    return `${starsNum}%`; 
  }

  const StarRatingsBottom = {
    width: `${getStarPercent()}`
  }


  return (
    <div>
      <div className={CarouselReviewsStyles.CarouselReviewsDiv} id="stylesDiv">
        <div className={CarouselReviewsStyles.StarRatingsTop} id="grayStars">
          <div className={CarouselReviewsStyles.StarRatingsBottom} style={StarRatingsBottom} id="avgStars" reviewsAvg={props.reviewsAvg}></div> ({props.reviewsNum})
        </div>
      </div>
    </div>
  );
};

export default Reviews;
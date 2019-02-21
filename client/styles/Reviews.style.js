import styled from 'styled-components';

export const StylesDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
  font-size: 13px;
  border-bottom: 1px solid rgba(109, 109, 109, 0.5);
  padding: 5px 0px;
  margin: 5px 0px 10px; 
`;

export const StarRatingsTop = styled.div`
  display: inline-block;
  position: relative;

  &:before {
    content: '★ ★ ★ ★ ★';
    color: rgba(109, 109, 109, 0.25);
  }
`;


export const StarRatingsBottom = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
    width: ${(props) => {
    let starsNum = ((props.reviewsAvg / 5) * 100) - 10;
    return `${starsNum}%`;   
  }}

  &:before {
    content: '★ ★ ★ ★ ★';
    color: black; 
  }
 `;

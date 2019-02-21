import styled from 'styled-components';

export const PricesDiv = styled.div`
  margin: 7px 0px 7px 0px;
  display: flex;
`;

export const OrigPrice = styled.div`
  margin-right: 5px;
  text-decoration: ${(props) => {
    if (props.salePrice) {
      return 'line-through';   
    }
  }}
 `;
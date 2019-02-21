import React from 'react';
import styled from 'styled-components';

import { PricesDiv, OrigPrice } from './style.js';

const Prices = (props) => {

  return (
    
    <PricesDiv id="shoePrices">

      <OrigPrice origPrice={props.origPrice} salePrice={props.salePrice}>
        {`$${props.origPrice}`}
      </OrigPrice>
      
      {props.salePrice ? `$${props.salePrice}` : null}<br />

    </PricesDiv>

  );
};

export default Prices;
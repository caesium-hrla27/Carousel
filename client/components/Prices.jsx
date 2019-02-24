import React from 'react';

import PricesStyles from '../styles/PricesStyles.css';

const Prices = (props) => {

  const OrigPrice = {
    marginRight: '5px',
    textDecoration: `${props.salePrice ? 'line-through': 'none'}`
  }


  return (
    
    <div className={PricesStyles.prices} id="shoePrices">

      <div style={OrigPrice}>
        {`$${props.origPrice}`}
      </div>
      
      {props.salePrice ? `$${props.salePrice}` : null}<br />

    </div>

  );
};

export default Prices;
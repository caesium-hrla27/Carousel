import React, {Component} from 'react';
import axios from 'axios';
import Shoe from './Shoe.jsx';
import styled from 'styled-components';

const Ul = styled.div`
  list-style-type: none;
  display: inline-flex;
  justify-content: space-between;
`;

class Carousel extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  recommendations: [
  	  {
  	  	id: 1,
  	  	name: "Nike Zoom KD11 BHM",
  	  	price: 150,
  	  	shoe_url: 'https://images.nike.com/is/image/DotCom/BQ6245_400?$NIKE_PWP_GRAY$&wid=420&hei=420',
  	  	category: 'men_athletic'
  	  }, 
  	  {
  	  	id: 2,
  	  	name: "Nike Air Versitile III",
  	  	price: 66.97,
  	  	shoe_url: 'https://images.nike.com/is/image/DotCom/AO4430_005?$NIKE_PWP_GRAY$&wid=420&hei=420',
  	  	category: 'men_athletic'
  	  },   	  
  	  {
  	  	id: 3,
  	  	name: "Nike Air Precision II FlyEase",
  	  	price: 70,
  	  	shoe_url: 'https://images.nike.com/is/image/DotCom/AJ1931_060?$NIKE_PWP_GRAY$&wid=420&hei=420',
  	  	category: 'men_athletic'
  	  },  	  
  	  {
  	  	id: 4,
  	  	name: "Nike KD Trey 5 VI",
  	  	price: 90,
  	  	shoe_url: 'https://images.nike.com/is/image/DotCom/AA7067_002?$NIKE_PWP_GRAY$&wid=420&hei=420',
  	  	category: 'men_athletic'
  	  },  	  	
      {
  	    id: 5,
  	  	name: "LeBron Witness III",
  	  	price: 90,
  	  	shoe_url: 'https://images.nike.com/is/image/DotCom/AO4433_002?$NIKE_PWP_GRAY$&wid=420&hei=420',
  	  	category: 'men_athletic'
  	  },       
  	  {
  	    id: 6,
  	  	name: "Nike Air Max Infuriate 2 Mid",
  	  	price: 85,
  	  	shoe_url: 'https://images.nike.com/is/image/DotCom/AA7066_002?$NIKE_PWP_GRAY$&wid=420&hei=420',
  	  	category: 'men_athletic'
  	  },   	    	  
  	  {
  	    id: 7,
  	  	name: "Nike Air Precision II FlyEase",
  	  	price: 70,
  	  	shoe_url: 'https://images.nike.com/is/image/DotCom/AJ1932_060?$NIKE_PWP_GRAY$&wid=420&hei=420',
  	  	category: 'men_athletic'
  	  },   	    	  
  	  {
  	    id: 8,
  	  	name: "Nike Air Precision II FlyEase",
  	  	price: 70,
  	  	shoe_url: 'https://images.nike.com/is/image/DotCom/AJ5902_011?$NIKE_PWP_GRAY$&wid=420&hei=420',
  	  	category: 'men_athletic'
  	  },   	  
  	  {
  	    id: 9,
  	  	name: "Nike Fly.By Low II",
  	  	price: 65,
  	  	shoe_url: 'https://images.nike.com/is/image/DotCom/AJ1932_060?$NIKE_PWP_GRAY$&wid=420&hei=420',
  	  	category: 'men_athletic'
  	  },   	  
  	  {
  	    id: 10,
  	  	name: "Nike Zoom KD11 BHM",
  	  	price: 150,
  	  	shoe_url: 'https://images.nike.com/is/image/DotCom/BQ6245_400?$NIKE_PWP_GRAY$&wid=420&hei=420',
  	  	category: 'men_athletic'
  	  },   	    	  
  	  {
  	    id: 11,
  	  	name: "Air Jordan 1 Mid SE",
  	  	price: 120,
  	  	shoe_url: 'https://images.nike.com/is/image/DotCom/852542_007?$NIKE_PWP_GRAY$&wid=420&hei=420',
  	  	category: 'men_athletic'
  	  },   	    	  
  	  {
  	    id: 12,
  	  	name: "Kyrie 5",
  	  	price: 130,
  	  	shoe_url: 'https://images.nike.com/is/image/DotCom/AO2918_003?$NIKE_PWP_GRAY$&wid=420&hei=420',
  	  	category: 'men_athletic'
  	  }   	  
  	]

  	// loop over the array of objects
  	  // for each object, need to render a Shoe Component
  	    // within map, make sure you pass down all of the components it needs (id, name, price, shoe_url, category)

  	}
  	this.getRandomColor = this.getRandomColor.bind(this);
  }



  getRandomColor() {
  	let randomNum = Math.ceil(Math.random() * 10);
  	return randomNum;
  }
  
  render() {
    return (
      <div>
        <Ul>
          {this.state.recommendations.map(shoe => <Shoe id={shoe.id} name={shoe.name} price={shoe.price} shoe_url={shoe.shoe_url} category={shoe.category} color={this.getRandomColor} />)}
        </Ul>
      </div>
    )
  }
}

export default Carousel;
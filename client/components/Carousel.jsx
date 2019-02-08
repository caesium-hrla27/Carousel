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
      recommendations: [],
      category: 'men_athletic'
  	}
  	this.getRandomColor = this.getRandomColor.bind(this);
    this.getRecommendations = this.getRecommendations.bind(this);
  }

  componentDidMount() {
    this.getRecommendations();
  }

  // when sending a get request, will need the category name I'm looking for, then send that category name to get shoes are matching that category name
  getRecommendations() {
    const {category} = this.state;
    
    axios
      .get('/api/shoeList', { params: {category}})
      .then(({data}) => {
        this.setState({
          recommendations: data
        })
      }, () => console.log('Success getting shoes and setting state'))
      .catch(err => console.log('Unable to get recommendations', err));
  }


  getRandomColor() {
  	let randomNum = Math.ceil(Math.random() * 10);
  	return randomNum;
  }
  
  render() {
    return (
      <div>
        <Ul>
          {this.state.recommendations.map(shoe => <Shoe key={shoe.id} id={shoe.id} name={shoe.name} price={shoe.price} shoe_url={shoe.shoe_url} category={shoe.category} color={this.getRandomColor} />)}
        </Ul>
      </div>
    )
  }
}

export default Carousel;
import React, {Component} from 'react';
import axios from 'axios';
import Shoe from './Shoe.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Ul = styled.div`
  list-style-type: none;
  display: flex;
  margin: 0 0 20px 20px;
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: [],
      category: 'men_athletic',
      position: 0
    };
    this.getOrder = this.getOrder.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
    this.getRecommendations = this.getRecommendations.bind(this);
  }

  componentDidMount() {
    this.getRecommendations();
  }

  getOrder(itemIndex) {
    const { position, recommendations } = this.state;
    const numItems = recommendations.length || 1;

    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }

    return itemIndex - position;
  }

  nextSlide() {
    const { position, recommendations } = this.state;
    const numItems = recommendations.length || 1;
    // if positon is greater than number of items, will loop back to first position, otherwise, will increase position by 1
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1 
    });

  }  

  // when sending a get request, will need the category name I'm looking for, then send that category name to get shoes are matching that category name
  getRecommendations() {
    const {category} = this.state;
    
    axios
      .get('/api/shoeList', { params: {category}})
      .then(({data}) => {
        this.setState({
          recommendations: data
        });
      }, () => console.log('Success getting shoes and setting state'))
      .catch(err => console.log('Unable to get recommendations', err));
  }


  getRandomColor() {
    let randomNum = Math.ceil(Math.random() * 10);
    return randomNum;
  }
  
  render() {
    return (
      <Wrapper>
        <Ul>
          {this.state.recommendations.map((shoe, index) => {
            console.log('This is the index', index);
            return <Shoe 
              key={index}
              order={this.getOrder(index)} 
              id={shoe.id} 
              name={shoe.name} 
              price={shoe.price} 
              shoeUrl={shoe.shoeUrl} 
              category={shoe.category} 
              color={this.getRandomColor} />;
          })
          }
        </Ul>
        <button onClick={ () => this.nextSlide() }>Next</button>
      </Wrapper>
    );
  }
}

export default Carousel;
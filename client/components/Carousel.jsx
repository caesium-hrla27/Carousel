import React, {Component} from 'react';
import axios from 'axios';

import Svg from './Svg.jsx';
import Shoe from './Shoe.jsx';
import Indicator from './Indicator.jsx';
import styled from 'styled-components';

import { GlobalStyles, Wrapper, Ul, Img, ButtonLeft, ButtonRight } from '../styles/Carousel.style.js';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: [],
      categories: ['Basketball Shoe', 'Men\'s Shoe', 'Women\'s Running Shoe', 'Women\'s Shoe', 'Big Kids\' Shoe'],
      position: 0,
      sliding: false,
      clickPosition: 0,
    };
    this.getOrder = this.getOrder.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  componentDidMount() {
    this.getRecommendations();
  }

  // when sending a get request, will need the category name I'm looking for, then send that category name to get shoes are matching that category name
  getRecommendations() {
    const {categories} = this.state;
    const randIndex = Math.floor(Math.random() * 5);
    const category = categories[randIndex];
    
    axios
      .get('/api/shoeList', { params: {category}})
      .then(({data}) => {
        this.setState({
          recommendations: data,
        });
      }, () => console.log('Success getting shoes and setting state'))
      .catch(err => console.log('Unable to get recommendations', err));
  }

  getOrder(index) {
    const {position, recommendations} = this.state;
    const numItems = recommendations.length;

    if (index - position > 0) {
      return index - position;
    } 
    if (index - position < 0) {
      return numItems - Math.abs(index - position);
    }

  }

  //increment the carousel position (in state) -- getOrder will then re-order all of the slides each time nextSlide is invoked

  nextSlide() {
    const { position, recommendations, clickPosition} = this.state;
    const numItems = recommendations.length;

    let nextPosition;
    let newPosition;
    
    nextPosition = position + 1;
    newPosition = clickPosition + 1;


    this.setState({
      clickPosition: newPosition
    });

    this.slideCarousel('next', nextPosition);

  }

  prevSlide() {
    const { position, recommendations, clickPosition} = this.state;
    const numItems = recommendations.length;

    let prevPosition;
    let newPosition;
    
    prevPosition = position - 1;
    newPosition = clickPosition - 1;

    this.setState({
      clickPosition: newPosition
    });

    this.slideCarousel('prev', prevPosition);

  }

  // setting sliding to true will trigger the sliding animation - ensures it will only slide when buttons are clicked
  // once setState has been set to true, we want to then toggle it back to false to "stop" the sliding motion
  // pass 2nd setState in as a callback to the first so we ensure this happens after the first setState

  slideCarousel(direction, position) {
    this.setState({
      sliding: true,
      direction: direction,
      position: position
    });
    setTimeout(() => {
      this.setState({
        sliding: false,
      });
    }, 50);    
  }

  render() {
    
    const { sliding, direction, position, clickPosition, recommendations } = this.state;
    
    return (
      <Wrapper id="wrapper">
        
        <GlobalStyles />
        
        <Img>
          <img src="https://s3.us-east-2.amazonaws.com/carousel-fec/youMay.png"></img>
        </Img>
        
        <Ul id="ul" sliding={sliding} direction={direction}>
          {this.state.recommendations.map((shoe, index) => {
            
            return <Shoe 
              key={index}
              order={this.getOrder(index)}
              data={shoe}
            />;
          })
          
          }
        </Ul>
        
        {position !== 9 ? <ButtonRight onClick={ () => this.nextSlide() }><Svg /></ButtonRight> : null}
        {position !== 0 ? <ButtonLeft onClick={ () => this.prevSlide() }><Svg /></ButtonLeft> : null}
        
        <Indicator clickPosition={clickPosition} />
      
      </Wrapper>
    );
  }
}

export default Carousel;
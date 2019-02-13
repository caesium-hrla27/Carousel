import React, {Component} from 'react';
import axios from 'axios';
import Shoe from './Shoe.jsx';
import styled from 'styled-components';

import { GlobalStyles, Wrapper, Ul, Div, ButtonLeft, ButtonRight, Bar, DivBar } from './style.js';



class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: [],
      category: 'men_athletic',
      position: 0,
      sliding: false,
      clickPosition: 0,
    };
    this.getRandomColor = this.getRandomColor.bind(this);
    this.getRecommendations = this.getRecommendations.bind(this);
    this.getOrder = this.getOrder.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.slideCarousel = this.slideCarousel.bind(this);
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
        });
      }, () => console.log('Success getting shoes and setting state'))
      .catch(err => console.log('Unable to get recommendations', err));
  }


  getRandomColor() {
    let randomNum = Math.ceil(Math.random() * 10);
    return randomNum;
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
    const { sliding, direction, position, clickPosition } = this.state;
    console.log('this is the indicator position', clickPosition);
    return (
      <Wrapper>
        <GlobalStyles />
        <Div>
          <img src="https://s3.us-east-2.amazonaws.com/carousel-fec/youMay.png"></img>
        </Div>
        <Ul sliding={sliding} direction={direction}>
          {this.state.recommendations.map((shoe, index) => {
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
        {position !== 9 ? <ButtonRight onClick={ () => this.nextSlide() }><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg></ButtonRight> : null}
        {position !== 0 ? <ButtonLeft onClick={ () => this.prevSlide() }><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg></ButtonLeft> : null}
        <div id="indicator">
          <DivBar>
            <Bar clickPosition={clickPosition}>
            </Bar>
          </DivBar>
        </div>
      </Wrapper>
    );
  }
}

export default Carousel;
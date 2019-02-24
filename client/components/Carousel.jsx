import React, {Component} from 'react';
import axios from 'axios';

import Svg from './Svg.jsx';
import Shoe from './Shoe.jsx';
import Indicator from './Indicator.jsx';
import styled from 'styled-components';
import CarouselStyle from '../styles/CarouselStyle.css';


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: [],
      filteredRecs: [],
      position: 0,
      sliding: false,
      clickPosition: 0,
      direction: null
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
    let category;
    let initial;

    const id = Math.floor(Math.random() * 150);

    console.log('This is the random id', id);

    if (id < 51) {
      initial = 'M';
    } else if (id < 101) {
      initial = 'W';
    } else {
      initial = 'K';
    }

    console.log('This is the initial', initial);

    // const initial = id.slice(0, 1);
    // const idNum = parseInt(id.slice(2));

    if (initial === 'M' && id < 25) {
      category = 'Basketball Shoe';
    } else if (initial === 'M' && id < 50) {
      category = 'Men\'s Shoe';
    } else if (initial === 'W' && id < 75) {
      category = 'Women\'s Running Shoe';
    } else if (initial === 'W' && id < 100) {
      category = 'Women\'s Shoe';
    } else {
      category = 'Big Kids\' Shoe';
    }

    console.log('This is the category', category);



    axios
      .get('/api/shoeList', { params: {category}})
      .then(({data}) => {
        this.setState({
          recommendations: data,
        }, this.getFilteredRecs);
      })
      .catch(err => console.log('Unable to get recommendations', err));
  }

  getFilteredRecs() {
    const { recommendations } = this.state;
    let recsCopy = recommendations.slice(0);
    let randIndex;
    let recs = [];

    while (recs.length < 12) {
      randIndex = Math.floor(Math.random() * recsCopy.length);
      recs.push(recommendations[randIndex]);
      recsCopy.splice(randIndex, 1);
    }
    this.setState({
      filteredRecs: recs
    });
  }

  getOrder(index) {
    const {position, filteredRecs} = this.state;
    const numItems = filteredRecs.length;

    if (index - position > 0) {
      return index - position;
    } 
    if (index - position < 0) {
      return numItems - Math.abs(index - position);
    }

  }

  //increment the carousel position (in state) -- getOrder will then re-order all of the slides each time nextSlide is invoked

  nextSlide() {
    const { position, filteredRecs, clickPosition} = this.state;
    const numItems = filteredRecs.length;

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
    const { position, filteredRecs, clickPosition} = this.state;
    const numItems = filteredRecs.length;

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
    
    const { sliding, direction, position, clickPosition, filteredRecs } = this.state;

    const moveCarousel = () => {
      if (!sliding) {
        return 'translateX(calc(-30% - 20px))';
      }
      if (direction === 'prev') {
        return 'translateX(calc(2 * -30% - 20px))';
      }
      return 'translateX(0%)';
    }
    
    const carouselUl = {
        listStyleType: 'none',
        display: 'flex',
        margin: '0 0 0 0',
        padding: '0px 40px',
        transition: `${sliding ? 'none' : 'transform 350ms ease-in-out 0s'}`,
        transform: `${moveCarousel()}`
    }
    
    return (
      <div className={CarouselStyle.carouselWrapper} id="wrapper">
                
        <div className={CarouselStyle.youMay}>
          <img src="https://s3.us-east-2.amazonaws.com/carousel-fec/youMay.png"></img>
        </div>
        
        <ul id="ul" style={carouselUl}>
          {this.state.filteredRecs.map((shoe, index) => {
            
            return <Shoe 
              key={index}
              order={this.getOrder(index)}
              data={shoe}
            />;
          })
          
          }
        </ul>
        
        {position !== 9 ? <button className={CarouselStyle.buttonRight} onClick={ () => this.nextSlide() }><Svg /></button> : null}
        {position !== 0 ? <button className={CarouselStyle.buttonLeft} onClick={ () => this.prevSlide() }><Svg /></button> : null}
        
        <Indicator clickPosition={clickPosition} />
      
      </div>
    );
  }
}

export default Carousel;
import React, {Component} from 'react';
import axios from 'axios';
import Svg from './Svg.jsx';
import Shoe from './Shoe.jsx';
import Indicator from './Indicator.jsx';
import CarouselStyle from '../styles/CarouselStyle.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: [],
      filteredRecs: [],
      position: 0,
      direction: null
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }
  componentDidMount() {
    this.getRecommendations();
  }

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
      recs.push(recsCopy[randIndex]);
      recsCopy.splice(randIndex, 1);
    }

    this.setState({
      filteredRecs: recs
    });
  }
  
  nextSlide() {
    const { direction, position } = this.state;
    let newPosition;
    
    newPosition = position + 1;
    
    this.setState({
      position: newPosition,
      direction: 'next'
    });
  }  

  prevSlide() {
    const { direction, position } = this.state;
    let newPosition;
    
    newPosition = position - 1;
    
    this.setState({
      position: newPosition,
      direction: 'prev'
    });

  }

  render() {
    
    const { direction, position, filteredRecs } = this.state;
    const moveCarousel = () => {
      if (direction) {
        return `translateX(${-420 * position}px)`;
      }
      return 'translateX(0%)';
    };
    
    const carouselUl = {
      listStyleType: 'none',
      display: 'flex',
      margin: '0 0 0 0',
      padding: '0px 40px',
      transition: `${'transform 350ms ease-in-out 0s'}`,
      transform: `${moveCarousel()}`
    };
    
    return (
      <div className={CarouselStyle.carouselWrapper} id="wrapper">
                
        <div className={CarouselStyle.youMay}>
          <img src="https://s3.us-east-2.amazonaws.com/carousel-fec/youMay.png"></img>
        </div>
        
        <ul id="ul" style={carouselUl}>
          {this.state.filteredRecs.map((shoe, index) => {
            
            return <Shoe 
              key={index}
              data={shoe}
            />;
          })
          
          }
        </ul>
          
        <div style={{width: '100%'}}>
          {position !== 0 ? <button className={CarouselStyle.buttonLeft} onClick={ () => this.prevSlide() }><Svg /></button> : null}
          {position !== 9 ? <button className={CarouselStyle.buttonRight} onClick={ () => this.nextSlide() }><Svg /></button> : null}
        </div>
        
        <Indicator clickPosition={position} />
      
      </div>
    );
  }
}
export default Carousel;
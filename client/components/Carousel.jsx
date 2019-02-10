import React, {Component} from 'react';
import axios from 'axios';
import Shoe from './Shoe.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 30%;
`;

const Ul = styled.div`
  list-style-type: none;
  display: flex;
  margin: 0px 0px;
  transition: ${(props) => props.sliding ? 'none' : 'transform 0.25s'};
  transform: ${(props) => {
    if (!props.sliding) {
      return 'translateX(calc(-80% - 20px))';
    }
    if (props.direction === 'prev') {
      return 'translateX(calc(2 * (-80% - 20px)))';
    }
    return 'translateX(0%)';
  }}
`;

const ButtonLeft = styled.button`
  background-color: rgba(232, 232, 232, 0.3);
  transition: background-color 0.5s ease-in-out;
  border: black;
  color: rgb(109, 109, 109);
  padding: 15px 17px 10px 17px;
  font-size: 16px;
  border-radius: 50%;
  position: absolute;
  left: 110px;
  top: 270px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  } 

  -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);

`;

const ButtonRight = styled.button`
  background-color: rgba(232, 232, 232, 0.3);
  transition: background-color 0.5s ease-in-out;
  border: black;
  color: rgb(109, 109, 109);
  padding: 15px 17px 10px 17px;
  font-size: 16px;
  border-radius: 50%;
  position: absolute;
  right: 110px;
  top: 270px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  } 
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: [],
      category: 'men_athletic',
      position: 0,
      direction: 'next',
      sliding: false
    };
    this.getOrder = this.getOrder.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.doSliding = this.doSliding.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
    this.getRecommendations = this.getRecommendations.bind(this);
  }

  componentDidMount() {
    this.getRecommendations();
  }

  getOrder(itemIndex) {
    const { position, recommendations } = this.state;
    const numItems = recommendations.length;

    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }

    return itemIndex - position;
  }

  nextSlide() {
    const { position, recommendations } = this.state;
    const numItems = recommendations.length;
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
    // if positon is greater than number of items, will loop back to first position, otherwise, will increase position by 1
  }

  prevSlide() {
    const { position, recommendations } = this.state;
    const numItems = recommendations.length || 1;
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
  }


  doSliding(direction, position) {
    this.setState({
      sliding: true,
      direction: direction,
      position: position
    });
    setTimeout(() => {
      this.setState({
        sliding: false
      });
    }, 25);
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
    const { sliding, direction, position } = this.state;
    return (
      <Wrapper>
        <Ul sliding={sliding} direction={direction}>
          {this.state.recommendations.map((shoe, index) => {
            // console.log('This is the index', index);
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
        {position !== 11 ? <ButtonRight onClick={ () => this.nextSlide() }><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg></ButtonRight> : null}
        {position !== 0 ? <ButtonLeft onClick={ () => this.prevSlide() }><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg></ButtonLeft> : null}
      </Wrapper>
    );
  }
}

export default Carousel;
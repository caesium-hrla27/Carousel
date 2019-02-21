import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import toJson from 'enzyme-to-json';

// Component to be tested
import Carousel from '../client/components/Carousel';

// Configure Enzyme to work with Jest

Enzyme.configure({ adapter: new Adapter() });


const shallow = Enzyme.shallow;
const mount = Enzyme.mount;

describe('Carousel', () => {
  let carousel;

  beforeEach(() => {
    carousel = shallow(<Carousel />);  
  });

  it('should render properly', () => {
    const component = carousel.dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render an image', () => {
    expect(carousel.find('img').length).toEqual(1);
  });

  it('should render an unordered list', () => {
    expect(carousel.find('#ul').length).toEqual(1);
  });

  it('should render an indicator', () => {
    expect(carousel.find('#indicator').length).toEqual(1);
  });

  // beforeEach(() => {
  //   fullCarousel = mount(<Carousel />);
  // });

  // it('should render dynamically generated child components', () => {
  //   expect(fullCarousel.find('Shoe').length).toEqual(12);
  // });



});
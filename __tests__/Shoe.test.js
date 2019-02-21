import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import toJson from 'enzyme-to-json';

// Component to be tested
import Shoe from '../client/components/Shoe';

// Configure Enzyme to work with Jest

Enzyme.configure({ adapter: new Adapter() });

const shallow = Enzyme.shallow;

describe('Shoe', () => {
  let shoe;

  beforeEach(() => {
    shoe = shallow(<Shoe />);  
  });

  it('should render properly', () => {
    const component = shoe.dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render an li', () => {
    expect(shoe.find('#li').length).toEqual(1);
  });

  it('should render an image', () => {
    expect(shoe.find('img').length).toEqual(1);
  });

  it('should render shoeText', () => {
    expect(shoe.find('#shoeText').length).toEqual(1);
  });

  it('should render shoePrices', () => {
    expect(shoe.find('#shoePrices').length).toEqual(1);
  });



  // beforeEach(() => {
  //   fullCarousel = mount(<Carousel />);
  // });

  // it('should render dynamically generated child components', () => {
  //   expect(fullCarousel.find('Shoe').length).toEqual(12);
  // });



});
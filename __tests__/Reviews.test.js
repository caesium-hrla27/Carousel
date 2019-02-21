import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import toJson from 'enzyme-to-json';

// Component to be tested
import Reviews from '../client/components/Reviews';

// Configure Enzyme to work with Jest

Enzyme.configure({ adapter: new Adapter() });

const shallow = Enzyme.shallow;

describe('Reviews', () => {
  let reviews;

  beforeEach(() => {
    reviews = shallow(<Reviews />);  
  });

  it('should render properly', () => {
    const component = reviews.dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render a styled div', () => {
    expect(reviews.find('#stylesDiv').length).toEqual(1);
  });

  it('should render a gray stars element', () => {
    expect(reviews.find('#grayStars').length).toEqual(1);
  });

  it('should render an average stars element', () => {
    expect(reviews.find('#avgStars').length).toEqual(1);
  });

});
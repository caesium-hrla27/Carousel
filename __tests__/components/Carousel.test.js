import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import Carousel from '../client/components/Carousel.jsx';

describe('Carousel', () => {
  let carousel;

  before(() => {
    carousel = shallow(<Carousel />);
  });

  it('Carousel renders nested unordered list', () => {
    expect(carousel.find('ul').length).toEqual(1);
    expect(carousel.find('#indicator').length).toEqual(1);
    expect(carousel.find('#image').length).toEqual(1);
  });
});
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

const shallow = Enzyme.shallow;

import toJson from 'enzyme-to-json';


Enzyme.configure({ adapter: new Adapter() });



// Component to be tested
import Carousel from './Carousel';



describe('<Carousel />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Carousel />);  
  });

  it('renders the component', () => {
    console.log('This is the Carousel', Carousel);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });

});
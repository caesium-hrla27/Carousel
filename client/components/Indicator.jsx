import React, {Component} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  width: 95%;
  margin: 40px 30px 40px 30px;  
  border-bottom: 2px solid rgba(109, 109, 109, 0.25);
  z-index: 1;
  border-radius: 2px;
`;

const Bar = styled.div`
  width: 28%;
  border-bottom: 2px solid black;
  z-index: 2;
  transition: left 2s;
  position: absolute;
  left: ${(props) => {
    console.log(this.props.rightClick);
    if (this.props.rightClick === true) {
      console.log('true');
      return '100px';
    } else if (this.props.rightClick === false) {
      console.log('false');
      return '0px';
    }
  }};
`;
// move 100px each time
class Indicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightClicked: false,
    };
  }

  render() {
    console.log(this.props.rightClick);
    return (
      <Div>
        <Bar>
        </Bar>
      </Div>
    );
  }
}


export default Indicator;
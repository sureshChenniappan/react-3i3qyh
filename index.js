import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Container, CardText, ButtonContainer, FilterHeading, FilterText, FilterIcon, InnerContainer, CheckBoxContainer, TextContainer, Logo} from './stylesContainer';
import {Checkbox} from "@rmwc/checkbox";
import '@rmwc/checkbox/styles';
import CommonFilterUI from "./CommonUIComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <CommonFilterUI> <Checkbox/></CommonFilterUI>
    </div>
    );
  }
}

render(<App />, document.getElementById('root'));

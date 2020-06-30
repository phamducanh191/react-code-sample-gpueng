import React, { Component } from 'react';
import { render } from 'react-dom';
import Savings from './Savings';
import './styles/style.scss';

class App extends Component {
  render() {
    return (
      <div className="react-examples">
        <Savings/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

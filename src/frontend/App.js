import React, { Component } from 'react';
import './App.css';
import Gallery from '../frontend/Components/Gallery/Gallery';
import HomePage from '../frontend/Components/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        <Gallery />
      </div>
    );
  }
}

export default App;

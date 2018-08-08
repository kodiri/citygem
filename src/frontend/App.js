import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Gallery from '../frontend/Components/Gallery/Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Gallery/>
      </div>
    );
  }
}

export default App;

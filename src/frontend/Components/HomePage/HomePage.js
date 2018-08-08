import React from 'react';
import london from '../Images/londonskyline.jpg';
import './HomePage.css';
import NavBar from '../NavBar/NavBar';

class HomePage extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='image-background'>
          <NavBar />
          <img src={london} className='london-image' alt='london' />
          <h2 className='title-citygem'>Search CityGem...</h2>
        </div>
      </header>
    );
  }
}

export default HomePage;
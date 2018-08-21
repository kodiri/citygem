import React from 'react';
import london from '../Images/londonskyline.jpg';
import logoCityGem from '../Images/logoCityGem_negativ.svg';
import './HomePage.css';
import ImageSlider from '../ImageSlider/ImageSlider';

class HomePage extends React.Component {
  render() {
    return (
      <div>
      <header className='header'>
          <div className='container'>
            <div className='logo-city-gem'>
            <img src={logoCityGem} className='logo-citygem' alt='logo-gem'></img>
          </div>
          <div className='image-background'>
            <h2 className='slogan-gem title-citygem shimmer'>
            The greatest gems are always hidden in the most unlikely places...</h2>
            <img src={london} className='london-image' alt='london'></img>
        </div>
        </div>
      </header>
      <ImageSlider/>
      </div>
    );
  }
}

export default HomePage;
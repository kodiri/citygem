import React from 'react';
import london from '../Images/londonskyline.jpg';
import './HomePage.css';
import ImageSlider from '../ImageSlider/ImageSlider';

class HomePage extends React.Component {
  render() {
    return (
      <div>
      <header className='header'>
        <div className='image-background'>
          <img src={london} className='london-image' alt='london' />
        </div>
      </header>
      <ImageSlider/>
      </div>
    );
  }
}

export default HomePage;
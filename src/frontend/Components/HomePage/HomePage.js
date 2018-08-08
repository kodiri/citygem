import React from 'react';
import london from '../Images/londonskyline.jpg';
import './HomePage.css';

class HomePage extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='image-background'>
          <img src={london} className='london-image' alt='london' />
          <h1 className='title-citygem'>Welcome to searching in citygem</h1>
        </div>
      </header>
    );
  }
}

export default HomePage;
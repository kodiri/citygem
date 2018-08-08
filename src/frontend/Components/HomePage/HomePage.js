import React from 'react';
import london from './londonskyline.jpg';
import './HomePage.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className='header'>
        <header className='image-background'>
          <img src={london} className='london-image' alt='london' />
          <h1 className='title-citygem'>Welcome to searching in citygem</h1>
        </header>
      </div>
    );
  }
}

export default HomePage;
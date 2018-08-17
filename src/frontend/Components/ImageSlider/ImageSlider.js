import React, { Component } from 'react';
import './ImageSlider.css';
import Slide from './Slide/Slides';
import Arrow from './Arrows/Arrow';
import Places from '../../../places';

export default class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide() {
        if(this.state.currentIndex === 0) {
            return this.setState({
              currentIndex: Places.length - 1,
              translateValue: (Places.length - 1) * -(this.slideWidth())
            })
          }
          this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue - -(this.slideWidth())
          }));
    }

    goToNextSlide() {
        if(this.state.currentIndex === Places.length - 1) {
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
          }
          this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
          }));
    }

    slideWidth(){
        return document.querySelector('.slide-container').clientWidth
    }

    render() {
        return (
            <div className="slider-container">
                <div className="slider-navbar-container">
                    <ul className="category-navbar">
                        <li>Bar</li>
                        <li>Restaurant</li>
                        <li>Gardens</li>
                        <li>All</li>
                    </ul>
                </div>
                <div className="slider-image-container" style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: 'transform ease-out 0.45s'
                }}>
                    {
                        Places.map((place) => {
                            return <Slide key={place.id} id={place.id} name={place.name} />
                        })
                    }
                </div>
                <div className="left-arrow">
                    <Arrow ChangeSlide={() => this.goToPrevSlide()} />
                </div>
                <div className="right-arrow">
                    <Arrow ChangeSlide={() => this.goToNextSlide()} />
                </div>
            </div>
        )
    }
}
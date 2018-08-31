import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
    render() {
        return (
        <div className='gallery-search'>        
            <div className='container-search' id='search-grid'>
                <div className='centered-pills clearfix'>
                    <ul className='nav-search search-nav-pills' >
                        <li><a href='_blank' className='filter active' data-filter='.all'>City Gems</a></li>
                        <li><a href='_blank' className='filter' data-filter='.gardens'>Gardens</a></li>
                        <li><a href='_blank' className='filter' data-filter='.bars'>Bars</a></li>
                        <li><a href='_blank' className='filter' data-filter='.restaurants'>Restaurants</a></li>
                        <li><a href='_blank' className='filter' data-filter='.antiques'>Antiques</a></li>
                        <li><a href='_blank' className='filter' data-filter='.shops'>Another City Gems</a></li>
                    </ul>
                </div>
            </div>
      </div>
        )
    }
}

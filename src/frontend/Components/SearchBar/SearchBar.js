import React from 'react';
import './SearchBar.css';
import searchIcon from '../Images/searchIcon.svg';

export default function SearchBar(props) {

    return (
        <div className='nav-pill-container'>
            <ul className='nav-search' >
                <li><div className='filter' onClick={() => props.onClick('')}>City Gems</div></li>
                <li><div className='filter' onClick={() => props.onClick('garden')}>Gardens</div></li>
                <li><div className='filter' onClick={() => props.onClick('bar')}>Bars</div></li>
                <li><div className='filter' onClick={() => props.onClick('restaurant')}>Restaurants</div></li>
                <li><div className='filter' onClick={() => props.onClick('Antiques')}>Antiques</div></li>
                <li>
                    <div className='filter' onClick={() => props.onClick('changeSearchBar')}>
                        <img className="search-icon" src={searchIcon} alt='search button'/>
                    </div>
                </li>
            </ul>
        </div>
    )
}

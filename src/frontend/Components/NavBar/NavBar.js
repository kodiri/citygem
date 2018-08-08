import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
       <nav>
             <ul className="nav-textbox">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Explore</li>
                <li className="nav-item">News</li>
             </ul>
       </nav>
    )
 }
 
 export default NavBar;
import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (
       <nav>
             <ul className="nav-textbox">
                <Link to="/"><li className="nav-item">Home</li></Link>
                <Link to="/about"><li className="nav-item">About</li></Link>
                <Link to="/explore"><li className="nav-item">Explore</li></Link>
                <li className="nav-item">News</li>
             </ul>
       </nav>
    )
 }
 
 export default NavBar;
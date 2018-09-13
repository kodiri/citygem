import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar(props) {

      let pageClass = props.page === 'gallery' ? 'gallery-nav-item' : 'nav-item';

    return (
       <nav>
             <ul className="nav-textbox">
                <Link to="/"><li className={pageClass}>Home</li></Link>
                <Link to="/about"><li className={pageClass}>About</li></Link>
                <Link to="/explore"><li className={pageClass}>Explore</li></Link>
                <Link to="/about"><li className={pageClass}>News</li></Link>
             </ul>
       </nav>
    )
 }
 
 export default NavBar;
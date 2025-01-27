/*import React from 'react';
import logo from '../assets/Pizza.jpg';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
      <div className="leftSide">
        <img src={logo} alt="Pizza Logo" />
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar;*/




/*import React from 'react';
import logo from '../assets/Pizza.jpg';
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="leftSide">
        <img src={logo} alt="Pizza Logo" />
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar;*/
import React from 'react';
import logo from '../assets/Pizza.jpg';
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';
//import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar() {
  return (
    <nav className='navbar'>
      <div className="leftSide">
        <img src={logo} alt="Pizza Logo" />
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
       
      </div>
    </nav>
  );
}

export default Navbar;



/*import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'; 
import Bannerimage from "../assets/pizza.jpg";
function Home() {
  return (
    <div className="home"> 
      <div className="headercontainer" style={{backgroundImage:`url(${Bannerimage })`}}>
        <h1>Beamlak Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button>
            ORDER NOW
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
*/
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/home.css';
import Bannerimage from "../assets/pizza.jpg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Bannerimage})` }}
>
      <div
        className="headercontainer"
        
      
      >
        
        <div className="text-container">
          <h1>BEAMLAK PIZZARIA</h1>
          <p>PIZZA TO FIT ANY TASTE</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

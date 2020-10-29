import './Nav.css';
import { BrowserRouter as Router, Link } from "react-router-dom";

function Nav() {
    return (
        
      <div className="navHeader">
        Country Honing Resource
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/map">Map</Link>
      </div>
    
      
    );
  }
  
  export default Nav;
  
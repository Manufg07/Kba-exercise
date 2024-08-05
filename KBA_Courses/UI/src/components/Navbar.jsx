import kba from '../assets/kbalogo.png'
import { Link } from 'react-router-dom'
import Logout from './Logout'
import "../App.css";

const Navbar = () =>{
    return (
      <>
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="logo.png" alt="logo" className="logo-image" />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/Course" className="nav-link">
              Courses
            </Link>
            <Link to="/Contact" className="nav-link">
              Contact Us
            </Link>
            <Link to="/Add" className="nav-link">
              Add Course
            </Link>
            <button className="logout-btn">Logout</button>
          </div>
        </div>
      </>
    );
}

export default Navbar
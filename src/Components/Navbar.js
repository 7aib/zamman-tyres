import React, {useState} from "react";
import logo from '../images/logo.png';
import { Link } from "react-scroll";


function Navbar(){

    const [nav, setnav ] = useState(false);
    const changeBackground = () => {
        if(window.screenY >= 50 ){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return(
        <nav className={nav ? "nav ":"nav-active"}>
            <Link to="#" className="logo">
                <img src={logo} alt=""/>
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="main" smooth={true} duration={1000}>Header</Link></li>
                <li><Link to="features" smooth={true} duration={1000}>Features</Link></li>
                <li><Link to="offer" smooth={true} duration={1000}>Offer</Link></li>
                <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;
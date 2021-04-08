import React from 'react';
import avatar from '../img/avatar2.JPG';
import {NavLink} from 'react-router-dom';

function Navbar(props) {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item" onClick={props.toggle}>
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item" onClick={props.toggle}>
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item" onClick={props.toggle}>
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item" onClick={props.toggle}>
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        Made with ReactJS
                    </p>
                </footer>
            </nav>
        </div>
    )
}

export default Navbar;

import React from 'react';
import Navbar from 'react-bootstrap/Navbar'; 
import './Header.css';

const Header = () => {
    return (
        <header>
            <Navbar fluid className="navbar navbar-light bg-light">
                <a className="navbar-brand">Employee Tracker</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </Navbar>
        </header>
    ); 
}; 

export default Header; 
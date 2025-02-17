import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <link to="/" className="navbar-logo">
                Corey <i className="fab fa-typo3"/>
                </link>
            </div>
        </nav>
    </>
  )
}

export default Navbar;

import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div className='header'>
            <div className="container">
                <div className="logo">
                    <h1><span>D</span>ream<span>C</span>lub</h1>
                </div>

                <nav>
                    <div className="menu">
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Services</a></li>
                            <li><a href='#'>Portfolio</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav

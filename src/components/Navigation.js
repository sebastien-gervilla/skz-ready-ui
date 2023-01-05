import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul>
                <li><NavLink to='/' className='animated'>Home</NavLink></li>
                <li><NavLink to='/' className='animated'>Store</NavLink></li>
                <li><NavLink to='/contact' className='animated'>Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;
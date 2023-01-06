import React from 'react';
import { NavLink } from 'react-router-dom';
import useTranslate from '../hooks/useTranslate';

const Navigation = () => {

    const translate = useTranslate('nav.');

    const getLinkClass = ({ isActive }) => isActive ? 'currentPath' : '';

    return (
        <nav className='navigation'>
            <ul>
                <li>
                    <NavLink to='/' className={getLinkClass}>
                        {translate('home')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/store' className={getLinkClass}>
                        {translate('store')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={getLinkClass}>
                        {translate('contact')}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
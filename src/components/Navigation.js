import React from 'react';
import { NavLink } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import { useNavigate } from 'react-router-dom';
import { BiStopwatch, BiUser } from 'react-icons/bi';
import { GoGear } from 'react-icons/go';
import { MdWbSunny } from 'react-icons/md';
import { HiOutlineMoon } from 'react-icons/hi';

const Navigation = () => {

    const theme = useTheme();
    const navigate = useNavigate();

    const displayDarkModeIcon = () => theme.isDark ?
        <MdWbSunny id='light-mode_icon' onClick={theme.toggle} /> :
        <HiOutlineMoon id='dark-mode_icon' onClick={theme.toggle} />

    return (
        <nav className='navigation'>
            <ul>
                <li><NavLink className='animated'>Home</NavLink></li>
                <li><NavLink className='animated'>Store</NavLink></li>
                <li><NavLink className='animated'>Contact</NavLink></li>
            </ul>

            <div className="buttons">
                <button>{displayDarkModeIcon()}</button>
                <button onClick={() => navigate('/parameters')} ><GoGear id='parameters_icon'/></button>
                <button><BiUser id='user_icon'/></button>
            </div>
        </nav>
    );
};

export default Navigation;
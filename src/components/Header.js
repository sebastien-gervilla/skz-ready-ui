import React from 'react';
import Navigation from './Navigation';
import useTheme from '../hooks/useTheme';
import { BiStopwatch, BiUser } from 'react-icons/bi';
import { IoLanguage } from 'react-icons/io5';
import { MdWbSunny } from 'react-icons/md';
import { HiOutlineMoon } from 'react-icons/hi';

const Header = () => {

    const theme = useTheme();

    const displayDarkModeIcon = () => theme.isDark ?
        <MdWbSunny id='light-mode_icon' onClick={theme.toggle} /> :
        <HiOutlineMoon id='dark-mode_icon' onClick={theme.toggle} />

    return (
        <header className='app-header'>
            <div className="header-content">
                <div className="brand">
                    <BiStopwatch />
                    <h1>Ready UI</h1>
                </div>

                <Navigation />

                <div className="buttons">
                    <button><IoLanguage id='language_icon' /></button>
                    <button>{displayDarkModeIcon()}</button>
                    <button><BiUser id='user_icon'/></button>
                </div>
            </div>
        </header>
    );
};

export default Header;
import React, { useRef, useState } from 'react';
import Navigation from './Navigation';
import useTheme from '../hooks/useTheme';
import { BiStopwatch, BiUser } from 'react-icons/bi';
import { IoLanguage } from 'react-icons/io5';
import { MdWbSunny } from 'react-icons/md';
import { HiOutlineMoon } from 'react-icons/hi';
import { Popup } from 'skz-ui';
import LanguageMenu from './LanguageMenu';

const Header = () => {

    const theme = useTheme();
    
    const langRef = useRef(null);
    const [popup, setPopup] = useState({
        isOpen: false,
        onClose: () => setPopup({...popup, isOpen: false})
    });

    const handleOpenPopup = () => setPopup({...popup, isOpen: true});

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
                    <button ref={langRef} onClick={handleOpenPopup}><IoLanguage id='language_icon' /></button>
                    <button>{displayDarkModeIcon()}</button>
                    <button><BiUser id='user_icon'/></button>
                </div>
            </div>
            <Popup 
                open={popup.isOpen}
                anchor={langRef.current}
                onClose={popup.onClose}
                body={<LanguageMenu />}
                position={{
                    origin: {
                        vertical: 'bottom',
                        horizontal: 'center'
                    },
                    transform: {
                        vertical: 'top',
                        horizontal: 'center'
                    },
                    gap: {
                        vertical: 20
                    }
                }}
            />
        </header>
    );
};

export default Header;
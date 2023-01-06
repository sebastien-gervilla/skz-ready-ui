import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageMenu = () => {

    const { i18n } = useTranslation();

    const languages = ['French', 'English'];

    const handleChangeLanguage = event => i18n.changeLanguage(event.target.value);

    const displayLanguages = () => languages.map(language => 
        <div key={language} className="language">
            <button 
                value={language}
                onClick={handleChangeLanguage}
                className={
                    language === i18n.language ?
                        'current-language' : ''
                }
            >
                {language}
            </button>
        </div>
    );

    console.log(i18n.language);

    return (
        <div className="language-menu">
            {displayLanguages()}
        </div>
    )
}

export default LanguageMenu;
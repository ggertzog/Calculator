import './Header.css';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';


export default function Header() {

    const { handleChangeTheme, theme } = useContext(ThemeContext);

    return (
        <header className='header'>
            <label>
                <input className='checkbox' type='checkbox' onClick={handleChangeTheme}/>
                <span className='checkbox__span'></span>
            </label>
            <h1 className={`header__text header__text_theme_${theme ? 'dark' : 'light'}`}>CΛLCULΛTOR</h1>
        </header>
    )
}

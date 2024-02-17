import './BackButton.css';
import React, { useContext } from 'react'
import { NumberContext } from '../../contexts/NumberProvider'
import { ThemeContext } from '../../contexts/ThemeProvider';

export default function BackButton() {

    const { handleBackButton } = useContext(NumberContext);
    const { theme } = useContext(ThemeContext);

    return (
        <button className={`calculator__button back-button_type_${theme ? 'dark' : 'light'}`} type='button' onClick={() => handleBackButton()}>&#8592;</button>
    )
}

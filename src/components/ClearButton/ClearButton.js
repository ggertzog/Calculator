import './ClearButton.css';
import React, { useContext } from 'react';
import { NumberContext } from '../../contexts/NumberProvider';
import { ThemeContext } from '../../contexts/ThemeProvider';

export default function ClearButton() {

    const { handleClearValue } = useContext(NumberContext);
    const { theme } = useContext(ThemeContext);

    return (
        <button className={`calculator__button clear-button_type_${theme ? 'dark' : 'light'}`} type='button' onClick={() => handleClearValue()}>C</button>
    )
}

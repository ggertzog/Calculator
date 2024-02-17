import './EqualButton.css'
import React, { useContext } from 'react';
import { NumberContext } from '../../contexts/NumberProvider';
import { ThemeContext } from '../../contexts/ThemeProvider';

export default function EqualButton() {

    const { doMath } = useContext(NumberContext);
    const { theme } = useContext(ThemeContext);

    return (
        <button className={`equal-button equal-button_type_${theme ? 'dark' : 'light'}`} type='button' onClick={() => doMath()}>=</button>
    )
}

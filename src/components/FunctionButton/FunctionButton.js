import './FunctionButton.css';
import React, { useContext } from 'react';
import { NumberContext } from '../../contexts/NumberProvider';
import { ThemeContext } from '../../contexts/ThemeProvider';

export default function FunctionButton({buttonValue}) {

    const { handleSetCalcFunction } = useContext(NumberContext);
    const { theme } = useContext(ThemeContext);

    return (
        <button className={`calculator__button calculator__button_type_${theme ? 'dark-blue' : 'blue'}`} type='button' onClick={() => handleSetCalcFunction(buttonValue)}>
            {buttonValue}
        </button>
    )
}

import './NumberButton.css';
import React, { useContext } from 'react'
import { NumberContext } from '../../contexts/NumberProvider';
import { ThemeContext } from '../../contexts/ThemeProvider';

export default function NumberButton({buttonValue}) {

  const { handleSetDisplayValue } = useContext(NumberContext);
  const { theme } = useContext(ThemeContext);

  return (
    <button className={`calculator__button calculator__button_type_${theme ? 'dark' : 'light'}`} type='button' onClick={() => handleSetDisplayValue(buttonValue)}>
      {buttonValue}
    </button>
  )
}

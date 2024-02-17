import './Display.css'
import React, { useContext } from 'react';
import { NumberContext } from '../../contexts/NumberProvider';
import { ThemeContext } from '../../contexts/ThemeProvider';
// import { useForm } from '../../hooks/useForm';

export default function Display() {

  const { number, storedNumber } = useContext(NumberContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`display display_type_${theme ? 'dark' : 'light'}`}>
      <h2 className='display__number'>{!number.length && !storedNumber ? '0' : number || storedNumber}</h2>
    </div>
  )
}

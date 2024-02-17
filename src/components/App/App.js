import './App.css';
import React, { useContext } from 'react';

import NumberProvider from '../../contexts/NumberProvider';

import Calculator from '../Calculator/Calculator';
import Header from '../Header/Header';
import { ThemeContext } from '../../contexts/ThemeProvider';

export default function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <NumberProvider >
      <div className={`body body_theme_${theme ? 'dark' : 'light'}`}>
        <Header />
        <Calculator />
      </div>
    </NumberProvider>
  )
}

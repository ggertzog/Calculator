import './Calculator.css';

import React, { useContext } from 'react';

import BackButton from '../BackButton/BackButton';
import ClearButton from '../ClearButton/ClearButton';
import EqualButton from '../EqualButton/EqualButton';
import FunctionButton from '../FunctionButton/FunctionButton';
import NumberButton from '../NumberButton/NumberButton';
import Display from '../Display/Display';
import { ThemeContext } from '../../contexts/ThemeProvider';

export default function Calculator() {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`calculator calculator_type_${theme ? 'dark' : 'light'}`}> 
            <div className='calculator__display'>
                <Display />
            </div>
            <div className='calculator__numpad'>
                <ClearButton />
                <BackButton />
                <FunctionButton buttonValue='%'/> {/* Здесь будет %*/}
                <FunctionButton buttonValue='÷'/> {/* Здесь будет / разделить */}
                <NumberButton buttonValue={7}/>
                <NumberButton buttonValue={8}/>
                <NumberButton buttonValue={9}/>
                <FunctionButton buttonValue='×'/> {/* здесь будет умножить */}
                <NumberButton buttonValue={4}/>
                <NumberButton buttonValue={5}/>
                <NumberButton buttonValue={6}/>
                <FunctionButton buttonValue='-'/> {/* здесь будет минус */}
                <NumberButton buttonValue={1}/>
                <NumberButton buttonValue={2}/>
                <NumberButton buttonValue={3}/>
                <FunctionButton buttonValue='+'/> {/* здесь будет плюс */}
                <NumberButton buttonValue={0}/>
                <NumberButton buttonValue=',' />
                <div className='calculator__equal-button'>
                    <EqualButton />
                </div>
            </div>
        </div>
    )
}

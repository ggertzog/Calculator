import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(false);


    const handleChangeTheme = () => {
        setTheme(prevState => !prevState);
    }

    return (
        <ThemeContext.Provider value={{theme, handleChangeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
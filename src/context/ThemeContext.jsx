import { createContext, useContext, useState } from "react";

// create a theme context -- to apply either day/night themes
export const ThemeContext = createContext();

// custom hook to consume the context
export const useTheme = () => useContext(ThemeContext);

// context wrapper
const ThemeProvider = props => {
    // state variable to keep track of the them
    const [themeName, setThemeName] = useState("day");

    return (
        <ThemeContext.Provider value={{ themeName, setThemeName }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

import { createContext, useContext, useState } from "react";

// create a climate context for
export const ClimateContext = createContext();

// custom react hook to consume context above
export const useClimate = () => useContext(ClimateContext);

// provider component to provide context to other components
const ClimateProvider = ({ children }) => {

    // state variable to keep track of temperature changes; default 50
    const [temperature, setTemperature] = useState(50);

    return (
        <ClimateContext.Provider value={{ temperature, setTemperature }}>
            { children }
        </ClimateContext.Provider>
    );
};

export default ClimateProvider;

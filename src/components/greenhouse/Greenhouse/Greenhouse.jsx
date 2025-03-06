import { useTheme } from '../../../context/ThemeContext';


import dayTime from '../../../assets/greenhouse-day.jpg';
import nightTime from '../../../assets/greenhouse-night.jpg';

import ClimateStats from '../ClimateStats/ClimateStats';
import LightSwitch from '../LightSwitch/LightSwitch';
import './Greenhouse.css';

const Greenhouse = () => {
    // get the theme stuff
    const { themeName } = useTheme();

    // state
    return (
        <div className="greenhouse">
            <img src={themeName === "day" ? dayTime: nightTime} alt="greenhouse" />

            <LightSwitch />
            <ClimateStats />
        </div>
    );
};

export default Greenhouse;

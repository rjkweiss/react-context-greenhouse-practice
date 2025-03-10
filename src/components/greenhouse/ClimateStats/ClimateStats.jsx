import { useClimate } from '../../../context/ClimateContext';

import './ClimateStats.css';

const ClimateStats = () => {
    const { temperature, humidity } = useClimate();

    return (
        <div className="climate-stats">
            <div className="temperature">
                Temperature {temperature} &deg;F
            </div>
            <div className="humidity">
                Humidity {humidity} %
            </div>
        </div>
    );
};

export default ClimateStats;

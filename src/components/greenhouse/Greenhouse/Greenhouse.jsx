import dayTime from '../../../assets/greenhouse-day.jpg';
import ClimateStats from '../ClimateStats/ClimateStats';
import LightSwitch from '../LightSwitch/LightSwitch';
import './Greenhouse.css';

const Greenhouse = () => {
    return (
        <div className="greenhouse">
            <img src={dayTime} alt="greenhouse" />

            <LightSwitch />
            <ClimateStats />
        </div>
    );
};

export default Greenhouse;

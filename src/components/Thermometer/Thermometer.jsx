import { useClimate } from '../../context/ClimateContext';
import ClimateSlider from '../ClimateSlider/ClimateSlider';

const Thermometer = () => {

    // get temperature value from context
    const { temperature, setTemperature } = useClimate();

    return (
        <ClimateSlider
            climate='Temperature'
            unit={`\u00b0F`}
            max={120}
            defaultValue={50}
            value={temperature}
            setValue={setTemperature}
        />
    );
};

export default Thermometer;

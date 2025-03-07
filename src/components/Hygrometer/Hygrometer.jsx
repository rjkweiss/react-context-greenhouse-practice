import { useClimate } from '../../context/ClimateContext';
import ClimateSlider from '../ClimateSlider/ClimateSlider';

const Hygrometer = () => {

    // get humidity from climate context
    const { humidity, setHumidity } = useClimate();

    return (
        <ClimateSlider
            climate='Humidity'
            unit='%'
            max={100}
            defaultValue={40}
            value={humidity}
            setValue={setHumidity}
        />
    );
};

export default Hygrometer;

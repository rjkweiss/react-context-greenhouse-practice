import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import { useClimate } from '../../context/ClimateContext';
import './Thermometer.css';

const Thermometer = () => {

    // get temperature value from context
    const { temperature, setTemperature } = useClimate();

    return (
        <div className="thermometer">
            <h2>Thermometer</h2>
            <div className="actual-temperature">
                Actual Temperature {temperature} &deg;F;
            </div>

            <div className="thermometer-slider">
                <Slider
                    vertical
                    min={0}
                    max={120}
                    value={temperature}
                    onChange={setTemperature}
                    styles={{
                        rail: {
                            backgroundColor: "gray",
                            width: "15px",
                            borderRadius: "999px",
                            transform: "translateX(-50%)",
                        },

                        track: {

                            backgroundColor: "red",
                            borderRadius: "999px",
                            width: "15px",
                            transform: "translateX(-50%)",
                        },

                        handle: {
                            textAlign: "center",
                            cursor: "grab",
                            transform: "translate(-50%, 50%)",
                        }
                    }}
                    handleRender={(node, { value }) => (
                        <div {...node.props} className='thermometer-thumb'>{value}</div>
                    )}
                />
            </div>
        </div>
    );
};

export default Thermometer;

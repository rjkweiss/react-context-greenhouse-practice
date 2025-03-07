import Slider from 'rc-slider';
import { useState, useEffect } from 'react';
import { useClimate } from '../../context/ClimateContext';
import "rc-slider/assets/index.css";
import './Thermometer.css';

const Thermometer = () => {

    // get temperature value from context
    const { temperature, setTemperature } = useClimate();

    // track desired temperature
    const [desiredTemp, setDesiredTemp] = useState(temperature);

    useEffect(() => {
        // if we have reached the ideal temp, stop updating
        if (temperature === desiredTemp) return;

        // adjust the actual temp by 1°F per second
        const timer = setTimeout(() => {
            setTemperature((currTemp) => currTemp < desiredTemp ? currTemp + 1 : currTemp - 1);
        }, 1000);

        // clear out the timer
        return () => clearTimeout(timer);

    }, [temperature, desiredTemp]);

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
                    value={desiredTemp}
                    onChange={setDesiredTemp}
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

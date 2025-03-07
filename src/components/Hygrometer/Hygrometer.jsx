import Slider from 'rc-slider';

import { useState, useEffect } from 'react';
import { useClimate } from '../../context/ClimateContext';

import 'rc-slider/assets/index.css';
import './Hygrometer.css';

const Hygrometer = () => {
    // get humidity from climate context
    const { humidity, setHumidity } = useClimate();

    // set desired humidity
    const [desiredHumidity, setDesiredHumidity] = useState(humidity);

    // update the humidity to ideal user setting by 1% every second
    useEffect(() => {
        // check ideal humidity
        if (humidity === desiredHumidity) return;

        // use a timer to update the humidity
        const timer = setTimeout(() => {
            setHumidity((currHumidity) => currHumidity < desiredHumidity ? currHumidity + 1 : currHumidity - 1);
        }, 1000);

        // clean up the timer
        return () => clearTimeout(timer);

    }, [humidity, desiredHumidity]);


    return (
        <div className="hygrometer-container">
            <h2>Humidity</h2>
            <div className="actual-humidity">
                Actual Humidity: {humidity}%;
            </div>
            <div className="humidity-slider">
                <Slider
                    vertical
                    min={0}
                    max={100}
                    defaultValue={40}
                    value={desiredHumidity}
                    onChange={setDesiredHumidity}
                    step={1}
                    styles={{
                        track: {
                            backgroundColor: "red",
                            width: "15px",
                            borderRadius: "999px",
                            transform: "translateX(-50%)",
                        },
                        rail: {
                            backgroundColor: "gray",
                            height: "100%",
                            width: "15px",
                            borderRadius: "999px",
                            transform: "translateX(-50%)",
                        },
                        handle: {
                            textAlign: "center",
                            cursor: "grab",
                            transform: "translate(-50%, 50%)",
                        }
                    }}
                    handleRender={(node, { value }) => (
                        <div {...node.props} className="humidity-thumb">{value}</div>
                    )}
                />
            </div>

        </div>
    );
};

export default Hygrometer;

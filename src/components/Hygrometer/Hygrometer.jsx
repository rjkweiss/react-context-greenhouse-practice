import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { useClimate } from '../../context/ClimateContext';

import './Hygrometer.css';

const Hygrometer = () => {
    // get humidity from climate context
    const { humidity, setHumidity } = useClimate();

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
                    value={humidity}
                    onChange={setHumidity}
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

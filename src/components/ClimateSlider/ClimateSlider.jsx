import Slider from 'rc-slider';

import { useState, useEffect } from 'react';

import 'rc-slider/assets/index.css';
import './ClimateSlider.css';

const ClimateSlider = ({ climate, unit, max, defaultValue, value, setValue, }) => {

    // state for desired value (set by user)
    const [desiredValue, setDesiredValue] = useState(value);

    useEffect(() => {
        // stop updating once we reach the desired value
        if (value === desiredValue) return;

        // adjust desired value by 1 each second
        const timer = setTimeout(() => {
            setValue((currentVal) => currentVal < desiredValue ? currentVal + 1 : currentVal - 1);
        }, 1000);

        // clean up the timer after it's done
        return () => clearTimeout(timer);

    }, [desiredValue, value, setDesiredValue])

    return (
        <div className="climate-container">

            {/* heading */}
            <h2>{climate}</h2>

            {/* display current temperature */}
            <div className="actual-climate">
                Actual {climate}: {value}{unit}
            </div>

            {/* slider component  */}
            <div className="climate-slider">
                <Slider
                    vertical
                    min={0}
                    max={max}
                    defaultValue={defaultValue}
                    value={desiredValue}
                    onChange={setDesiredValue}
                    styles={{
                        track: {
                            backgroundColor: "red",
                            width: "15px",
                            borderRadius: "999px",
                            position: "absolute",
                            transform: "translateX(-50%)"
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
                        <div {...node.props} className="climate-thumb">{value}</div>
                    )}
                />
            </div>

        </div>
    );
};

export default ClimateSlider;

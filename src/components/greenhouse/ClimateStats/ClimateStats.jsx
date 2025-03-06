import './ClimateStats.css';

const ClimateStats = () => {
    return (
        <div className="climate-stats">
            <div className="temperature">
                Temperature {'X'} &deg;F;
            </div>
            <div className="humidity">
                Humidity { 'Y'} %;
            </div>
        </div>
    );
};

export default ClimateStats;

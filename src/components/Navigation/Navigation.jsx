import { NavLink } from "react-router-dom";

import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <NavLink end to='/'>Greenhouse</NavLink>
            <NavLink to='/thermometer'>Thermometer</NavLink>
            <NavLink to='/hygrometer'>Hygrometer</NavLink>
        </nav>
    );
};

export default Navigation;

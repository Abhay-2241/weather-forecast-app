import React from "react";
import { useWeather} from "../context/Weather";

const Input = () => {

    const Weather = useWeather() ;
    console.log("Weather" , Weather);

    return (
        <input className="input-field"
        placeholder=" Enter City"
        value = {Weather.searchCity}
        onChange={  (e) => Weather.setSearchCity(e.target.value)}
        /> 

    );
};
export default Input;
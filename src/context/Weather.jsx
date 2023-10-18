import { createContext, useContext , useState} from "react";
import { getWeatherdataforCity , getWeatherdataforLocation} from '../api/index'
const WeatherContext = createContext(null);

export  const useWeather = () => {
    return useContext(WeatherContext);
};

 export const Weatherprovider = (props) => {
    const [data , setData] = useState(null);
    const [searchCity , setSearchCity] = useState();
    
    const fetchData = async () => {
        const response = await getWeatherdataforCity(searchCity);
        setData(response);
    } 

    const fetchUserLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherdataforLocation(
                position.coords.latitude ,
                 position.coords.longitude
                 ).then((data) => setData(data));
                })
    }
    
    
    
    return (
    <WeatherContext.Provider value={{searchCity,data,setSearchCity, fetchData, fetchUserLocation}}>{props.children}</WeatherContext.Provider>
    );     
};

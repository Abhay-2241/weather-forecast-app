const baseURL = "https://api.weatherapi.com/v1/current.json?key=887f694a06e04970907191343230710"

export const getWeatherdataforCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes` )
    return await response.json()

};
export const getWeatherdataforLocation = async (lat,lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes` )
    return await response.json()

};
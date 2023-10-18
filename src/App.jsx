import Card from './components/Card'
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';
import './App.css'

function App() {

  const weather = useWeather();

  useEffect(() => { //get current location
    weather.fetchUserLocation();
  },[]);
  
  

  return (
    <>
      <h1> weather app</h1>

      <Input/>
      
      
      <Button onClick = {weather.fetchData} value = "search"/>

      <Card/>
      <Button  value = "refresh"/>
      
      
    </>
  )
}

export default App;

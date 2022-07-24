import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import SearchBar from './components/SearchBar';
import TopCities from './components/TopCities';
import TimeLocation from './components/TimeLocation';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { useEffect, useState } from "react"
import { FeedSummary } from 'semantic-ui-react';


function App() {
  const [ weatherDisplay, setWeatherDisplay ] = useState({})
  const [ city, setCity ] = useState('London')

  const searchCity = () => {
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
      };
      
      const weatherURL = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`
      
      fetch(weatherURL, options)
      .then(resp => resp.json())
      .then(data => formatWeatherData(data))
      .catch(err => console.error(err));
    }

  useEffect(() => {
      searchCity()
      
    }, [city])


  const formatWeatherData = (data) => {
    const {
        condition: {
          icon,
          text
        },
        feelslike_f, 
        gust_mph, 
        humidity, 
        wind_mph
      } = data.current
  
      const { 
        forecast
      } = data
  
      const {
        country, 
        localtime, 
        name, 
        region
      } = data.location

      let newDataArray = [icon, text, feelslike_f, gust_mph, humidity, wind_mph, forecast, country, localtime, name, region]
      setWeatherDisplay(newDataArray)
    }


  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400"> 
      <TopCities />
      <SearchBar />  
      <TimeLocation weatherDisplay={weatherDisplay} />
      <CurrentWeather />
      <Forecast  />
    </div>
  );
}

export default App;

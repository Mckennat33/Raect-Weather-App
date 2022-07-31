import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import FeedSummary from 'semantic-ui-react';
import TimeLocation from './components/TimeLocation';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { useEffect, useState } from "react"
import { UilSearchAlt, UilMapMarkerAlt } from '@iconscout/react-unicons'

function App() {
  const [ weatherDisplay, setWeatherDisplay ] = useState({})
  const [ input, setInput ] = useState('')
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
      .then(data =>  formatWeatherData(data))
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
        temp_f,
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

      const newDataArray = { icon, text, feelslike_f, gust_mph, humidity, temp_f, wind_mph, forecast, country, localtime, name, region }

      console.log(newDataArray)

      setWeatherDisplay(newDataArray)
    }

    

    function handleSubmit(e) {
      e.preventDefault()
      setCity(input)
    } 
  

  return (

    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400"> 

    <div className='flex flex-row justify-center my-6 '>
    <form 
        className='flex flex-row w-3/4 items-center justify-center space-x-4'
        onSubmit={ handleSubmit }
    >
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
                type="text" 
                className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
                placeholder='Search...'
                onChange={e => setInput(e.target.value)}
            />
            <UilSearchAlt size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
            <UilMapMarkerAlt size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='text-xl text-white font-light'>°C</button>
            <p className='text-xl text-white mx-1 '> | </p>
            <button name='imperial' className='text-xl text-white font-light'
            >F°</button>
            
        </div>
    </form>
</div>

      {/* <TopCities /> 
      <SearchBar />   */}
      <TimeLocation weatherDisplay={ weatherDisplay } />
      <CurrentWeather weatherDisplay={ weatherDisplay } />
      <Forecast  />      
    </div>
  );
}

export default App; 


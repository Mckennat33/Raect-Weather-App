import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import SearchBar from './components/SearchBar';
import TopCities from './components/TopCities';
import TimeLocation from './components/TimeLocation';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { useEffect, useState } from "react"

function App() {
  const [ input, setInput ] = useState('')
  const [ city, setCity ] = useState('London')
  const [ weatherDisplay, setWeatherDisplay ] = useState({})
  const [test, setTest ] = useState("")
  
  useEffect(() => {
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
          .then(data => setWeatherDisplay(data))
          // .catch(err => console.error(err));
  }, [])

  console.log(weatherDisplay)



  //console.log(weatherDisplay)

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopCities />
      <SearchBar setCity={setCity} setInput={setInput} setWeatherDisplay={setWeatherDisplay} />
      <TimeLocation  />
      <CurrentWeather />
      <Forecast  />
      {/* <Forecast title="Daily forecast" /> */}
    </div>
  );
}

export default App;

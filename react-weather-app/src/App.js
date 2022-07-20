import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import SearchBar from './components/SearchBar';
import TopCities from './components/TopCities';
import TimeLocation from './components/TimeLocation';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';


function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopCities />
      <SearchBar />
      <TimeLocation />
      <CurrentWeather />
      <Forecast  />
      {/* <Forecast title="Daily forecast" /> */}
    </div>
  );
}

export default App;

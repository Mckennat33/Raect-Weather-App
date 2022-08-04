import React from 'react'
import { useState } from 'react'
import {
    UilArrowUP, 
    UilArrowDown, 
    UilTemperatureEmpty, 
    UilTear, 
    UilWind, 
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons"
// import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils'


function CurrentWeather({ weatherDisplay }) {
    const [ forecast, setForecast ] = useState([])
    
    // console.log(weatherDisplay.hour)
    // console.log(Object.values(weatherDisplay.hour))

    return (
        <div>

            <div className='flex item-center justify-center py-6 text-xl text-cyan-300'>
                <p>{weatherDisplay.text}</p>
            </div>
            
            <div className='flex flex-row items-center justify-between text-white py-3'>
                <img 
                // src="https://icons-for-free.com/iconfiles/png/512/sunny+temperature+weather+icon-1320196637430890623.png" 
                src={weatherDisplay.icon}
                className='w-20'
                />
                <p className='text-5xl '>{weatherDisplay.temp_f?.toFixed()}°</p>
                <div className='flex flex-col space-y-2'>

                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTemperatureEmpty size={18} className="mr-1" />
                        Real fell: 
                        <span className='font-medium ml-1'>{weatherDisplay.feelslike_f?.toFixed()}°</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className='font-medium ml-1'>{weatherDisplay.humidity?.toFixed()}%</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilWind size={18} className="mr-1" />
                        Wind Speed:
                        <span className='font-medium ml-1'>{weatherDisplay.gust_mph?.toFixed()} mp/h</span>
                    </div>

                </div>
            </div>
        
        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>

            <UilSun />
            <p className='font-light'>Rise: {weatherDisplay.sunrise}</p>
            <p className='font-light'>|</p>

            <UilSunset />
            <p className='font-light'>Set: {weatherDisplay.sunset}</p>
            <p className='font-light'>|</p>
            
            <UilSun />
            <p className='font-light'>Low: {weatherDisplay.mintemp_f?.toFixed()}</p>
            <p className='font-light'>|</p>
            
            <UilSun />
            <p className='font-light'>Rise: {weatherDisplay.maxtemp_f?.toFixed()}</p>
            <p className='font-light'>|</p>

        </div>

        </div>
    )
}

export default CurrentWeather;

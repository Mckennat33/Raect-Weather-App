
import React from 'react'
import {useEffect, useState} from "react"


function TimeLocation({ weatherDisplay }) {

//console.log(weatherDisplay)    

    return (
        <div>
            <div className='flex item-center justify-center my-6'>

                <p className='text-white text-xl font-extralight'>
                    Tuesday, 19 July 2022 | Local time: 7:55 PM
                    <br></br>
                    {weatherDisplay.localtime}
                {/* This was hardcoded, we are going to change this later */}
                </p> 
            </div>
            <div className='flex item-center justify-center my-3 '>
                <p className='text-white text-3xl font-medium'>
                    {weatherDisplay.name}
                </p>
            </div>
        </div>
    )
}

export default TimeLocation
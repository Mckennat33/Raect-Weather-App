import React from 'react'
import { UilSearchAlt, UilMapMarkerAlt } from '@iconscout/react-unicons'






function SearchBar() {
    return (
        <div className='flex flex-row justify-center my-6 '>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                
                <input 
                    type="text" 
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
                    placeholder='Search...'
                    />
                <UilSearchAlt size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
                <UilMapMarkerAlt size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />

            </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>

            <button name='metric' className='text-xl text-white font-light'>°C</button>
            
            <p className='text-xl text-white mx-1 '> | </p>
            
            <button name='imperial' className='text-xl text-white font-light'>°F</button>
        
        </div>

        </div>
    )
}

export default SearchBar
import React from 'react'

function TopCities() {

const cities = [
    {
        id: 1, 
        title: "Chicago"
    },
    {
        id: 2, 
        title: "New York"
    },
    {
        id: 3, 
        title: "Seattle"
    },
    {
        id: 4, 
        title: "Austin"
    },
    {
        id: 5, 
        title: "Dallas"
    }
]

    return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => {
            return (
                <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
            )
        })}
    </div>
    )
}

export default TopCities
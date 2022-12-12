import React from 'react'
import data from './data.js'
import NavBar from './components/NavBar.js'
import Card from './components/Card.js'


const cards = data.map((trip) => {
    return (
        <div className='card-container'>
            <Card 
                key={trip.id}
                {...trip}
            />
        </div>
    )
})

export default function App() {
    return (
        <div className='container'>
            <NavBar />
            {cards}
        </div>
    )
}
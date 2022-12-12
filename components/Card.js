import React from 'react'

export default function Card(props) {
    
    return (
        <div>
            <div className='card'>
                <img src={props.imageUrl} />
                <div className='card-info'>
                    <div className='location-info'>
                        <img className='location-image' src='../images/location-image.png'/>
                        <p className='location'>{props.location}</p>
                        <a className='maps-directions'>View on Google Maps</a>
                    </div>
                    <h1 className='title'>{props.title}</h1>
                    <p className='travel-date gray'>{props.startDate} - {props.endDate}</p>
                    <p className='description gray'>{props.description}</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}
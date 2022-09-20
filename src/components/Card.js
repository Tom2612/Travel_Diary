import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className="card--image"/>
            <div className="card--text">
                <div className="card--header">
                    <span className='card--location'>{props.location}</span>
                    <a className='card--link' href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className='card--title'>{props.title}</h1>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}
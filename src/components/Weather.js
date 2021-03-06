import React from 'react';

const Weather = props =>(
		<div className="weather__info">
			{
			props.city && props.country && 
			<p className="weather__key">Location: <span className="weather__value">{props.city} </span><span className="weather__value">{props.country}</span></p>
			}
			{
			props.temprature && 
			<p className="weather__key">Temprature: <span className="weather__value">{props.temprature}</span></p>
			}	
			{
			props.humidity && 
			<p className="weather__key">Humidity: <span className="weather__value">{props.humidity}</span> </p> 
			}
			{
			props.description && 
			<p className="weather__key">Conditions: <span className="weather__value">{props.description}</span></p> 
			}
			{
			props.error &&
			<p className="weather__value">{props.error}</p>}
		</div>
	



	);


export default Weather;

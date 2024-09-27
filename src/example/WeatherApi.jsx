import React, { useState } from 'react'
import '../css/weatherapi.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';

const WeatherApi = () => {

  const cityList = ['Seoul', 'London', 'Tokyo']

  const [city, setCity] = useState()
  const [temp, setTemp] = useState()
  const [cloud, setCloud] = useState()

  return (
    <div className='weather-container'>
      <div className='weather-item'>
        <h1>날씨</h1>
        <div className='weather-data'>
          <h3>광주</h3>
          <h1>30도</h1>
          <h4>흐림</h4>
        </div>
        <div>
          {cityList.map(item =>
            <Button variant='light' key={item}>{item}</Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default WeatherApi
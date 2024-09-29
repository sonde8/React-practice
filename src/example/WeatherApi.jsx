import React, { useEffect, useState } from 'react'
import '../css/weatherapi.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import axios from 'axios'

const WeatherApi = () => {

  const cityList = ['Seoul', 'London', 'Tokyo']

  const [city, setCity] = useState('gwangju')
  const [temp, setTemp] = useState()
  const [cloud, setCloud] = useState()

  const handleCity = (e) =>{
    console.log(e.target.innerText);
    setCity(e.target.innerText)
  }

  const getData = ()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2bf379b3df4374cf6fb041773e9c785`
    
    axios.get(url)
    .then(res => {
      console.log(parseInt(res.data.main.temp-273))
      setTemp(parseInt(res.data.main.temp-273))
      console.log(res.data.clouds.all)
      if(res.data.clouds.all > 90){
        setCloud('매우 흐림')
      } else if(res.data.clouds.all > 60){
        setCloud('흐림')
      } else if(res.data.clouds.all > 30){
        setCloud('약간 흐림')
      } else{
        setCloud('맑음')
      }
    })
  }

  useEffect(()=>{
    getData()
  }, [city])

  return (
    <div className='weather-container'>
      <div className='weather-item'>
        <h1>날씨</h1>
        <div className='weather-data'>
          <h3>{city}</h3>
          <h1>{temp}</h1>
          <h4>{cloud}</h4>
        </div>
        <div>
          {cityList.map(item =>
            <Button variant='light' key={item} onClick={handleCity}>{item}</Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default WeatherApi
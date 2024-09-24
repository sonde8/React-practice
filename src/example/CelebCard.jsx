import React from 'react'
import data from '../json/celebcard.json'
import CelebInfo from '../components/CelebInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const CelebCard = () => {

  console.log('data', data.result);

  return (
    <div>
      {data.result.map(item => <CelebInfo key={item.title} item={item}></CelebInfo>)}
    </div>
  )
}

export default CelebCard
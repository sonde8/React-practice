import React from 'react'
import data from '../json/celebcard.json'
import CelebInfo from '../components/CelebInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const CelebCard = () => {

  console.log('data', data.result);

  return (
    <div>
      {/* map함수를 이용해서 CelebInfo를 반복시키고 props로 3개의 block에 각각 다른 값을 전달한다 */}
      {data.result.map(item => <CelebInfo key={item.title} item={item}></CelebInfo>)}
    </div>
  )
}

export default CelebCard
import React from 'react'
import data from '../json/celebcard.json'
import CelebInfo from '../components/CelebInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const CelebCard = () => {

  console.log('data', data.result);

  // 1. data.result안에 있는 데이터들을 확인 후, 아이유,수지,나연에게 각각 CelebInfo를 부여
  // 2. Ex05에서 <li></li> 태그를 반복시켜준 것처럼, 이 예제에서는 CelebInfo를 반복시켜주기
  // 3. props 개념을 통해 3개의 block.에 각각 다른 값을 전달해주기

  // const Data = data.result
  // console.log(Data);



  return (
    <div>
      {data.result.map(item => <CelebInfo key={item.title} item={item}></CelebInfo>)}
    </div>
  )
}

export default CelebCard
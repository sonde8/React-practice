import React, { useState } from 'react'
import Bindingsub from '../components/Bindingsub'

const Binding = () => {

  const [text, setText] = useState('')  
  
  const changeData = (e) =>{
    // console.log('입력한 텍스트', e.target.value);
    setText(e.target.value)
  }

  // 2-1 / 2-2 텍스트를 담아둘 공간
  const [text2, setText2] = useState('')

  // 하위 -> 상위 데이터 전달 함수
  const changeData2 = (e) =>{
    // console.log('changeData2', e.target.value);
    setText2(e.target.value)
  }

  return (
    <div>
      <h2>양방향 데이터 전달 실습</h2>
      <p>
        1-1. 상위에서 입력한 정보 : <input type='text' onChange={changeData}/>
      </p>
      <Bindingsub text = {text} changeData2 = {changeData2}></Bindingsub>
      <p>2-2. 하위에서 작성한 정보를 상위에서 입력받기 : {text2}</p>
    </div>
  )
}

export default Binding
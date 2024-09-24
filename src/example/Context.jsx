import React, { useState } from 'react'
import ColorList from '../components/ColorList'
import ColorResult from '../components/ColorResult'
import { ColorContext } from '../context/colorContext'

const Context = () => {

  // context provider를 적는 부분에 state 관리
  const [ckColor, setCkColor] = useState('blue')

  return (
    <ColorContext.Provider value={{ ckColor, setCkColor }}>
      <div>
        <h1>색상 변경하기</h1>
        <ColorList />
        <hr />
        <h1>선택한 색상은?</h1>
        <ColorResult />
      </div>
    </ColorContext.Provider>
  )
}

export default Context
import React, { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'

const Content = () => {

  const {isDark, set} = useContext(ModeContext)

  return (
    <div className='content'
    style={{
      backgroundColor : isDark == true ? 'black' : 'white',
      color : isDark === true ? 'white' : 'black'
    }}
    >
      <h4>기분이 태도가 되지말자</h4>
    </div>
  )
}

export default Content
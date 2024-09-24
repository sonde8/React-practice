import React, { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'

const Header = () => {

  const {isDark, setIsDark} = useContext(ModeContext)

  return (
    <div 
    className='header'
    style={{
      backgroundColor : isDark == true ? 'black' : 'lightpink',
      color : isDark === true ? 'white' : 'black'
    }}
    >
      <h1>다크모드 실습</h1>
    </div>
  )
}

export default Header
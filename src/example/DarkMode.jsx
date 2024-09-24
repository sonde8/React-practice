import React, { useState } from 'react'
import Header from '../components/DarkMode/Header'
import Content from '../components/DarkMode/Content'
import Footer from '../components/DarkMode/Footer'

import '../css/darkmode.css'
import { ModeContext } from '../context/ModeContext'

const DarkMode = () => {

  /* 다크모드와 라이트모드를 만들기
  
  1. 다크모드와 라이트모드를 구분하는 isDark라는 state 선언 (true / false)
    - isDark true 라면 다크모드 false라면 라이트 모드

  2. isDark를 전역적으로 사용하기 위해 context 세팅
    2.1 ModeContext라는 파일 생성 -> create
    2.2 DarkMode에서 Context를 사용할 수 있도록 감싼 후 Provider 생성
    2.3 isDark, setIsDark를 Provider로 전달

  3. 다크모드라는 버튼을 클릭했을 때, header, content, footer의 
    배경색을 black 글자를 white로 -> 삼항연산자

  4. 다크모드를 클릭하면 버튼의 글자가 라이트모드로 변경

  5. 라이트모드 누르면 다시 원래대로 
  */

  const [isDark, setIsDark] = useState(false)


  return (
    <ModeContext.Provider value={{isDark, setIsDark}}>
      <div className='page'>
        <Header />
        <Content />
        <Footer />
      </div>
    </ModeContext.Provider>
  )
}

export default DarkMode
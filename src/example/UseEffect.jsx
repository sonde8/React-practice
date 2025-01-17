import React, { useEffect, useState } from 'react'

const UseEffect = () => {

  // 1. 생성자 대체 (state, 변수, 함수 선언)
  // -> 화면을 구성하기 위한 준비물들은 이 쪽에 선언
  const [num, setNum] = useState(0)
  console.log('1. 생성자 대체')

  // 3. 화면 mount
  // useEffect(함수, 배열)
  // 뒤에 배열을 비워둘 시, componentDidMount 의 역할을 대체함.
  useEffect(()=>{
    console.log('3. 화면 Mount 완료')
  }, [])

  // 4. 값 update
  // useEffect(함수, [변화를 감지할 대상])
  // 첫 렌더링 때도 실행된다는 특징을 가짐
  // 변화를 감지하는 대상은 복수가 될 수도 있음
  useEffect(()=>{
    console.log('4. num 값 변화 완료')
  }, [])

  return (
    <div>
      {/* 2. render를 대체
        -> 화면 구성
      */}
      <h1> Counter {num} </h1>
      <button onClick={()=>{setNum(num+1)}}>+1</button>
      <button onClick={()=>{setNum(num-1)}}>-1</button>
    </div>
  )
}

export default UseEffect
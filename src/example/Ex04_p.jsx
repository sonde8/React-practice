import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import Board from '../components/Board_p';
import '../css/ex04.css'

const Ex04_p = () => {

  /** 주사위 게임을 해보자! 
   *  1. 유저는 던지기 버튼을 누른다. => throwDice 라는 함수를 실행시킨다. 
   *  2. 던지기 버튼을 눌렀을 때, 나의 숫자 (myDice) 도 랜덤으로 1~6까지 중 하나 
   *      컴퓨터의 숫자 (comDice) 도 랜덤으로 1~6까지 중 하나 
   *  3. Ex04 상위컴포넌트에서 Board 라는 하위 컴포넌트로 값을 전송 
   *      (나 - 컴퓨터 / 각각 두개가 가진 숫자를 전달 )
   *  4. 나온 숫자에 따라서 주사위 모양을 다르게 세팅 
   *  5. 나 < 컴퓨터, 나 == 컴퓨터 : 패배 
   *     나 > 컴퓨터 : 승리 
   *      if 문 사용하지 말고 아까처럼 return 문 안에서 삼항연산자로 처리 
   *  6. 유저가 RESET 버튼을 누른다 => resetDice 라는 함수를 실행시킨다
   *  7. RESET 버튼을 눌렀을 때, 내 주사위 1 / 컴퓨터 주사위 1 세팅 
   */

  const [myDice, setMyDice] = useState(1)
  const [comDice, setComDice] = useState(1)

  const [result, setResult] = useState('시작 전')

  const [round, setRound] = useState(1)
  // myDice나 comDice로 변화를 감지할 경우, 적은 확률이지만 두 개 다 두 판 다 같은 값이 나올 수도 있음
  // 그럴 때는 감지X

  const throwDice = () => {
    setMyDice(parseInt(Math.random()*6)+1)
    setComDice(parseInt(Math.random()*6)+1)
    setRound(round+1)
  }

  const resetDice = () => {
    setMyDice(1)
    setComDice(1)
    setRound(1)
  }
  

  useEffect(()=>{
    console.log(round);
    if(round > 1){
      if(myDice > comDice){
        setResult('승리')
      } else if (myDice < comDice){
        setResult('패배')
      } else {
        setResult('무승부')
      }
    }
  }, [round])
  
  return (
    <div className='box'>
      <h1>주사위게임</h1>

      <div>
        <Button variant="secondary" onClick={throwDice}>던지기</Button> {" "}
        <Button variant="danger" onClick={resetDice}>RESET</Button>
      </div>

      <div className='board-container'>
        <Board myDice = {myDice} name = '나'/>
        <Board comDice = {comDice} name = '컴퓨터'/>
      </div>

      {/* useEffect 배우기 이전 코드 */}
      {/* <h2>
        {myDice > comDice
        ? <p>승리</p>
        : <p>패배</p>
      }
      </h2> */}
      <h2>{result}</h2>

    </div>
  )
}

export default Ex04_p
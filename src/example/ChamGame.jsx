import React, { useEffect, useState } from 'react'

const ChamGame = () => {

  const pos = ['왼쪽', '정면', '오른쪽']

  const [mySel, setMySel] = useState()
  const [comSel, setComSel] = useState()
  const [result, setResult] = useState('승부 전')
  const [round, setRound] = useState(1)

  const posRandom = (e) =>{
    setMySel(e.target.innerText)
    setComSel(pos[parseInt(Math.random()*3)])
    setRound(round+1)
  }
  
  useEffect(()=>{
    if(round > 1){
      if(mySel === comSel){
        setResult('승리')
      } else {
        setResult('패배')
      }
  }
  }, [round])

  return (
    <div>
      <h1>참참참</h1>
      <p>나의 선택 : {mySel}</p>
      <p>상대의 고개 : {comSel}</p>
      <b>{result}</b>
      <hr/>
      {pos.map(item => <button key={item} onClick={posRandom}>{item}</button>)}
    </div>
  )
}

export default ChamGame
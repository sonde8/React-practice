import React from 'react'

const Board_p = ({name, myDice, comDice}) => {
  return (
    <div className='board-area'>
        <h3>{name}</h3>
        <img src={name === '나' ? `/img/dice${myDice}.png`: `/img/dice${comDice}.png`}></img>
    </div>
  )
}

export default Board_p
import React from 'react'

const Bindingsub = ({text, changeData2}) => {
  return (
    <div>
      <p>1-2. 상위에서 작성한 정보를 하위에서 입력 받기 : {text}</p>

      <hr/>

      <p>2-1. 하위에서 입력한 정보 : <input type='text' onChange={changeData2}/></p>
    </div>
  )
}

export default Bindingsub
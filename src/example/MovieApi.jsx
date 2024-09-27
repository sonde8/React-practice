import React, { useEffect, useState } from 'react'

const MovieApi = () => {

  /* 비동기통신을 통해 데이터 가져오기
    ==> 생성자 위치, 렌더링 위치에서는 가져오지 않음
    ==> useEffect, 이벤트함수

    - 1. Fetch
        - 장점 : 별도의 설치 X, JS 내장
        - 단점 : 기능이 단조로움, json 형태로 변환 작업이 필요
    - 2. Axios
        - 장점 : 기능이 다양함
        - 단점 : 별도의 설치가 필요
  */
  const [list, setList] = useState([])



  // Fetch
  useEffect(() => {
    let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f4372ded129bccae8b6fbe5eb13a964c&targetDt=20240901'

    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res.boxOfficeResult.weeklyBoxOfficeList);
        setList(res.boxOfficeResult.weeklyBoxOfficeList)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>영화 순위</h1>
      <table>
        <tbody>
          {list.map(item =>
            <tr key={item.rnum}>
              <td>{item.rank}위</td>
              <td>{item.movieNm}</td>
              <td>{item.openDt}</td>
              <td>{item.rankOldAndNew}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MovieApi
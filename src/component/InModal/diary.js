import React from 'react'
import styled from 'styled-components'

const DiaryResults = styled.div`
  width: 80%;
  height: 80%;
  /* border: 2px solid tomato; */
  text-align: left;
`

const DiaryDelBtn = styled.div`
  margin: 10px;
  padding: 10px 20px;
  border: 2px solid #fff;
  border-radius: 3px;
  background: transparent;
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`
const DiaryModifyBtn = styled.div`
  margin: 10px;
  padding: 10px 20px;
  border: 2px solid #fff;
  border-radius: 3px;
  background: transparent;
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`

function Diary({ mention, setShowResult }) {
  // const [showResult, setShowResult] = useState(false)
  // const Savediary = () => setShowResult(true)

  return (
    <>
      <DiaryResults className='diary-result'>{mention}</DiaryResults>
      <div>
        <DiaryModifyBtn onClick={() => setShowResult(false)}>
          수정
        </DiaryModifyBtn>
        <DiaryDelBtn>삭제</DiaryDelBtn>
      </div>
    </>
  )
}

export default Diary

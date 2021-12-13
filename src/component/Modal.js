import React, { useState } from 'react'
import './Modal.css'
import Card from './InModal/Card'
// import { MentionsInput, Mention } from 'react-mentions'
import TextArea from './InModal/Textarea'
// import { data } from '../data'

function Modal({ date, toggle }) {
  console.log(date)
  return (
    <div className={`ModalBack ${toggle ? '' : 'hidden'}`}>
      <div className='title'>
        <p>{date}</p>
      </div>
      <div className='body_card'>
        <Card />
      </div>
      <div className='body_textarea'>
        <TextArea />
        {/* <div className="saveBtn" onClick={SaveBtn}>저장</div> */}
        <SaveBtn />
      </div>
    </div>
  )
}

export default Modal

function SaveBtn() {
  const [showResult, setShowResult] = useState(false)
  const Savediary = () => setShowResult(true)

  return (
    <div>
      <div className='diary-save' onClick={Savediary}>
        저장
      </div>
      {showResult && <Results />}
    </div>
  )
}

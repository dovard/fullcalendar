import React from 'react'
import './Modal.css'
import Card from './InModal/Card'
// import { MentionsInput, Mention } from 'react-mentions'
import TextArea from './InModal/Textarea'
// import { data } from '../data'

function Modal({ date, toggle }) {
  console.log(date)
  return (
    <div className={`ModalBack ${toggle ? '' : 'hidden'}`}>
      <div className='title'>{date}</div>
      <div className='body_card'>
        <Card />
      </div>
      <div className="body_textarea">
        <div>일기</div>
        <TextArea />
        <div><button className="saveBtn">저장</button></div>
      </div>
    </div>
  )
}

export default Modal

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
      <div className='title'>
        <p>{date}</p></div>
        <div className='body_card'>
          <Card />
        </div>
        <div className="body_textarea">
          <TextArea />
          <div><button className="saveBtn">저장</button></div>
        </div>
      </div>
  )
}

export default Modal

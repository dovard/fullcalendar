import React, { useState } from 'react'
import './Modal.css'
import Card from './InModal/Card'
// import { MentionsInput, Mention } from 'react-mentions'
import TextArea, { DiarySaveBtn } from './InModal/Textarea'

import Diary from './InModal/Diary'
// import { data } from '../data'
import styled from 'styled-components'

function Modal({ date, toggle, setDiarycontent, saveData }) {
  /*------*/
  const [check, setCheck] = useState(false)

  // const callData = () => {
  //   setCheck(true);
  // };

  /*---*/

  const [showResult, setShowResult] = useState(false)
  const Savediary = () => {
    setShowResult(true)
  }

  const [showTextarea, setShowTextarea] = useState(true)
  const ShowupTextarea = () => setShowTextarea(false)
  const [mention, setMention] = useState(null)

  return (
    <div className={`ModalBack ${toggle ? '' : 'hidden'}`}>
      <div className='title'>
        <p>{date}</p>
      </div>
      <div className='body_card'>
        <Card />
      </div>
      <div className='body_textarea'>
        {!showResult && (
          <>
            <TextArea setMention={setMention} />
            <DiarySaveBtn
              className='diary-save'
              onClick={() => {
                Savediary
                saveData
              }}
            >
              저장fd
            </DiarySaveBtn>
          </>
        )}

        {showResult && (
          <Diary setShowResult={setShowResult} mention={mention} />
        )}
        {/* <div className="saveBtn" onClick={SaveBtn}>저장</div> */}
        {/* <SaveBtn /> */}
      </div>
    </div>
  )
}

export default Modal

// function SaveBtn() {
//   const [showResult, setShowResult] = useState(false)
//   const Savediary = () => setShowResult(true)

//   const [showTextarea, setShowTextarea] = useState(true)
//   const ShowupTextarea = () =>setShowTextarea(false)

//   return (
//     <div>
//       <DiarySaveBtn className='diary-save' onClick={Savediary}>
//         저장fd
//       </DiarySaveBtn>
//       {showResult && <Results /> }
//     </div>
//   )
// }

import { constrainPoint } from '@fullcalendar/react'
import React, { Component, useState } from 'react'

function TextArea() {
  const [mention, setMention] = useState(null)
  const formStyle = {
    textArea: {
      border: 8,
      boxShadow: 'none',
      margin: 6,
      resize: 'none',
      ariaHidden: 'true',
      width: '80%',
      height: '80%',
      
      
    },
  }
  function getData(val) {
    setMention(val.target.value)
  }
  return (
    <>
      <textarea
        className='Input'
        type='text'
        rows='10'
        cols='90'
        onChange={getData}
        placeholder='일기'
        style={formStyle.textArea}
      />
    </>
  )
}

export default TextArea

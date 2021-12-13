import React from 'react'

export default function diary({mention}) {
  return (
    <div>
      <div className="wrap">
        <div className="bg">
          <div className="loading">
            <span className="title">{mention}</span>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}
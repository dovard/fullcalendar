import React, { useState } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
// import { INITIAL_EVENTS, createEventId } from './event-utils'
import Modal from './component/Modal'
import { auto } from 'async'
// import style from './main.css'

function DemoApp() {
  const [weekendsVisible, setWeekendVisible] = useState(true)
  const [currentEvents, setCurrentEvents] = useState([])
  const [toggle, setToggle] = useState(false)
  const [modalDate, SetModalDate] = useState('')

  // const dateStr = dateStr

  const handleEvents = (events) => {
    setCurrentEvents(events)
  }

  // const handleWeekendsToggle = () => {
  //   setWeekendVisible(!weekendsVisible)
  // }

  const handleDateSelect = (e) => {
    const date = e.date
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const result = `${year}년 ${month}월 ${day}일`
    SetModalDate(result)
    setToggle(true)
  }

  return (
    <>
      <div className='demo-app'>
        <div className='demo-app-main'>
          <FullCalendar
            // contentHeight={400}
            contentHeight={'75vh'}
            plugins={[dayGridPlugin, interactionPlugin]}
            // events={[
            //   {
            //     date: '2021-12-20',
            //     url: 'https://images.unsplash.com/photo-1638984849670-7f41daa1ba6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60',
            //     title: ""
            //   },
            // ]}
            headerToolbar={{
              left: 'prev,next',
              center: 'title',
              right: 'today',
            }}
            // locale={"ko"}
            titleFormat={function (date) {
              return `${date.date.year}년 ${date.date.month + 1}월`
            }}
            dayHeaderContent={function (date) {
              let weekList = ['일', '월', '화', '수', '목', '금', '토']
              return weekList[date.dow]
            }}
            // initialView='dayGridMonth'

            editable={false}
            selectable={true}
            // unselectAuto={true}
            weekends={weekendsVisible}
            dateClick={handleDateSelect}
            // eventContent={renderEventContent} // custom render function
            // eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire: */
            // eventAdd={addEvents}
            /* eventChange={function(){}}
                eventRemove={function(){}}
                */
          />
        </div>
        <Modal date={modalDate} toggle={toggle} />
        {toggle && (
          <>
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: 'gray',
                opacity: '0.2',
                zIndex: 2,
              }}
              onClick={() => setToggle(false)}
            ></div>
          </>
        )}
      </div>
    </>
  )
}

export default DemoApp

// function renderEventContent(eventInfo) {
//   return (
//     <div>
//       <img className='image' src={eventInfo.event.url} />
//     </div>
//   )
// }

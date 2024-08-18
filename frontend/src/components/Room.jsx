import React from 'react'
export default function Room(props) {
  document.title = props.roomName;
  return (
    <div>
      This is a private room - {props.roomName}
    </div>
  )
}

import { useEffect } from 'react';
import { io } from "socket.io-client";
import './App.css'



function App() {
  useEffect(()=>{
    const socket = io("http://localhost:3000/",{ transports : ['websocket'] });
    socket.on("Hello",() => {
      console.log("User is connected")
    })
  })
  return (
    <>
      <h1>What do you want to do?</h1>
    </>
  )
}

export default App

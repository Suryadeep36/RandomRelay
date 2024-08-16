
import { useEffect } from 'react'
import './App.css'
function App(props) {
  useEffect(() => {
    console.log(props.socket);
  }) 
  return (
    <>
      <div className='h-full flex justify-evenly items-center'>
        <div className=' bg-blue-400 h-72 w-72 flex justify-center items-center'>
          <a className=' text-3xl' href="/joinRoom">Join a room</a>
        </div>
        <div className=' bg-red-400 h-72 w-72 flex justify-center items-center'>
          <a className='text-3xl' href="/createRoom">Create a room</a>
        </div>
      </div>
    </>
  )
}

export default App

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JoinRoom() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [status, setStatus] = useState("");
  function handleClick(){
    const payload = {
      name: name,
      roomId: roomId
    }
    fetch("http://localhost:3000/joinRoom", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      mode: 'cors'
    }).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      setStatus(data.msg);
      if(data.msg === "Room Joined!!"){
        navigate("/newRoom/" + roomId);
      }
      else{
        navigate("/joinRoom");
      }
    })
  }
  return (

    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className=" text-5xl text-center font-bold text-orange-500">Random Relay</h1>
          <h1 className=" mt-2 text-2xl text-center font-bold text-orange-500">{status}</h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter your name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  onChange={(e)=>{
                    setName(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter the roomId
              </label>
              <div className="mt-2">
                <input
                  id="roomId"
                  name="roomId"
                  type="text"
                  required
                  onChange={(e)=>{
                    setRoomId(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                value="joinRoom"
                onClick={handleClick}
              >
                Join a room
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

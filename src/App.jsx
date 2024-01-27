import React, { useEffect, useRef, useState } from 'react'
import { useCallback } from 'react';

function App() {
  const [nums, setNums] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [char, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  const passwrdRef = useRef(null);

  const passwrdGenerator = useCallback(() => {
    let passwrd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "1234567890";
    }
    if (char) {
      str += "!@#$%^&*";
    }

    for (let i = 1; i <= nums; i++) {
      let randomChar = Math.floor(Math.random() * str.length + 1);
      passwrd += str.charAt(randomChar);
    }
    setPass(passwrd);
  }, [nums, numAllowed, char, setPass])

  const copyToClip = useCallback(() => {
    passwrdRef.current?.select();
    passwrdRef.current?.setSelectionRange(0, 51);
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  useEffect(() => {
    passwrdGenerator()
  }, [char, numAllowed, passwrdGenerator, nums]);

  return (
    <div
      className='w-full max-w-xl mx-auto shadow-md rounded-lg px-7 py-5 my-9 bg-custom-bg text-custom-input'>
      <h1 className='text-3xl  text-custom-copy py-2 text-center my-0 mx-21'  >
        Password Generator
      </h1>
      <div className='flex rounded-xl shadow-md text-custom-text overflow-hidden mb-4'>
        <input
          type="text"

          className='outline-none w-full py-1 text-custom-text px-3'

          value={pass}
          placeholder="password"
          readOnly
          ref={passwrdRef}
        />
        <button
          onClick={copyToClip}
          className='outline-none bg-custom-text shadow-md text-white px-3 py-0.5 shrink-0 hover:bg-custom-extra'

        >copy</button>


      </div>
      <div className='flex text-md gap-x-4 text-white'>
        <div className='flex items-center gap-x-2'>
          <input
            type='range'
            min={3}
            max={50}
            value={nums}
            className='cursor-pointer'
            onChange={(e) => { setNums(e.target.value) }}
          />

          <label>Length: {nums}</label>
        </div>
        <div className='flex items-center gap-x-1'  >
          <input type="checkbox"
            defaultValue={numAllowed}
            id='numberInput'
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }} />

          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultValue={char}
            id='charAllowed'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }} />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>

    </div>
  )
}

export default App

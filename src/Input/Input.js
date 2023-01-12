import React, { useState, useEffect, useRef } from "react";
import './Input.css'

const Input = ({ placeholder, matchingWord, id, handleWord}) => {

  const[ userInput, setUserInput ] = useState('')
  const[ submit, setSubmit ] = useState(false)

  const updateState = (event) => {
    setUserInput(event.target.value)
  }

  const submitWord = (event) => {
    handleWord(event, userInput)
    setSubmit(true)
  }

  return (
    <div 
      className="input"
      name={matchingWord}
      >
      <input
        disabled={submit ? "disabled" : null}
        type={'text'}
        placeholder={placeholder}
        value={userInput}
        onChange={(event) => updateState(event)}
      />
      <button className={submit ? "submit-word-btn disabled-btn": "submit-word-btn"} name={matchingWord} onClick={(event) => {submitWord(event)}}>Submit Word</button>
    </div>
  )
}

export default Input
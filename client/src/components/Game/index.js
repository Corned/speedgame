import React, { useState, useEffect } from "react"
import classnames from "classnames"

import ScoreCounter from "components/ScoreCounter"
import Buttons from "components/Buttons"
import KeyboardHook from "hooks/KeyboardHook"

import "./index.scss"

const Game = () => {
  const [ score, setScore ] = useState(0)
  const [ target, setTarget ] = useState(0)
  const [ buttonCount, setButtonCount ] = useState(4)
  const currentKey = KeyboardHook()

  //setTimeout(() => setScore(score + 1), 2)

  useEffect(() => {
    setTarget(+currentKey)
  }, [ currentKey ])

  const handleClick = (buttonIndex) => (event) => {
    event.preventDefault()
    setTarget(buttonIndex)
    setScore(score + 1)
  }

  return (
    <div className="game">
      <ScoreCounter score={score}/>
      <Buttons count={buttonCount} target={target} failure={false} handleClick={handleClick}/>
    </div>
  )
}

export default Game
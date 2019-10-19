import React, { useState, useEffect } from "react"

import ScoreCounter from "components/ScoreCounter"
import Buttons from "components/Buttons"

import "./index.scss"

const Game = () => {
  const [ speed, setSpeed ] = useState(0)
  const [ score, setScore ] = useState(0)
  const [ target, setTarget ] = useState(0)
  const [ buttonCount ] = useState(4)
  const [ gameEnded, setGameEnded ] = useState(false)

  const delay = Math.max(1200 - (Math.floor(speed) * 20), 600)

  useEffect(() => {
    if (gameEnded) {
      return
    }

    const randomTarget = 1 + Math.floor(Math.random() * 4)
    setTarget(randomTarget)

    const timer = setTimeout(() => {
      if (target != 0) {
        // user failed to react in time
        setTarget(0)
        setGameEnded(true)
        return
      }

      setSpeed(speed + 1)
    }, delay)

    return () => clearTimeout(timer)
  }, [ speed, gameEnded ])

  const handleClick = (buttonIndex) => (event) => {
    event.preventDefault()

    if (buttonIndex === target) {
      setTarget(0)
      setScore(score + 1)
      return
    }
    
    setGameEnded(true)
  }

  return (
    <div className="game">
      <ScoreCounter score={score}/>
      <Buttons 
        count={buttonCount} 
        target={target} 
        failure={gameEnded} 
        handleClick={handleClick}
      />
    </div>
  )
}

export default Game
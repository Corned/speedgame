import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"

import ScoreCounter from "components/ScoreCounter"
import Buttons from "components/Buttons"
import PersonalBestHook from "hooks/PersonalBestHook"

import "./index.scss"

const Game = () => {
  const [ redirect, setRedirect ] = useState(false)
  const [ speed, setSpeed ] = useState(0)
  const [ score, setScore ] = useState(0)
  const [ target, setTarget ] = useState(0)
  const [ buttonCount ] = useState(4)
  const [ gameEnded, setGameEnded ] = useState(false)
  const [ failure, setFailure ] = useState(false)
  const [ isMiddleOfRound, setIsMiddleOfRound ] = useState(false)
  const [ personalBest, setPersonalBest ] = PersonalBestHook()

  useEffect(() => {
    if (gameEnded) {
      setPersonalBest(score)

      let fail = true

      const interval = setInterval(() => {
        setFailure(fail = !fail)
      }, 300)

      setTimeout(() => {
        clearInterval(interval)
        setRedirect(true)
      }, 4000)

      return
    }

    if (!isMiddleOfRound) {
      const randomTarget = 1 + Math.floor(Math.random() * 4)
      const delay = Math.max(1200 - (Math.floor(speed) * 20), 500)

      setTarget(randomTarget)
      const timer = setTimeout(() => {
        setIsMiddleOfRound(true)
      }, delay)

      return () => clearTimeout(timer)
    }

    if (target === 0) {
      // round cleared?
      setSpeed(speed => speed + 1)
      setIsMiddleOfRound(false)
      return
    }

    // player failed
    setGameEnded(true)
  }, [ isMiddleOfRound, gameEnded ])

  const handleClick = (buttonIndex) => (event) => {
    event.preventDefault()

    if (buttonIndex === target) {
      setScore(score + 1)
      setTarget(0)
      return
    }
    
    setGameEnded(true)
    setFailure(true)
    setTarget(0)
  }

  if (redirect) {
    return (
      <Redirect to="/"/>
    )
  }

  return (
    <div className="game">
      <ScoreCounter score={score}/>
      <Buttons 
        count={buttonCount} 
        target={target} 
        failure={failure} 
        handleClick={handleClick}
      />
      <p>time to react: {Math.max(1200 - (Math.floor(speed) * 20), 500)}ms</p>
    </div>
  )
}

export default Game
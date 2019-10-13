import React, { useState, useEffect } from "react"
import classnames from "classnames"

import ScoreCounter from "components/ScoreCounter"
import Buttons from "components/Buttons"

import "./index.scss"

const Game = () => {
  const [ score, setScore ] = useState(0)
  const [ target, setTarget ] = useState(0)
  const [ buttonCount, setButtonCount ] = useState(4)

  //setTimeout(() => setScore(score + 1), 2)

  return (
    <div className="game">
      <ScoreCounter score={score}/>
      <Buttons count={buttonCount} target={target} failure={false}/>
    </div>
  )
}

export default Game
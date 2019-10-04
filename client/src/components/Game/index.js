import React, { useState, useEffect } from "react"
import classnames from "classnames"

import "./index.scss"

const Game = () => {
  const [ score, setScore ] = useState(0)
  const [ currentButton, setCurrentButton ] = useState(0)
  const [ buttonCount, setButtonCount ] = useState(4)

  const buttons = new Array(buttonCount).fill(0).map((_, index) => {
    const classes = classnames(
      "game__button", 
      { active: currentButton === index + 1 }
    )

    return (
      <button className={classes} key={index}>
        {index + 1}
      </button>
    )
  })

  const formattedScore = (
    <p className="game__score">
      <span className="game__score--light">{"0".repeat( 4 - score.toString().length )}</span>
      <span className="game__score--dark">{score}</span>
    </p>
  )

  //setTimeout(() => setScore(score + 1))

  return (
    <div className="game">
      {formattedScore}
      {buttons}
    </div>
  )
}

export default Game
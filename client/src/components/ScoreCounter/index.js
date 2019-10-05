import React from "react"

import "./index.scss"

const ScoreCounter = ({ score }) => {
  const amountOfZeroes = Math.max(4 - score.toString().length, 0)
  const lightText = ("0").repeat(amountOfZeroes)
  const darkText = score

  return (
    <p className="score-counter">
      <span className="score-counter__light">{lightText}</span>
      <span className="score-counter__dark">{darkText}</span>
    </p>
  )
}

export default ScoreCounter
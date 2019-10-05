import React from "react"
import classnames from "classnames"

import "./index.scss"

const Buttons = ({ count, target, failure }) => {
  return (
    <div className="game__buttons">
      {new Array(count).fill(0).map((_, index) => {
        const classes = classnames(
          "game__button", 
          { "failure": failure, "active": target === (index + 1) }
        )
        
        return (
          <button className={classes} key={index}>
            { index + 1}
          </button>
        )
      })}
    </div>
  )
}

export default Buttons
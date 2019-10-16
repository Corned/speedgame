import React from "react"
import classnames from "classnames"

import "./index.scss"

const Buttons = (props) => {
  const {
    count,
    target,
    failure,
    handleClick,
  } = props


  return (
    <div className="game__buttons">
      {new Array(count).fill(0).map((_, index) => {
        const classes = classnames(
          "game__button", 
          { "failure": failure, "active": target === (index + 1) }
        )
        
        return (
          <button className={classes} key={index} onClick={handleClick(index + 1)}>
            { index + 1}
          </button>
        )
      })}
    </div>
  )
}

export default Buttons
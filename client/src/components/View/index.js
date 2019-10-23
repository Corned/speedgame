import React from "react"

import "./index.scss"

const View = ({ children }) => {
  return (
    <div className="view">
      { children }
    </div>
  )
}

export default View
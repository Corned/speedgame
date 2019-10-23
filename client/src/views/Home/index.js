import React, { useState } from "react"
import { Redirect, useHistory } from "react-router-dom"

import "./index.scss"

const Home = () => {
  const [ redirect, setRedirect ] = useState(false)
  const history = useHistory()

  const handleRedirect = () => setRedirect(true)

  if (redirect) {
    history.push("/")
    return (
      <Redirect to="/play"/>
    )
  }

  return (
    <>
      <h1 className="home__header--large">Speed Game</h1>
      <p className="home__highscore">highscore: 40</p>
      <button onClick={handleRedirect} className="home__start-game">
        start
      </button>
    </>
  )
}

export default Home
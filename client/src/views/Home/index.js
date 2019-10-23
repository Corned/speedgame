import React, { useState } from "react"
import { Redirect, useHistory } from "react-router-dom"

import PersonalBestHook from "hooks/PersonalBestHook"

import "./index.scss"

const Home = () => {
  const [ redirect, setRedirect ] = useState(false)
  const [ personalBest ] = PersonalBestHook()
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
      <p className="home__highscore">highscore: {personalBest}</p>
      <button onClick={handleRedirect} className="home__start-game">
        start
      </button>
    </>
  )
}

export default Home
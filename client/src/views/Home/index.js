import React from "react"
import { Link } from "react-router-dom"

import "index.scss"

const Home = () => {
  return (
    <>
      <h1>Speed Game</h1>
      <p>highscore: 40</p>
      <Link to="/play">start</Link>
    </>
  )
}

export default Home
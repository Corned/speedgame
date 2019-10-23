import React from "react"
import { Route } from "react-router-dom"

import View from "components/View"
import Home from "views/Home"
import Game from "views/Game"

const routeData = [
  {
    key: "home",
    path: "/",
    component: Home,
    exact: true,
  },
  {
    key: "game",
    path: "/play",
    component: Game,
  },
]

export default routeData.map(data => {
  return (
    <View>
      <Route {...data}/>
    </View>
  )
})
import { useState, useEffect } from "react"

const PersonalBestHook = () => {
  const [ score, setScore ] = useState(0)
  const storage = window.localStorage

  useEffect(() => { 
    const storedValue = storage.getItem("score_pb")
    setScore(storedValue)
  }, [])

  useEffect(() => {
    const storedValue = storage.getItem("score_pb")
    if (score > storedValue) {
      storage.setItem("score_pb", score)
    }
  }, [ score ])

  return [ score, setScore ]
}

export default PersonalBestHook
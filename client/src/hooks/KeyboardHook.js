import { useState, useEffect } from "react"

const KeyboardHook = () => {
  const [ key, setKey ] = useState(null)

  const handleKeyDown = (event) => {
    setKey(event.key)
  }

  const handleKeyUp = (event) => {
    if (key === event.key) {
      setKey(null)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
  })

  return key
}

export default KeyboardHook
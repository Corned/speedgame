import { useState, useEffect } from "react"

const KeyboardHook = () => {
  const [ key, setKey ] = useState(null)

  const handleKeyDown = (event) => {
    event.preventDefault()

    setKey(event.key)
  }

  const handleKeyUp = (event) => {
    event.preventDefault()

    if (key === event.key) {
      setKey(null)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown")
    }
  })

  return key
}

export default KeyboardHook
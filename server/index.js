const express = require("express")
const http = require("http")
const path = require("path")

const app = express()
const server = http.Server(app)

app.use(express.static(path.join(__dirname, "../build")))

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../build", "index.html")
  )
})

const PORT = process.env.PORT || 80
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
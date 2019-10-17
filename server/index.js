const express = require("express")
const http = require("http")

const app = express()
const server = http.Server(app)

const PORT = process.env.PORT || 80
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
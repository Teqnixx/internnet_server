const express = require('express')
const bodyParser = require('body-parser')
const Pool = require('pg').Pool
const app = express()
const port = 8000

require('dotenv').config()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.json())

const internnetRouter = require("./routes/internnet.router.js")

app.use("/api/v1/", internnetRouter)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
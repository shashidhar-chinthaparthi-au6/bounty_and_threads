const express = require("express")
const cors = require("cors")
require("./db/db")
const authRoutes = require("./routes/auth")
const app = express()

app.use(express.json())
app.use(cors())

app.use("/api",authRoutes)

app.listen(8000,() => {
    console.log("server running a t port 8000")
})
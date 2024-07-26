const express = require('express')
const app = express()
const port = 7769
app.use(express.json())
const db = require('./config/db')
const router = require('./routers/schoolRouter')
app.get("/", (req, res)=>{
    res.send("Welcome too my first hosting")
})
app.use(router)


app.listen(port, ()=>{
    console.log(`app is listening to ${port}`)
});
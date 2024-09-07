require('dotenv').config()
const express = require("express")

const app = express()

app.get('/api',(req,res)=>{
    res.send("Message").status(200)
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server started in port ${PORT}`)
})
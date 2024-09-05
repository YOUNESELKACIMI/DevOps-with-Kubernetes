require('dotenv').config()
const express = require("express")

const app = express()

app.get('/api',(req,res)=>{
    res.send("Exercise 1.05: Project v0.3").status(200)
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server started in port ${PORT}`)
})
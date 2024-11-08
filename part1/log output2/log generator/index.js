require('dotenv').config()
const express = require('express')
const app = express()



app.get('/',(req,res)=>{
    res.status(200).json({message:"health check"})
})

let log



app.get('/log_Generator',(req,res)=>{
    log = `${new Date().toISOString()} : ${Math.random().toString(16).substring(2,20)}`

    res.status(200).json({"log":log})

})

const PORT = process.env.PORT || 8081

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
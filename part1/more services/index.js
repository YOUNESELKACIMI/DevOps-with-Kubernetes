require('dotenv').config()

const express = require('express')

const app = express()

let count = 0



app.get('/pingpong',(req,res)=>{

    res.send(`pong ${count}`)
    count+=1
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})


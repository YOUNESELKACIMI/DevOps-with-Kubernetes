require('dotenv').config()
const fs = require('fs')
const express = require('express')

const app = express()

const randomString = Math.random().toString(16).substring(2,20)


const printString = () => {
    let date = new Date().toISOString()
    console.log(date+": "+randomString)
}

app.get('/log',(req,res)=>{
    let date = new Date().toISOString()
    let logString = date+": "+randomString
    fs.writeFile("/usr/share/pingpongTimestamps.txt",logString,(err)=>{
        if(err){
            console.log("failed to write data")
            return
        }
        console.log("successfully writen data to file")
    })
    res.send(logString).status(200)
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})




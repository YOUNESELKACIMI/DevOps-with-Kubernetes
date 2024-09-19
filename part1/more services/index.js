require('dotenv').config()
const http = require('http')
const fs = require('fs')
const express = require('express')

const app = express()

let count = 0

let fileContent 

app.get('/pingpong',async (req,res)=>{
    await http.get("http://localhost:3000/log")

    fs.readFile("/usr/share/pingpongTimestamps.txt","utf8",(err,data)=>{
        if(err){
            console.log("failed to read from file")
            return
        }
        console.log(`file content is : ${data} `)
        fileContent = `${data} \n  Ping Pongs: ${count}`
    })
    console.log(String(fileContent))
    

    res.send(`${fileContent}`)
    count+=1
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})


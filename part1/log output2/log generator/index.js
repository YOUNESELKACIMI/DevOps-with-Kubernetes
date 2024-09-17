require('dotenv').config()
const express = require('express')
const app = express()
const fs = require('fs')


let log



app.get('/log_Generator',(req,res)=>{
    log = `${new Date().toISOString()} : ${Math.random().toString(16).substring(2,20)}`

    fs.writeFile("/usr/share/sharedFile.txt",log,(err)=>{
        if(err){
            console.log("failed to write to file "+err)
        }
    })
    res.status(200).send(`log has been writen to file : ${log}`)
})

const PORT = process.env.PORT || 8081

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
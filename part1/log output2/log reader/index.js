require('dotenv').config()
const express = require('express')
const app = express()

const fs = require('fs')


let fileLog

app.get('/log_reader',(req,res)=>{
    fs.readFile("/usr/share/sharedFile.txt","utf-8",(err, data) => {
      if (err) {
        console.error('Error reading the file: ' + err)
        return
      }
      console.log(`log read from file is ${data}`)
      fileLog = data  
    })
    res.status(200).send(`log read from file is ${fileLog}`)

})

const PORT = process.env.PORT || 8082

app.listen(8003,()=>{
    console.log(`listening on port ${PORT}`)
})
require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()




let count = 0
const url = "http://localhost:8081/log_Generator"

app.get('/log_reader',async (req,res)=>{

    const response = await axios.get(url)
    console.log(response.data)
    const log = response.data.log


    res.status(200).send(`<p>file content: this text is from file</p><p>env variable: ${process.env.MESSAGE}</p><p>${log}</p><p>${count}</p>`)
    //res.status(200).send(`${log} \n\n ${count}`)
    count++

})

const PORT = process.env.PORT || 8082

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})